/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import TextRating from './StaticStars';
import RatingBar from './RatingBar';

export default function RatingBreakdown({
  ratings, recommended, reviewsAverageRating, ratingBarOnClick,
}) {
  let recommendPercent = Number(recommended.true)
    / (Number(recommended.true) + Number(recommended.false));
  recommendPercent = `${(recommendPercent * 100).toFixed(0)}%`;
  const count = Object.entries(ratings).slice().reduce((res, x) => {
    // eslint-disable-next-line no-param-reassign
    res += Number(x[1]);
    return res;
  }, 0);
  const starRange = ['5', '4', '3', '2', '1'];

  return (
    <div style={{
      width: '80%', backgroundColor: '#f3f4f3', borderRadius: '16px', marginBottom: '20px', paddingBottom: '30px', paddingTop: '10px',
    }}
    >
      <div style={{ marginBottom: '20px' }}>Ratings And Reviews</div>
      <div style={{ marginLeft: '15%' }}>
        <div style={{ marginBottom: '10px', display: 'flex' }}>
          <div style={{ fontSize: '2rem', paddingRight: '10px' }}>
            {reviewsAverageRating}
          </div>
          <TextRating ratingValue={reviewsAverageRating} />
        </div>
        <div style={{ marginBottom: '20px' }}>Rating Breakdown</div>
        <div style={{ marginBottom: '10px' }}>
          {`${recommendPercent} `}
          of reviews recommend this product
        </div>
        <div>
          <div>
            {
              starRange.map((range) => (
                <RatingBar
                  range={range}
                  key={range}
                  count={count}
                  ratingBarOnClick={ratingBarOnClick}
                  ratings={ratings}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
RatingBreakdown.propTypes = {
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
  reviewsAverageRating: PropTypes.number.isRequired,
  ratingBarOnClick: PropTypes.func.isRequired,
};

RatingBreakdown.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  recommended: {},
};
