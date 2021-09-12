import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import './index.css';
import { Link } from "react-router-dom";
import { getMoviesSearch } from "../../actions";

const Search = () => {

    const dispatch = useDispatch()
    const inputSearch = useSelector((state) => { return state.inputSearch })

    const getValueSearch = (event) => {
        dispatch ({
            type: ACTION_TYPES.SEARCH_INPUT,
            payload: event.target.value
        })
    }

    const getMovies = async (inputSearchValue) => {
        dispatch(getMoviesSearch(inputSearchValue))
    }

    return (
        <div className="search-form">
            <form>
                <input type="text" className='input-search' 
                placeholder="Искать здесь..." 
                value={inputSearch} 
                onChange={getValueSearch}/>

                <Link to={`/search=${inputSearch}`}>
                    <button className='button-search' onClick={() => getMovies(inputSearch)}></button>
                </Link>
            </form>   
        </div>
    )
}

export default Search;