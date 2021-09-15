import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { Redirect, useParams } from 'react-router-dom';
import './index.css';
import Swal from 'sweetalert2';
import ReactPlayer from 'react-player/youtube'
import { getMoviesCard } from '../../actions'

import { Rating } from 'react-simple-star-rating';

const FilmCard = () => {
    const dispatch = useDispatch()
    const cardFilm = useSelector((state) => { return state.cardFilm })
    const saveFilmsUser = useSelector((state) => { return state.saveFilmsUser })
    const user = useSelector((state) => { return state.user })

    const {id} = useParams()

    useEffect(() => {
        dispatch(getMoviesCard(id))
        window.scrollTo(0, 0)
    }, [getMoviesCard])


    // сохранить фильм в избранное
    const [buttonSaveFilm, setButtonSaveFilm] = useState(false) // кнопка 'Буду смотреть' если нет пользователя

    const saveFilm = async () => {
        
        if(user) {
            if (!saveFilmsUser) {
                try {
                    const responce = await axios.patch(`http://localhost:3000/users/${user.id}`, 
                    {
                        "saveFilms": [cardFilm]
                    })
                    dispatch ({
                        type: ACTION_TYPES.SAVE_FILM_USER,
                        payload: responce.data.saveFilms
                    }) 
                } catch (err) {
                    console.log('response error', err);
                }
            } else 
            try {
                const responce = await axios.patch(`http://localhost:3000/users/${user.id}`, 
                {
                    "saveFilms": [ ...saveFilmsUser, cardFilm]
                })
                dispatch ({
                    type: ACTION_TYPES.SAVE_FILM_USER,
                    payload: responce.data.saveFilms
                }) 
            } catch (err) {
                console.log('response error', err);
            }

        } else
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Вы должны зарегистрироваться!',
        }).then((result) => {
            if (result.isConfirmed) {
                setButtonSaveFilm(true)
            }})
    }


    return (
        <div className='film-card'>
            
            <div className='film-body'>
                <img src={cardFilm.img} className='film-picture'/>
                
                <div className='film-subbody'>
                    <div className='film-title'> {cardFilm.name} 
                        <span className='film-age'> {cardFilm.age} </span>
                    </div>
                    
                    <div className='col'>
                        <div className='col-name'> Год производства: </div>
                        <div className='col-description'> {cardFilm.year} </div>
                    </div>
                    <div className='col'>
                        <div className='col-name'> Страна: </div>
                        <div className='col-description'> {cardFilm.country?.map((item) => `${item} ` )} </div>
                    </div>
                    <div className='col'>
                        <div className='col-name'> Жанр: </div>
                        <div className='col-description'> {cardFilm.category?.map((item) => `${item}, ` )} </div>
                    </div>
                    <div className='col'>
                        <div className='col-name'> Режиссер: </div>
                        <div className='col-description'> {cardFilm.producer} </div>
                    </div>
                    <div className='col'>
                        <div className='col-name'> В главных ролях: </div>
                        <div className='col-description'> {cardFilm.actors?.map((item) => `${item}, ` )} </div>
                    </div>

                    <div className='col'>
                        <div className='col-name'> Рейтинг: {cardFilm.rating} </div>
                        <div className='col-description'>
                        <Rating ratingValue={cardFilm.rating} stars={10} /> </div>
                    </div>
                    
                </div>
            </div>

            {saveFilmsUser && 
            saveFilmsUser.find(movie => movie.name === cardFilm.name) ? 
            <button className='film-save-add'>Фильм сохранен</button>
            : <button className='film-save' onClick={saveFilm}>Буду смотреть</button>
            }
            {buttonSaveFilm === true && <Redirect to="/sign-in"/>}

            <div className='film-video'><ReactPlayer width='100%' height='450px' controls={true} url={cardFilm.video} /></div>
            <div className='film-description'> {cardFilm.description} </div>

        </div>
    )
}

export default FilmCard;