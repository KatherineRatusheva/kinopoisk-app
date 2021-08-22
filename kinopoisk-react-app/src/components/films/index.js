import React, { useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { Link } from "react-router-dom";
import './index.css'

const Films = () => {
    const dispatch = useDispatch()
    const films = useSelector((state) => { return state.films })

    const getMovies = async () => {
        try {
            const responce = await axios.get(`http://localhost:3000/films`)
            dispatch ({
                type: ACTION_TYPES.GET_FILMS,
                payload: responce.data
            })

        } catch (err) {
            console.log('response error', err);
        }
    }
    
    useEffect(() => {
        getMovies()
    }, [])

    
    return (  
        <>
        {films.map((item =>
            <div key={item.id} className='films-card'>
                <div className='film-rating'> {item.rating} </div>
                <Link to={`/film/${item.id}`}>
                    <img className='film-img' src={item.img} />
                </Link>
                <div className='film-name'> {item.name} </div>
            </div>
        ))}
        </>
    )
}

export default Films;