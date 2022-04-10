import React from 'react';
import '../../relateOutfitLists.scss';

export default function relatedCardPrice({ productPrice, styleSalePrice, styleOriginalPrice }) {
  if (styleSalePrice) {
    const salePrice = styleSalePrice;
    return (
      <div>
        <div id="salePrice">{`$${salePrice}`}</div>
        <div id="oldPrice">{`$${styleOriginalPrice}`}</div>
      </div>
    );
  }
  return (
    <div id="productPrice">{`$${productPrice}`}</div>
  );
}
