import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants';
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const category = ['Боевик', 'Драма', 'Комедия', 'Мелодрама', 'Триллер', 'Семейный', 'Фантастика', 'Фэнтези', 'Мультфильм', 'Ужасы']

const NavbarTags = () => {

    const dispatch = useDispatch()
    const selectCategory = useSelector((state) => { return state.selectCategory })

    const getSelectCategory = (item) => {
        dispatch ({
            type: ACTION_TYPES.SELECT_CATEGORY_FILMS,
            payload: item
        })
    }

    const settings = {
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 9,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
    }


    return (

        <Slider className='tags-menu' {...settings}>
            {category.map((item) => 
            <div key={item}>
              <Link to={`/${item}`} onClick={() => getSelectCategory(item)}><div className='tag-name'> {item} </div></Link>
            </div>)}
        </Slider>

    )
}

export default NavbarTags;