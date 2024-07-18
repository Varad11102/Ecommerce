import React from 'react';
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../../Data/mens_kurta/kurta';

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div>
        <HomeSectionCarosel />
      </div>
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-5">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Womens Saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Womens Dress"} />
      </div>
      
    </div>
  );
};

export default HomePage;
