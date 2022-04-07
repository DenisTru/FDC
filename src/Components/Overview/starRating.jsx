import React from 'react';
import './styles/stars.scss';

function starRating({ reviewsStarAverage }) {
  return (
    <div className="Stars" style={{ '--rating': reviewsStarAverage }} aria-label="Rating of this product is 2.3 out of 5." />
  );
}

export default starRating;
