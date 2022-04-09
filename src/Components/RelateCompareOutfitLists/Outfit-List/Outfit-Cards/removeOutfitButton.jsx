import React from 'react';
import '../../relateOutfitLists.scss';
import { MdOutlineCancel } from 'react-icons/md';

export default function removeOutfitButton({ removeFromOutfit, productid }) {
  return (
    <MdOutlineCancel
      size={25}
      id="remove-outfit-button"
      onClick={() => {
        removeFromOutfit(productid);
      }}
    />
  );
}
