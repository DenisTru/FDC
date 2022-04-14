import React from 'react';
import '../../relateOutfitLists.scss';
import fill from '../../Related-List/Related-Cards/assets/noImagefill.png';

export default function relatedCardImage({ productStyles }) {
  let url;
  if (productStyles) {
    if (productStyles[0].photos) {
      if (productStyles[0].photos.length) {
        if (productStyles[0].photos[0].thumbnail_url) {
          url = productStyles[0].photos[0].thumbnail_url;
        }
      }
    }
  }
  return (
    <div id="image-container">
      <img id="image" src={url || fill} alt={fill} />
    </div>
  );
}
