import React from 'react';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RelatedCards from './relatedCards';

const slideLeft = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft -= 235;
};

const slideRight = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft += 235;
};

const relatedList = () => (
  <div>
    <p>RELATED PRODUCTS</p>
    <div className="slider-container">
      <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
      <RelatedCards />
      <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
    </div>
  </div>
);

export default relatedList;
