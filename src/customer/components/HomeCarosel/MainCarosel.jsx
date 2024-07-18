import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCaroselData } from './MainCaroselData';  // Adjust the path as needed

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const MainCarosel = () => {
    const items = homeCaroselData.map((item) => (
        <img className='cursor-pointer shadow-md' src={item.image} alt="carousel-item" key={item.image} />
    ));

    return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={1000}
            infinite
            controlsStrategy="alternate"
            disableButtonsControls
            
        />
    );
};

export default MainCarosel;
