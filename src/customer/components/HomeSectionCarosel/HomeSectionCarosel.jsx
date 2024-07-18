import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta/kurta';

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
  };

  const items = mens_kurta.slice(1,10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  )) || [];

  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  const syncActiveIndex = (e) => setActiveIndex(e.item);

  return (
    <>
      <div>
        <h2 className="font-extrabold py-5 text-lg underline">{sectionName}</h2>
      </div>
      <div className="px-4 border lg:px-8" style={{ position: 'relative' }}>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          disableButtonsControls
          disableDotsControls
        />
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '1rem',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
            }}
            aria-label="previous"
          >
            <ArrowBackIosIcon sx={{ color: 'black' }} />
          </Button>
        )}
        {activeIndex < items.length - 1 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '1rem',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ color: 'black' }} />
          </Button>
        )}
      </div>
    </>
  );
};

export default HomeSectionCarosel;
