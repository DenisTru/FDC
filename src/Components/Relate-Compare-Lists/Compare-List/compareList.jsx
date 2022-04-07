import React from 'react';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CompareCards from './Compare-Cards/compareCards';

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
    <p id="section-name">YOUR OUTFIT</p>
    <div className="slider-container">
      <CompareCards />
      <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
      <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
    </div>
  </div>
);

export default compareList;
