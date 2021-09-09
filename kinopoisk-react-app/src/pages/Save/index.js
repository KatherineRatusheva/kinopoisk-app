import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import './index.css';

const SaveFilms = () => {

    const dispatch = useDispatch()
    const saveFilmsUser = useSelector((state) => { return state.saveFilmsUser })
    const user = useSelector((state) => { return state.user })

    return (

        <div className='save-container'>
            {user ?
            <>
            <h1 className='category-title'>Моя подборка</h1>
            <div className='category-body'>
                {saveFilmsUser.map((item =>
                <div key={item.id} className='films-card'>
                    <div className='film-rating'> {item.rating} </div>
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