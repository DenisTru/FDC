import React from 'react';
import '../relateOutfitLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import OutfitCards from './Outfit-Cards/outfitCards';

const slideLeft = () => {
  const slider = document.getElementById('outfit-slider');
  slider.scrollLeft -= 235;
};

const slideRight = () => {
  const slider = document.getElementById('outfit-slider');
  slider.scrollLeft += 235;
};

export default function outfitList({
  outfitProductsAndStyles, addToOutfit, removeFromOutfit,
}) {
  return (
    <div className="sliders">
      <h3>YOUR OUTFIT</h3>
      <div className="slider-container">
        <OutfitCards
          outfitProductsAndStyles={outfitProductsAndStyles}
          addToOutfit={addToOutfit}
          removeFromOutfit={removeFromOutfit}
        />
        <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
        <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
      </div>
    </div>
  );
}
