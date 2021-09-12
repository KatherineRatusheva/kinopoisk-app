import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import './index.css'
import { getMovies } from "../../actions";

const Films = () => {
    const dispatch = useDispatch()
    const films = useSelector((state) => { return state.films })
    
    useEffect(() => {
        dispatch(getMovies())
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