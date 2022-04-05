import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ReviewButtons({ nextPageLength, moreReviewsOnClick }) {
  return (
    <div>
      {nextPageLength > 0 ? <button onClick={moreReviewsOnClick} type="button">More Reviews</button> : <div />}
      <div>
        <button
          type="button"
        >
          Add A Review  +
        </button>
      </div>

    </div>
  );
}

ReviewButtons.propTypes = {
  nextPageLength: PropTypes.number.isRequired,
  moreReviewsOnClick: PropTypes.func.isRequired,
};
