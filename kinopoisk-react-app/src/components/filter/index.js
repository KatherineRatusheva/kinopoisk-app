import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { Link, Redirect } from "react-router-dom";
import './index.css'


const country = ["США", "Великобритания", "Франция", "Италия", "Австралия", "Дания", "Китай"]
const year = [2021, 2020, 2019, 2018, 2017]
const star = [
  { value: '9', label: 'Больше 9' },
  { value: '8', label: 'Больше 8' },
  { value: '7', label: 'Больше 7' },
  { value: '6', label: 'Больше 6' },
  { value: '5', label: 'Больше 5' },
];


const Filter = () => {

  const dispatch = useDispatch()
  const selectValueFilterCountry = useSelector((state) => { return state.selectValueFilterCountry })
  const selectValueFilterYear = useSelector((state) => { return state.selectValueFilterYear })
  const selectValueFilterStar = useSelector((state) => { return state.selectValueFilterStar })

  const getValueFilterCountry = (event) => {
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_COUNTRY,
      payload: event.target.innerHTML
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_YEAR,
      payload: null
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_STAR,
      payload: null
    })
  }

  const getValueFilterYear = (event) => {
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_YEAR,
      payload: event.target.innerHTML
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_COUNTRY,
      payload: null
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_STAR,
      payload: null
    })
  }

  const getValueFilterStar = (event) => {
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_STAR,
      payload: event.target.value
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_YEAR,
      payload: null
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_COUNTRY,
      payload: null
    })
  }

  // Открыть/закрывать выпадающий список
  const [styleCountry, setStyleCountry] = useState(false);
  const [styleYear, setStyleYear] = useState(false);
  const [styleStar, setStyleStar] = useState(false);

  const changeStyleCountry = () => {
    setStyleCountry(!styleCountry)
  }
  const changeStyleYear = () => {
    setStyleYear(!styleYear)
  }
  const changeStyleStar = () => {
    setStyleStar(!styleStar)
  }

  // Очистить значение фильтра
  const [clearFilterBtn, setClearFilterBtn] = useState(false);

  const clearFilter = () => {
    setClearFilterBtn(true)

    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_STAR,
      payload: null
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_YEAR,
      payload: null
    })
    dispatch ({
      type: ACTION_TYPES.SELECT_VALUE_FILTER_COUNTRY,
      payload: null
    })
  }
  
  return (
  
  <div className='dropdown-container'>

    <div className='dropdown' onClick={changeStyleCountry}>{selectValueFilterCountry ? selectValueFilterCountry : "Страны"}
    <div className='dropdown-options' style={{display: styleCountry === false ? 'none': 'block'}}>
      <ul onClick={getValueFilterCountry}>
        {country.map((item) => 
        <Link to={`/movies/${item}`} key={item}>
          <li className='dropdown-link'>{item}</li>
        </Link>
        )}
      </ul>
    </div>
    </div>

    <div className='dropdown' onClick={changeStyleYear}>{selectValueFilterYear ? selectValueFilterYear : "Годы"}
    <div className='dropdown-options' style={{display: styleYear === false ? 'none': 'block'}}>
      <ul onClick={getValueFilterYear}>
        {year.map((item) => 
        <Link to={`/movies/${item}`} key={item}>
          <li className='dropdown-link'>{item}</li>
        </Link>
        )}
      </ul>
    </div>
    </div>

    <div className='dropdown' onClick={changeStyleStar}>{selectValueFilterStar ? `Больше ${selectValueFilterStar}` : "Рейтинг"}
    <div className='dropdown-options' style={{display: styleStar === false ? 'none': 'block'}}>
      <ul onClick={getValueFilterStar}>
        {star.map((item) => 
        <Link to={`/movies/${item.value}`} key={item.value}>
          <li className='dropdown-link' value={item.value}>{item.label}</li>
        </Link>
        )}
      </ul>
    </div>
    </div>
    
    <button className='dropdown-button' onClick={clearFilter} value={clearFilterBtn}>✖ Сбросить все</button>
    {clearFilterBtn === true && <Redirect to="/"/>}

  </div>
  )

}

export default Filter;