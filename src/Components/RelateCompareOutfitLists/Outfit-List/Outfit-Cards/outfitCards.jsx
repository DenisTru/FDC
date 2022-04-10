import React from 'react';
import '../../relateOutfitLists.scss';
import RemoveOutfitButton from './removeOutfitButton';
import AddOutfitCard from './addOutfitCard';
import TextRating from '../../../RatingAndReviews/StaticStars';
import OutfitCardImage from './outfitCardImage';

export default function outfitCards({
  outfitProducts, addToOutfit, removeFromOutfit, relatedProductRatings, productStyles,
}) {
  return (
    <div id="outfit-slider">
      <AddOutfitCard addToOutfit={addToOutfit} outfitProducts={outfitProducts} />
      {outfitProducts.map((product, index) => (
        <div className="slider-cards" key={JSON.stringify(product)}>
          <div id="image-container">
            <OutfitCardImage imageURL={productStyles[0].photos} />
          </div>
          <RemoveOutfitButton removeFromOutfit={removeFromOutfit} productid={product.id} />
          <div id="productCategory">
            {product.category}
          </div>
          <div id="productName">
            {product.name}
          </div>
          <div id="productPrice">
            {product.default_price}
          </div>
          <div id="productStarRating">
            {TextRating(relatedProductRatings[index])}
          </div>
        </div>
      ))}
    </div>
  );
}
