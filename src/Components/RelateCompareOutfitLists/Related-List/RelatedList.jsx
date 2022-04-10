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
  relatedProducts, relatedProductStyles,
  relatedProductRatingInfo, startComparing,
  changeProductID, productId,
}) {
  return (
    <div>
      <p>RELATED PRODUCTS</p>
      <div className="slider-container">
        <RelatedCards
          relatedProducts={relatedProducts}
          relatedProductStyles={relatedProductStyles}
          relatedProductRatingInfo={relatedProductRatingInfo}
          startComparing={startComparing}
          changeProductID={changeProductID}
          productId={productId}
        />
        <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
        <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
      </div>
    </div>
  );

}
