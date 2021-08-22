import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    
    return (
        <nav className='navbar'>
            <Link to={'/'} className='navbar-main'>Главная</Link>
            <Link to={'/new'} className='navbar-new'>Новинки</Link>
            <Link to={'/popular'} className='navbar-popular'>Популярные</Link>
            <Link to={'/top'} className='navbar-top'>ТОП</Link>
            <Link to={'/save'} className='navbar-save'>Хочу посмотреть</Link>

            <Link to={'/sign-in'} className='sign-in'>Login</Link>
        </nav>

    )
}

export default Navbar;