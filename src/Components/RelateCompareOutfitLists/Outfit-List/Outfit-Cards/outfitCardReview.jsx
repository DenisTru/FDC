import React from 'react';
import '../../relateOutfitLists.scss';
import GetStars from '../../Related-List/Related-Cards/getStars';

export default function outfitCardReview({ productRating }) {
  if (productRating.length && productRating[0].numReviews > 0) {
    return (
      <div>
        <div id="productStarRating">
          <GetStars ratingValue={productRating[0].rating} />
        </div>
        <div id="number-of-ratings">
          {`${`(${productRating[0].numReviews})`}`}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div id="productStarRating">
        <GetStars ratingValue={0} />
      </div>
      <div id="number-of-ratings">
        {`${'No Reviews'}`}
      </div>
    </div>
  );
}
