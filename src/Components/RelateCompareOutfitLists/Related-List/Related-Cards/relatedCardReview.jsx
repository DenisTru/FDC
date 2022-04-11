import React from 'react';
import '../../relateOutfitLists.scss';
import GetStars from './getStars';

export default function relatedCardReview({ relatedProductRatingInfo, index }) {
  if (index < relatedProductRatingInfo.length && relatedProductRatingInfo[index].numReviews > 0) {
    return (
      <div>
        <div id="productStarRating">
          <GetStars ratingValue={relatedProductRatingInfo[index].rating} />
        </div>
        <div id="number-of-ratings">
          {`${`(${relatedProductRatingInfo[index].numReviews})`}`}
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
        {`${'(0)'}`}
      </div>
    </div>
  );
}
