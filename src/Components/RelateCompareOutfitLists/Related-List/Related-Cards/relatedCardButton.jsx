import React from 'react';
import '../../relateOutfitLists.scss';
import { MdStarOutline } from 'react-icons/md';

export default function relatedCardButton({
  startComparing, product, relatedProductRatingInfo, relatedProductStyles,
}) {
  return <MdStarOutline size={20} id="related-card-button" onClick={() => { startComparing(product, relatedProductStyles, relatedProductRatingInfo); }} />;
}
