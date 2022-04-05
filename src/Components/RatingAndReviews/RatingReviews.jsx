import React from 'react';
import PropTypes from 'prop-types';
import RatingReviewsList from './RatingReviewsList';
import ReviewButtons from './ReviewButtons';
import reviewPropTypes from './reviewPropTypes';
import SortOptions from './SortOptions';
import RatingBreakdown from './RatingBreakdown';

export default function RatingReviews({
  data, helpOnClick, reviewsNextPage, moreReviewsOnClick,
  onSortChange, Quality, ratings, recommended,
}) {
  return (
    <div>
      <div>
        <RatingBreakdown
          Quality={Quality}
          ratings={ratings}
          recommended={recommended}
        />
      </div>
      <div>
        <SortOptions onSortChange={onSortChange} />
      </div>

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
  onSortChange: PropTypes.func.isRequired,
  Quality: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  }),
  ratings: PropTypes.shape({
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
    1: PropTypes.string,
  }),
  recommended: PropTypes.shape({
    false: PropTypes.string,
    true: PropTypes.string,
  }),
};
RatingReviews.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  Quality: {},
  recommended: {},
};

// export default RatingReviews;
