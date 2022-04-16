import React from 'react';
import '../../relateOutfitLists.scss';
import RemoveOutfitButton from './removeOutfitButton';
import AddOutfitCard from './addOutfitCard';
import OutfitCardPrice from './outfitCardPrice';
import OutfitCardImage from './outfitCardImage';
import OutfitCardReview from './outfitCardReview';

export default function outfitCards({
  addToOutfit, removeFromOutfit, outfits,
}) {
  return (
    <div id="outfit-slider">
      <AddOutfitCard
        addToOutfit={addToOutfit}
        outfits={outfits}
      />

      {Object.values(outfits).map((product, index) => (
        <div className="slider-cards" id="outfit-card" key={JSON.stringify(product.productInfo.id + index)}>
          <div id="image-container">
            <OutfitCardImage productStyles={product.productStyles} />
          </div>
          <RemoveOutfitButton
            removeFromOutfit={removeFromOutfit}
            productid={product.productInfo.id}
          />
          <div id="productCategory">
            {product.productInfo.category}
          </div>
          <div id="productName">
            {product.productInfo.name}
          </div>
          <div id="productPrice">
            <OutfitCardPrice
              productStyles={product.productStyles}
              productPrice={product.productInfo.default_price}
            />
          </div>
          <div id="productStarRating">
            <OutfitCardReview productRating={product.productReviews} />
          </div>
        </div>
      ))}
    </div>
  );
}
