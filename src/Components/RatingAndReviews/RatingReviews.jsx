import React from 'react';
import PropTypes from 'prop-types';
import RatingReviewsList from './RatingReviewsList';
import ReviewButtons from './ReviewButtons';
import reviewPropTypes from './reviewPropTypes';

export default function RatingReviews({
  data, helpOnClick, reviewsNextPage, moreReviewsOnClick,
}) {
  return (
    <div>
      <div>
        {
          data.map((review) => (
            <RatingReviewsList
              helpOnClick={helpOnClick}
              key={review.review_id}
              review={review}
            />
          ))
        }
      </div>
      <div>
        <ReviewButtons
          moreReviewsOnClick={moreReviewsOnClick}
          nextPageLength={reviewsNextPage.length}
        />
      </div>

    </div>

  );
}

RatingReviews.propTypes = {
  data: PropTypes.arrayOf(reviewPropTypes).isRequired,
  helpOnClick: PropTypes.func.isRequired,
  reviewsNextPage: PropTypes.arrayOf(reviewPropTypes).isRequired,
  moreReviewsOnClick: PropTypes.func.isRequired,
};
RatingReviews.defaultProps = {
};

// export default RatingReviews;
