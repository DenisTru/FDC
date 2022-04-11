import React from 'react';
import '../../relateOutfitLists.scss';
import { MdStarOutline } from 'react-icons/md';

export default function relatedCardButton({
  startComparing, product, relatedProductRatingInfo, index, relatedProductStyles,
}) {
  if (index < relatedProductRatingInfo.length && relatedProductRatingInfo[index].numReviews >= 0) {
    const productRating = relatedProductRatingInfo[index];
    return <MdStarOutline size={20} id="related-card-button" onClick={() => { startComparing(product, relatedProductStyles, productRating); }} />;
  }
  return <MdStarOutline size={20} id="related-card-button" />;
}
