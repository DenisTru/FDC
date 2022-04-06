import React from 'react';
import '../relateCompareLists.scss';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

const compareCards = () => (
  <div id="compare-slider">
    {slides.map((slide) => (
      <div className="slider-cards" key={JSON.stringify(slide)}>
        <div id="image">
          Image
        </div>
        <div id="favorite-star">
          Favorite Star
        </div>
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
