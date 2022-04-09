import React from 'react';
import '../../relateOutfitLists.scss';
import RemoveOutfitButton from './removeOutfitButton';
import AddOutfitCard from './addOutfitCard';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

export default function outfitCards({ outfitProducts, addToOutfit, removeFromOutfit }) {
  console.log('outfitProducts ', outfitProducts);
  return (
    <div id="outfit-slider">
      <AddOutfitCard addToOutfit={addToOutfit} />
      {slides.map((slide) => (
        <div className="slider-cards" key={JSON.stringify(slide)}>
          <div id="image-container">
            Image
          </div>
          <RemoveOutfitButton removeFromOutfit={removeFromOutfit} />
          <div id="productCategory">
            Product Category
          </div>
          <div id="productName">
            Product Name
          </div>
          <div id="productPrice">
            Product Price
          </div>
          <div id="productStarRating">
            Product Star Rating
          </div>
        </div>
      ))}
    </div>
  );
}
