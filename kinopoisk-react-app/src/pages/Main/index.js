import React from 'react';
import Films from '../../components/films';
import './index.css'
import NavbarTags from '../../components/navTags';
import Slider from '../../components/slider';
import Filter from '../../components/filter';

const Main = () => {

    return (
        <div className='app'>
            <Slider />
            <NavbarTags />
            <Filter />
            <div className='films-container'>
                <Films />
            </div>
        </div>
    )
}

export default Main;