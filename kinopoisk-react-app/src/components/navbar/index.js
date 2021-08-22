import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants';
import './index.css'

const Navbar = () => {

    const dispatch = useDispatch()

    const selectNavigationType = useSelector((state) => { return state.selectNavigationType })

    const getTypeFilm = (item) => {
        dispatch ({
            type: ACTION_TYPES.SELECT_NAVIGATION_TYPY_FILMS,
            payload: item
        })
    }
    
    return (
        <nav className='navbar'>
            <Link to={'/'} className='navbar-main'>Главная</Link>
            <Link to={'/new'} className='navbar-new' onClick={()=> getTypeFilm("Новинки")}>Новинки</Link>
            <Link to={'/popular'} className='navbar-popular' onClick={()=> getTypeFilm("Популярные")}>Популярные</Link>
            <Link to={'/top'} className='navbar-top' onClick={()=> getTypeFilm("ТОП")}>ТОП</Link>
            <Link to={'/save'} className='navbar-save'>Хочу посмотреть</Link>

            <Link to={'/sign-in'} className='sign-in'>Login</Link>
        </nav>

    )
}

export default Navbar;