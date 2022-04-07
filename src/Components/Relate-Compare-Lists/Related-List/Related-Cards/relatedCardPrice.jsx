import React from 'react';
import '../../relateCompareLists.scss';

export default function relatedCardPrice({ styles }) {
  let originalPrice = 0;
  if (styles) {
    originalPrice = styles.results[0].original_price;
    if (styles.results[0].sale_price) {
      const salePrice = styles.results[0].sale_price;
      return (
        <div>
          <div id="salePrice">{`$${salePrice}`}</div>
          <div id="oldPrice">{`$${originalPrice}`}</div>
        </div>
      );
    }
  }
  return (
    <div id="productPrice">{`$${originalPrice}`}</div>
  );
}
