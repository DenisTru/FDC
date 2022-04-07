import React from 'react';
import '../../relateCompareLists.scss';
import RelatedCardButton from './relatedCardButton';
import RelatedCardPrice from './relatedCardPrice';
import RelatedCardImage from './relatedCardImage';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

export default function relatedCards() {
  return (
    <div id="related-slider">
      {slides.map((slide) => (
        <div className="slider-cards" key={JSON.stringify(slide)}>
          <RelatedCardImage />
          <RelatedCardButton />
          <div id="productCategory">
            Product Category
          </div>
          <div id="productName">
            Product Name
          </div>
          <RelatedCardPrice />
          <div id="productStarRating">
            Product Star Rating
          </div>
        </div>
      ))}
    </div>
  );
}
