import React from 'react';
import PropTypes from 'prop-types';

export default function RatingBreakdown({ ratings, recommended }) {
  // console.log(ratings);
  const recommendPercent = Number(recommended.true)
    / (Number(recommended.true) + Number(recommended.false));
  const sum = Object.entries(ratings).slice().reduce((res, x) => {
    // eslint-disable-next-line no-param-reassign
    res += Number(x[0]) * Number(x[1]);
    return res;
  }, 0);
  const count = Object.entries(ratings).slice().reduce((res, x) => {
    // eslint-disable-next-line no-param-reassign
    res += Number(x[1]);
    return res;
  }, 0);
  const ratingValue = sum / count;

  return (
    <div>
      <div>
        ratingValue:
        {ratingValue}
      </div>
      <div>
        {recommendPercent}
        of reviews recommend this product
      </div>
      <div>
        <div>
          5 stars
          {Number(ratings['5']) / count}
        </div>
        <div>
          4 stars
          {Number(ratings['4']) / count}
        </div>
        <div>
          3 stars
          {Number(ratings['3']) / count}
        </div>
        <div>
          2 stars
          {Number(ratings['2']) / count}
        </div>
        <div>
          1 stars
          {!Number.isNaN(Number(ratings['1'])) / count ? Number(ratings['1']) / count : 0}
        </div>
        <br />
        <br />
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
};

RatingBreakdown.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  recommended: {},
};
