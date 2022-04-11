import React from 'react';
import '../../relateOutfitLists.scss';
import fill from '../../Related-List/Related-Cards/assets/noImagefill.png';

export default function relatedCardImage({ productStyle }) {
  let url;
  if (productStyle) {
    if (productStyle[0].photos) {
      if (productStyle[0].photos.length) {
        if (productStyle[0].photos[0].thumbnail_url) {
          url = productStyle[0].photos[0].thumbnail_url;
        }
      }
    }
  }
  return (
    <div
      id="image-container"
    >
      <img id="image" src={url || fill} alt="NullImgURL" />
    </div>
  );
}
