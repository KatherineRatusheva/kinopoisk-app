import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios'
import { ACTION_TYPES } from '../../constants';

const NavCategory = () => {

    const dispatch = useDispatch()

    const films = useSelector((state) => { return state.films })
    const selectNavigationType = useSelector((state) => { return state.selectNavigationType })

    const getMovies = async (selectCategoryMenu) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films?type=${selectCategoryMenu}`)
            dispatch ({
                type: ACTION_TYPES.GET_FILMS,
                payload: responce.data
            })

        } catch (err) {
            console.log('response error', err);
        }
    }

    useEffect(() => {
        getMovies(selectNavigationType)
    }, [selectNavigationType])

    return (
        <div className='app-category'>
            <h1 className='category-title'> {selectNavigationType} </h1>
            <div className='category-body'>
            {films.filter(item => item.type === `${selectNavigationType}`).map(item => (
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