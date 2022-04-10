import React from 'react';
import '../../relateOutfitLists.scss';
import RemoveOutfitButton from './removeOutfitButton';
import AddOutfitCard from './addOutfitCard';
import OutfitCardPrice from './outfitCardPrice';
import OutfitCardImage from './outfitCardImage';
import OutfitCardReview from './outfitCardReview';

export default function outfitCards({
  outfitProductsAndStyles, addToOutfit, removeFromOutfit,
}) {
  return (
    <div id="outfit-slider">
      <AddOutfitCard addToOutfit={addToOutfit} outfitProductsAndStyles={outfitProductsAndStyles} />
      {outfitProductsAndStyles.map((productInfo) => (
        <div className="slider-cards" key={JSON.stringify(productInfo.product.id)}>
          <div id="image-container">
            <OutfitCardImage productStyle={productInfo.productStyles} />
          </div>
          <RemoveOutfitButton
            removeFromOutfit={removeFromOutfit}
            productid={productInfo.product.id}
          />
          <div id="productCategory">
            {productInfo.product.category}
          </div>
          <div id="productName">
            {productInfo.product.name}
          </div>
          <div id="productPrice">
            <OutfitCardPrice
              productStyles={productInfo.productStyles}
              productPrice={productInfo.product.default_price}
            />
          </div>
          <div id="productStarRating">
            {console.log(productInfo)}
            <OutfitCardReview productRating={productInfo.productRatingInfo} />
          </div>
        </div>
      ))}
    </div>
  );
}
