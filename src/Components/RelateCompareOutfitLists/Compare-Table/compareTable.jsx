import React from 'react';
import './compareTable.scss';

export default function compareTable({ compare, stopComparing }) {
  if (compare) {
    return (
      <div className="modal">
        <div
          className="overlay"
          onClick={stopComparing}
          onKeyPress={stopComparing}
          role="button"
          tabIndex={0}
          aria-label="Close Comparison Table"
        />
        <div className="modal-content">
          <h2>Comparison</h2>
          <p> Table Info </p>
          <button className="close-modal" type="button" onClick={stopComparing}>X</button>
        </div>
      </div>
    );
  }
  return (
    <div> </div>
  );
}
