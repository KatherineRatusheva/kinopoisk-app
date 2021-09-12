import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './index.css'
import Slider from '../slider';
import NavbarTags from '../navTags';

const FilmCategory = () => {

    const selectCategory = useSelector((state) => { return state.selectCategory })
    const films = useSelector((state) => { return state.films })

    return (

        <div className='container'>
            <div className='app'>
                <Slider />
                <NavbarTags />

                <div className='films-container-category'>
                    <h1 className='category-title'> {selectCategory} </h1>

                    <div className='category-body'>
                        {films.filter(item => item.category.includes(`${selectCategory}`)).map(item => (
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

            </div>
        </div>




    )
}

export default FilmCategory;