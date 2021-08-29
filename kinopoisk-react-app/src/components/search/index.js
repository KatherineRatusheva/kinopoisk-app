import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import './index.css';
import axios from 'axios'
import { Link } from "react-router-dom";

const Search = () => {

    const dispatch = useDispatch()
    const inputSearch = useSelector((state) => { return state.inputSearch })

    const getValueSearch = (event) => {
        dispatch ({
            type: ACTION_TYPES.SEARCH_INPUT,
            payload: event.target.value
        })
    }

    const getMoviesSearch = async (inputSearchValue) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films?q=${inputSearchValue}`)
            dispatch ({
                type: ACTION_TYPES.GET_SEARCH_FILMS,
                payload: responce.data
            })

        } catch (err) {
            console.log('response error', err);
        }
    }

    return (
        <div className="search-form">
            <form>
                <input type="text" className='input-search' 
                placeholder="Искать здесь..." 
                value={inputSearch} 
                onChange={getValueSearch}/>

                <Link to={`/search=${inputSearch}`}>
                    <button className='button-search' onClick={() => getMoviesSearch(inputSearch)}></button>
                </Link>
            </form>   
        </div>
    )
}

export default Search;