import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import './index.css';

const Search = () => {

    const dispatch = useDispatch()
    const inputSearch = useSelector((state) => { return state.inputSearch })

    const getValueSearch = (event) => {
        dispatch ({
            type: ACTION_TYPES.SEARCH_INPUT,
            payload: event.target.value
        })
    }

    return (
        <div className="search-form">
            <form>
                <input type="text" className='input-search' 
                placeholder="Искать здесь..." 
                value={inputSearch} 
                onChange={getValueSearch}/>
                <button className='button-search'></button>
            </form>   
        </div>
    )
}

export default Search;