import React from 'react';
import '../../relateOutfitLists.scss';

export default function relatedCardImage({ imageURL }) {
  let url = '';
  if (imageURL) {
    url = imageURL[0].thumbnail_url;
  }
  return (
    <div id="image-container">
      <img id="image" src={url} alt="NullImgURL" />
    </div>
  );
}
