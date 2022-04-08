import React from 'react';
import '../relateCompareLists.scss';
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
  currentSelectedStyle, reviewsAverageRating,
  relatedProducts, relatedProductStyles, relatedProductRatings,
}) {
  if (reviewsAverageRating) {
    return (
      <div>
        <p>RELATED PRODUCTS</p>
        <div className="slider-container">
          <RelatedCards
            stylePhotos={currentSelectedStyle.photos}
            reviewsAverageRating={reviewsAverageRating}
            relatedProducts={relatedProducts}
            relatedProductStyles={relatedProductStyles}
            relatedProductRatings={relatedProductRatings}
          />
          <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
          <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>RELATED PRODUCTS</p>
      <div className="slider-container">
        <RelatedCards />
        <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
        <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
      </div>
    </div>
  );
}
