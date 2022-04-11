import React from 'react';
import '../../relateOutfitLists.scss';
import GetStars from './getStars';

export default function relatedCardReview({ relatedProductRatingInfo, index }) {
  if (index < relatedProductRatingInfo.length && relatedProductRatingInfo[index].numReviews > 0) {
    return (
      <div id="productStarRating">
        <GetStars
          ratingValue={relatedProductRatingInfo[index].rating}
          numRatings={relatedProductRatingInfo[index].numReviews}
        />
      </div>
    );
  }
  return (
    <div id="productStarRating">
      <GetStars
        ratingValue={0}
        numRatings={0}
      />
    </div>
  );
}
