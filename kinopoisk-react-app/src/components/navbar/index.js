import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants';
import './index.css'

import Search from '../../components/search';

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
        <>
        <nav className='navbar'>
            <div className='navbar-menu'>
            <Link to={'/'} className='navbar-main'>Главная</Link>
            <Link to={'/new'} className='navbar-new' onClick={()=> getTypeFilm("Новинки")}>Новинки</Link>
            <Link to={'/popular'} className='navbar-popular' onClick={()=> getTypeFilm("Популярные")}>Популярные</Link>
            <Link to={'/top'} className='navbar-top' onClick={()=> getTypeFilm("ТОП")}>ТОП</Link>
            <Search />
            </div>
            <div className='navbar-user'>
                <Link to={'/save'} className='navbar-save'></Link>
                <Link to={'/sign-in'} className='sign-in'>Login</Link>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar;