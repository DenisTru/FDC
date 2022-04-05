import React from 'react';
import './relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

const compareList = () => (
  <div>
    <p>Your Outfit</p>
    <div className="slider-container">
      <MdKeyboardArrowLeft size={40} className="arrow-button-left" />
      <div className="slider">
        {slides.map((slide) => <div className="slider-cards">{slide}</div>)}
      </div>
      <MdKeyboardArrowRight size={40} className="arrow-button-right" />
    </div>
  </div>
);

export default compareList;
