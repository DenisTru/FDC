/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import TextRating from './StaticStars';

export default function RatingBreakdown({ ratings, recommended, reviewsAverageRating }) {
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
    <div style={{ width: '80%' }}>
      <div style={{ marginBottom: '20px' }}>Ratings And Reviews</div>
      <div style={{ marginBottom: '10px', display: 'flex' }}>
        <div style={{ fontSize: '2rem', paddingRight: '10px' }}>
          {reviewsAverageRating}
        </div>
        <TextRating ratingValue={reviewsAverageRating} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        {`${recommendPercent} `}
        of reviews recommend this product
      </div>
      <div>
        <div>
          {
            starRange.map((range) => (
              <div key={range} style={{ width: '60%' }}>
                <Box>
                  {`${range} `}
                  stars
                  <LinearProgress
                    sx={{ height: '15px' }}
                    thickness={4}
                    variant="determinate"
                    color="inherit"
                    value={(!Number.isNaN(Number(ratings[range]))
                      / count ? Number(ratings[range]) / count : 0) * 100}
                  />
                </Box>
              </div>
            ))
          }
        </div>
      </div>
      <br />
      <br />
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
};

RatingBreakdown.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  recommended: {},
};
