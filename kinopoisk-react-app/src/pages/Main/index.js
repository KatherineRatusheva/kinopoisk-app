import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Films from '../../components/films';
import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";

const Main = () => {

    const category = ['Боевик', 'Детектив', 'Драма', 'Комедия', 'Мелодрама', 'Триллер', 'Фантастика', 'Ужасы', 'Мультфильм']
    
    const dispatch = useDispatch()
    const selectCategory = useSelector((state) => { return state.selectCategory })

    const onFilms = (item) => {
        dispatch ({
            type: ACTION_TYPES.SELECT_CATEGORY_FILMS,
            payload: item
        })
    }

    useEffect(() => {
        onFilms(selectCategory)
    }, [selectCategory])

    return (

        <div className='app'>

            <div className='tags-menu'>
                {category.map((item) => 
                <Link to={`/${item}`} key={item} onClick={() => onFilms(item)}><div className='tag-name'> {item} </div></Link>)}
            </div>
            
            <div className='films-container'>
                <Films />
            </div>

        </div>

    )
}

export default Main;