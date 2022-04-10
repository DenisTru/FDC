import React from 'react';
import '../../relateOutfitLists.scss';

export default function relatedCardImage({ productStyle }) {
  let url = 'NullImgURL';
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
      <img id="image" src={url} alt="NullImgURL" />
    </div>
  );
}
