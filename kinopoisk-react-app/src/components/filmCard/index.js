import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { Redirect, useParams } from 'react-router-dom';
import './index.css';
import Swal from 'sweetalert2';

import { Rating } from 'react-simple-star-rating';

const FilmCard = () => {
    const dispatch = useDispatch()
    const cardFilm = useSelector((state) => { return state.cardFilm })
    const rating = useSelector((state) => { return state.rating })
    const accessToken = useSelector((state) => { return state.accessToken })
    const saveFilmsUser = useSelector((state) => { return state.saveFilmsUser })
    const user = useSelector((state) => { return state.user })

    const {id} = useParams()

    const getMoviesCard = async (id) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films/${id}`)
            dispatch ({
                type: ACTION_TYPES.CLICK_FILM,
                payload: responce.data
            })

        } catch (err) {
            console.log('response error', err);
        }
    }
    
    useEffect(() => {
        getMoviesCard(id)
    }, [getMoviesCard])


    // сохранить фильм в избранное
    const [button, setButton] = useState(false)

    const saveFilm = async () => {
        if(user) {

            try {
                const responce = await axios.patch(`http://localhost:3000/users/${user.id}`,
                {
                    "SaveFilmName": [...saveFilmsUser, cardFilm]
                })
                dispatch ({
                    type: ACTION_TYPES.SAVE_FILM_USER,
                    payload: responce.data.SaveFilmName
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
                setButton(true)
            }})
    }

  const handleRating = (rate) => {
    dispatch ({
        type: ACTION_TYPES.CHANGE_RATING,
        payload: rate
    })
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
                        <Rating onClick={handleRating} ratingValue={rating} stars={10} /> </div>
                    </div>
                    
                </div>
            </div>

            <button className='film-save' onClick={saveFilm}>Буду смотреть</button>

            {/* {buttonSaveFilm === 'true' ? 
            <button className='film-save-add'>Добавлен в избранное</button>
            : <button className='film-save' onClick={saveFilm}>Буду смотреть</button>
            } */}

            {button === true && <Redirect to="/sign-in"/>}

            <div className='film-description'> {cardFilm.description} </div>
        </div>
    )
}

export default FilmCard;