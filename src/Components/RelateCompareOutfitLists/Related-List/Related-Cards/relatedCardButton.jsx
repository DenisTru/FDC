import React from 'react';
import '../../relateOutfitLists.scss';
import { MdStarOutline } from 'react-icons/md';

export default function relatedCardButton({ startComparing }) {
  return <MdStarOutline size={20} id="related-card-button" onClick={startComparing} />;
}
