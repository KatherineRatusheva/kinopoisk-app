import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants';
import './index.css'

const category = ['Боевик', 'Драма', 'Комедия', 'Мелодрама', 'Триллер', 'Семейный', 'Фантастика', 'Фэнтези', 'Мультфильм', 'Ужасы']

const NavbarTags = () => {

    const dispatch = useDispatch()
    const selectCategory = useSelector((state) => { return state.selectCategory })

    const getSelectCategory = (item) => {
        dispatch ({
            type: ACTION_TYPES.SELECT_CATEGORY_FILMS,
            payload: item
        })
    }
    
    return (
        <div className='tags-menu'>
            {category.map((item) => 
            <Link to={`/${item}`} key={item} onClick={() => getSelectCategory(item)}><div className='tag-name'> {item} </div></Link>)}
        </div>

    )
}

export default NavbarTags;