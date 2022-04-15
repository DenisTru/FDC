import React from 'react';
import './compareModal.scss';
import CompareTable from './compareTable';

export default function compareModal({
  compare, stopComparing, productBundle,
  productToCompare, productToCompareStyles, productToCompareRating,
}) {
  if (compare) {
    document.body.classList.add('active-modal');
    return (
      <div className="modal">
        <div
          className="overlay"
          onClick={stopComparing}
          onKeyPress={stopComparing}
          role="button"
          tabIndex={0}
          aria-label="Close Comparison Table"
        />
        <div className="modal-content">
          <h2>Comparing</h2>
          <button className="close-modal" type="button" onClick={stopComparing}>X</button>
          <CompareTable
            currentProduct={productBundle.productInfo}
            currentProductStyles={productBundle.styles}
            currentProductRatingInfo={productBundle.productReviews}
            productToCompare={productToCompare}
            productToCompareStyles={productToCompareStyles}
            productToCompareRating={productToCompareRating}
          />
        </div>
      </div>
    );
  }
  document.body.classList.remove('active-modal');
  return (
    <div id="hidden-compare-modal"> </div>
  );
}
