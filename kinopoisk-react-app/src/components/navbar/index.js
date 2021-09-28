import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css'

import Search from '../../components/search';

const Navbar = () => {

    const user = useSelector((state) => { return state.user })
  
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-menu'>
            <Link to={'/'} className='navbar-main'>Главная</Link>
            <Link to={'/new'} className='navbar-new'>Новинки</Link>
            <Link to={'/popular'} className='navbar-popular'>Популярные</Link>
            <Search />
            </div>
            <div className='navbar-user'>
                <Link to={'/save'} className='navbar-save'></Link>
                <Link to={'/sign-in'} className={user ? 'user-img' : 'sign-in'}></Link>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar;