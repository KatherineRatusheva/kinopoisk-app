import React from 'react';
import Films from '../../components/films';
import './index.css'
import NavbarTags from '../../components/navTags';

const Main = () => {

    return (

        <div className='app'>
            <NavbarTags />
            <div className='films-container'>
                <Films />
            </div>
        </div>

    )
}

export default Main;