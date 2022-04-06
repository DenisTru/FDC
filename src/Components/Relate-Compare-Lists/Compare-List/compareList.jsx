import React from 'react';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CompareCards from './compareCards';

const slideLeft = () => {
  const slider = document.getElementById('compare-slider');
  slider.scrollLeft -= 235;
};

const slideRight = () => {
  const slider = document.getElementById('compare-slider');
  slider.scrollLeft += 235;
};

const compareList = () => (
  <div>
    <p>YOUR OUTFIT</p>
    <div className="slider-container">
      <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
      <CompareCards />
      <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
    </div>
  </div>
);

export default compareList;
