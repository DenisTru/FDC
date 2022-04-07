import React from 'react';
import '../../relateCompareLists.scss';

export default function relatedCardImage({ styles }) {
  let url = '';
  if (styles) {
    url = styles.results[0].photos[0].thumbnail_url;
  }
  return (
    <div id="image-container">
      <img id="image" src={url} alt="Loading" />
    </div>
  );
}
