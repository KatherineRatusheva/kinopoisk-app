import React from 'react';
import './index.css'
import Search from '../../components/search';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const SearchPage = () => {
    const searchFilms = useSelector((state) => { return state.searchFilms })
    const inputSearch = useSelector((state) => { return state.inputSearch })

    return (

        <div className='app'>
            <Search />
            <div className='search-text'> Найдено по запросу "{inputSearch}": {searchFilms.length}</div>
            <div className='search-container'>
                <>
                {searchFilms.map((item =>
                <div key={item.id} className='films-card'>
                    <div className='film-rating'> {item.rating} </div>
                    <Link to={`/film/${item.id}`}>
                        <img className='film-img' src={item.img} />
                    </Link>
                    <div className='film-name'> {item.name} </div>
                    </div>
                    ))}
                </>
            </div>
        </div>

    )
}

export default SearchPage;