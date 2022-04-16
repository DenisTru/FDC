import React from 'react';
import '../../relateOutfitLists.scss';
import { MdOutlineControlPoint } from 'react-icons/md';

export default function addOutfitCard({ addToOutfit, outfits }) {
  const numOutfits = Object.keys(outfits);
  if (numOutfits.length) {
    return (
      <div className="slider-cards" id="add-outfit-card">
        <MdOutlineControlPoint size={40} id="add-outfit-button" onClick={addToOutfit} />
        <p id="add-outfit-text">Add to Outfit</p>
      </div>
    );
  }
  return (
    <div className="slider-cards">
      <MdOutlineControlPoint size={40} id="add-outfit-button" onClick={addToOutfit} />
      <p id="add-outfit-text">Add to Outfit</p>
    </div>
  );
}
