import React from 'react';
import PropTypes from 'prop-types';
import RatingReviewsList from './RatingReviewsList';
import ReviewButtons from './ReviewButtons';
import reviewPropTypes from './reviewPropTypes';
import SortOptions from './SortOptions';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';

export default function RatingReviews({
  data, helpOnClick, reviewsNextPage, moreReviewsOnClick,
  onSortChange, characteristics, ratings, recommended,
}) {
  return (
    <div>
      <div>
        <RatingBreakdown
          ratings={ratings}
          recommended={recommended}
        />
      </div>
      <div>
        <ProductBreakdown characteristics={characteristics} />
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
  characteristics: PropTypes.shape({
    Size: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Width: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Quality: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Length: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Fit: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  }),
};
RatingReviews.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  recommended: {},
  characteristics: {},
};

// export default RatingReviews;
