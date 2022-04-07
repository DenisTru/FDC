import React from 'react';
import '../../relateCompareLists.scss';
import CompareCardButton from './compareCardButton';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

const compareCards = () => (
  <div id="compare-slider">
    {slides.map((slide) => (
      <div className="slider-cards" key={JSON.stringify(slide)}>
        <div id="image-container">
          Image
        </div>
        <CompareCardButton />
        <div id="productCategory">
          Product Category
        </div>
        <div id="productName">
          Product Name
        </div>
        <div id="productPrice">
          Product Price
        </div>
        <div id="productStarRating">
          Product Star Rating
        </div>
      </div>
    ))}
  </div>
);

export default compareCards;
