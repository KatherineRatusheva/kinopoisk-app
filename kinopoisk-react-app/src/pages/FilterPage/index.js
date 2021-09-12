import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import NavbarTags from '../../components/navTags';
import Slider from '../../components/slider';
import Filter from '../../components/filter';

const FilterPage = () => {

    const selectValueFilterCountry = useSelector((state) => { return state.selectValueFilterCountry })
    const selectValueFilterYear = useSelector((state) => { return state.selectValueFilterYear })
    const selectValueFilterStar = useSelector((state) => { return state.selectValueFilterStar })
    const films = useSelector((state) => { return state.films })

    return (

        <div className='app'>
            <Slider />
            <NavbarTags />
            <Filter />

            {selectValueFilterCountry &&
                <div className='films-container'>
                    {films.filter(item => item.country.includes(`${selectValueFilterCountry}`)).map(item => (
                    <div key={item.id} className='films-card'>
                        <div className='film-rating'> {item.rating} </div>
                        <Link to={`/film/${item.id}`}>
                            <img className='film-img' src={item.img} />
                        </Link>
                        <div className='film-name'> {item.name} </div>
                    </div>
                    ))}
                </div>
            }

            {selectValueFilterYear &&
                <div className='films-container'>
                    {films.filter(item => item.year === `${selectValueFilterYear}`).map(item => (
                    <div key={item.id} className='films-card'>
                        <div className='film-rating'> {item.rating} </div>
                        <Link to={`/film/${item.id}`}>
                            <img className='film-img' src={item.img} />
                        </Link>
                        <div className='film-name'> {item.name} </div>
                    </div>
                    ))}
                </div>
            }
            
            {selectValueFilterStar &&
                <div className='films-container'>
                    {films.filter(item => item.rating >= `${selectValueFilterStar}`).map(item => (
                    <div key={item.id} className='films-card'>
                        <div className='film-rating'> {item.rating} </div>
                        <Link to={`/film/${item.id}`}>
                            <img className='film-img' src={item.img} />
                        </Link>
                        <div className='film-name'> {item.name} </div>
                    </div>
                    ))}
                </div>
            }

        </div>
    )
}

export default FilterPage;