import React from 'react';
import '../relateOutfitLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RelatedCards from './Related-Cards/relatedCards';

const slideLeft = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft -= 240;
};

const slideRight = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft += 240;
};

export default function relatedList({
  startComparing, changeProductID, productBundle, productBundles,
}) {
  return (
    <div className="sliders">
      <h3>RELATED PRODUCTS</h3>
      <div className="slider-container">
        <RelatedCards
          startComparing={startComparing}
          changeProductID={changeProductID}
          productBundle={productBundle}
          productBundles={productBundles}
        />
        <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
        <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
      </div>
    </div>
  );
}
