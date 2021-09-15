import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { deleteMovieApi } from "../../actions";

const SaveFilms = () => {
    const dispatch = useDispatch()

    const saveFilmsUser = useSelector((state) => { return state.saveFilmsUser })
    const user = useSelector((state) => { return state.user })

    const deleteMovie = async (name) => {
        const newArraySaveMovies = saveFilmsUser.filter(item => item.name !== name)
        dispatch(deleteMovieApi(newArraySaveMovies))
    }

    return (

        <div className='save-container'>
            {user ?
            <>
            <h1 className='category-title'>Сохраненные фильмы</h1>
            <div className='category-body'>
                {saveFilmsUser?.map((item =>
                <div key={item.id} className='save-films-card'>
                    <button className='button-delete' onClick={() => deleteMovie(item.name)}></button>
                    <div className='film-rating-save'> {item.rating} </div>
                    <Link to={`/film/${item.id}`}>
                        <img className='film-img' src={item.img} />
                    </Link>
                    <div className='film-name'> {item.name} </div>
                </div>
                ))}
            </div>
            </>
            :
            <div className='save-description'>Вы должны зарегистрироваться!</div>
            }
        </div>
    
    )
}

export default SaveFilms;