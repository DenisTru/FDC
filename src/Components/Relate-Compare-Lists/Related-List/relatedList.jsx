import React from 'react';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RelatedCards from './Related-Cards/relatedCards';

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
    <p id="section-name">RELATED PRODUCTS</p>
    <div className="slider-container">
      <RelatedCards />
      <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
      <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
    </div>
  </div>
);

export default relatedList;
