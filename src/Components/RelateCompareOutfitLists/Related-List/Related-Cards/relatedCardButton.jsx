import React from 'react';
import '../../relateOutfitLists.scss';
import { MdStarOutline } from 'react-icons/md';

export default function relatedCardButton({
  startComparing, product, relatedProductRatingInfo, relatedProductStyles,
}) {
  if (relatedProductRatingInfo.numReviews >= 0) {
    const productRating = relatedProductRatingInfo;
    return <MdStarOutline size={20} id="related-card-button" onClick={() => { startComparing(product, relatedProductStyles, productRating); }} />;
  }
  return <MdStarOutline size={20} id="related-card-button" />;
}
