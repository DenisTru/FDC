import React from 'react';
import './compareModal.scss';
import CompareTable from './compareTable';

export default function compareModal({
  compare, stopComparing,
  currentProduct, currentProductStyles, currentProductRatingInfo,
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
            currentProduct={currentProduct}
            currentProductStyles={currentProductStyles}
            currentProductRatingInfo={currentProductRatingInfo}
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
    <div> </div>
  );
}
