import React from 'react';
import Films from '../../components/films';
import './index.css'
import NavbarTags from '../../components/navTags';
import Search from '../../components/search';

const Main = () => {

    return (

        <div className='app'>
            <Search />
            <NavbarTags />
            <div className='films-container'>
                <Films />
            </div>
        </div>

    )
}

export default Main;