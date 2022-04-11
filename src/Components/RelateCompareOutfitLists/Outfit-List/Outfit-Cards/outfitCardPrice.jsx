import React from 'react';
import '../../relateOutfitLists.scss';

export default function outfitCardPrice({ productPrice, productStyles }) {
  if (productStyles) {
    if (productStyles.length) {
      let styleOriginalPrice = 0;
      if (productStyles[0].original_price) {
        styleOriginalPrice = productStyles[0].original_price;
      }
      if (productStyles[0].sale_price) {
        const salePrice = productStyles[0].sale_price;
        return (
          <div>
            <div id="salePrice">{`$${salePrice}`}</div>
            <div id="oldPrice">{`$${styleOriginalPrice}`}</div>
          </div>
        );
      }
      return (
        <div id="productPrice">{`$${styleOriginalPrice}`}</div>
      );
    }
  }
  return (
    <div id="productPrice">{`$${productPrice}`}</div>
  );
}
