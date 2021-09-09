import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
    
    const images = [
        { url: "https://thumbs.dfs.ivi.ru/storage33/contents/0/1/3ef212d327d254e0eb7da210f3370d.jpg" },
        { url: "https://kix.am/wp-content/uploads/2021/06/cruella_-_facebook.jpg" },
        { url: "https://thumbs.dfs.ivi.ru/storage9/contents/c/8/484672e04ec81941f503c0a7e60e7c.jpg" },
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