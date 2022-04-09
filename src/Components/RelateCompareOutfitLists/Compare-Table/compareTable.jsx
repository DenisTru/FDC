import React from 'react';
import './compareModal.scss';

export default function compareTable({ stopComparing, currentProduct, productToCompare }) {
  console.log('we good ', productToCompare, currentProduct);
  return (
    <div className="modal-content">
      <h2>Comparison</h2>
      <p> Table Info </p>
      <button className="close-modal" type="button" onClick={stopComparing}>X</button>
    </div>
  );
}
