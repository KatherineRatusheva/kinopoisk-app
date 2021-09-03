import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
    
    const images = [
        { url: "https://www.film.ru/sites/default/files/filefield_paths/raya-and-the-last-dragon-social-1.jpg" },
        { url: "https://www.film.ru/sites/default/files/filefield_paths/raya-and-the-last-dragon-social-1.jpg" },
        { url: "https://www.film.ru/sites/default/files/filefield_paths/raya-and-the-last-dragon-social-1.jpg" },
    ];

    return (
        <div className='slider' style={{margin: "0 16px"}}>
            <SimpleImageSlider
            width='80%'
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}/>
        </div>
    )
}

export default Slider;