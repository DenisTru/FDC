import React from 'react';
import PropTypes from 'prop-types';

export default function ReviewButtons({ nextPageLength, moreReviewsOnClick }) {
  return (
    <div>
      {nextPageLength > 0 ? <button onClick={moreReviewsOnClick} type="button">More Reviews</button> : <div />}
      <button type="button">Add A Review  +</button>
    </div>
  );
}

ReviewButtons.propTypes = {
  nextPageLength: PropTypes.number.isRequired,
  moreReviewsOnClick: PropTypes.func.isRequired,
};
