import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getMoviesNavbar } from '../../actions';

const NavCategory = ({type}) => {

    const dispatch = useDispatch()

    const films = useSelector((state) => { return state.films })

    useEffect(() => {
        dispatch(getMoviesNavbar(type))
    }, [type])

    return (
        <div className='app-category'>
            <h1 className='category-title'> {type} </h1>
            <div className='category-body'>
            {films.filter(item => item.type === `${type}`).map(item => (
                <div key={item.id} className='films-card'>
                    <div className='film-rating'> {item.rating} </div>
                    <Link to={`/film/${item.id}`}>
                        <img className='film-img' src={item.img} />
                    </Link>
                    <div className='film-name'> {item.name} </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default NavCategory;