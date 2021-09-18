import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import './index.css';
import Swal from 'sweetalert2';
import ReactPlayer from 'react-player/youtube'
import { getMoviesCard, addSaveMovieApi, getMovies } from '../../actions'
import { Rating } from 'react-simple-star-rating';


const FilmCard = () => {
    const dispatch = useDispatch()

    const cardFilm = useSelector((state) => { return state.cardFilm })
    const saveFilmsUser = useSelector((state) => { return state.saveFilmsUser })
    const user = useSelector((state) => { return state.user })
    const films = useSelector((state) => { return state.films })

    const {id} = useParams()

    useEffect(() => {
        dispatch(getMoviesCard(id))
        dispatch(getMovies())
        window.scrollTo(0, 0)
    }, [getMoviesCard])

    const getMovieReccomend = (id) => {
        dispatch(getMoviesCard(id))
        window.scrollTo(0, 0)  
    }

    // сохранить фильм в избранное
    const [buttonSaveFilm, setButtonSaveFilm] = useState(false) // кнопка 'Буду смотреть' если нет пользователя

    const saveFilm = async () => {

        if(user) {
            dispatch(addSaveMovieApi(saveFilmsUser, cardFilm))
        } else
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Вы должны зарегистрироваться!',
        }).then((result) => {
            if (result.isConfirmed) {
                setButtonSaveFilm(true)
            }
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
                        <div className='col-name'> Слоган: </div>
                        <div className='col-description'>{cardFilm.tagline} </div>
                    </div>
                    
                    <div className='col'>
                        <div className='col-name'> Год: </div>
                        <div className='col-description'> {cardFilm.year} </div>
                    </div>
                    <div className='col'>
                        <div className='col-name'> Страна: </div>
                        <div className='col-description'> {cardFilm.country?.map((item) => `${item}, ` )} </div>
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
                        <div className='col-name'> Время: </div>
                        <div className='col-description'> {cardFilm.time} </div>
                    </div>

                    <div className='col'>
                        <div className='col-name'> Рейтинг: <span className='rating'>{cardFilm.rating}</span> </div>
                        <div className='col-rating'>
                        <Rating ratingValue={cardFilm.rating} stars={10} />
                        </div>
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

            <div className='recommend-movie'>
                <div className='recommend-movie-title'>Рекомендуем посмотреть:</div>

                <div className='recommend-movie-body'>
                {films.filter(item => item.rating > '8').map(item => (
                <div key={item.id} className='films-card'>
                    <div className='film-rating'> {item.rating} </div>
                    <Link to={`/film/${item.id}`} onClick={() => getMovieReccomend(item.id)}>
                        <img className='film-img' src={item.img} />
                    </Link>
                    <div className='film-name'> {item.name} </div>
                </div>
                )).slice(0,6)}
                </div>
            </div>

        </div>
    )
}

export default FilmCard;