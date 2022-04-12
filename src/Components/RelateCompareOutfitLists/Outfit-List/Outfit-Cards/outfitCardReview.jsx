import React from 'react';
import '../../relateOutfitLists.scss';
import GetStars from '../../Related-List/Related-Cards/getStars';

export default function outfitCardReview({ productRating }) {
  if (productRating && productRating.length && productRating[0].numReviews > 0) {
    return (
      <GetStars
        ratingValue={productRating[0].rating}
        numRatings={productRating[0].numReviews}
      />
    );
  }
  return (
    <GetStars
      ratingValue={0}
      numRatings={0}
    />
  );
}
