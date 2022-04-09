import React from 'react';
import '../../relateOutfitLists.scss';
import { MdOutlineCancel } from 'react-icons/md';

export default function removeOutfitButton({ removeFromOutfit }) {
  return <MdOutlineCancel size={20} id="remove-outfit-button" onClick={removeFromOutfit} />;
}
