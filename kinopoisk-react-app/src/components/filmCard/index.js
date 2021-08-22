import React, { useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { useParams } from 'react-router-dom';
import './index.css'

const FilmCard = () => {
    const dispatch = useDispatch()
    const cardFilm = useSelector((state) => { return state.cardFilm })

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

    
    return (
        <div className='film-card'>
            
            <div className='film-body'>
                <img src={cardFilm.img} className='film-picture'/>
                
                <div className='film-subbody'>
                    <div className='film-title'> {cardFilm.name} </div>
                    
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
                </div>
            </div>
            <button className='film-save'>Буду смотреть</button>
            <div className='film-description'> {cardFilm.description} </div>
        </div>
    )
}

export default FilmCard;