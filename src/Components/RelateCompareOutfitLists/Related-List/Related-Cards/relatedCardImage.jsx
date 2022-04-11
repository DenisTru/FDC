import React from 'react';
import '../../relateOutfitLists.scss';
import fill from './assets/noImagefill.png';

export default function relatedCardImage({ relatedProductStyles, changeProductID, product }) {
  let url;
  if (relatedProductStyles) {
    if (relatedProductStyles[0].photos) {
      if (relatedProductStyles[0].photos.length) {
        if (relatedProductStyles[0].photos[0].thumbnail_url) {
          url = relatedProductStyles[0].photos[0].thumbnail_url;
        }
      }
    }
  }
  return (
    <div
      id="image-container"
      onClick={() => { changeProductID(product.id); }}
      role="button"
      tabIndex={0}
      onKeyPress={() => { changeProductID(product.id); }}
    >
      <img id="image" src={url || fill} alt="NullImgURL" />
    </div>
  );
}
