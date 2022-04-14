import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import RatingReviewsList from './ReviewLists/RatingReviewsList';
import ReviewButtons from './ReviewButtons/ReviewButtons';
import reviewPropTypes from './reviewPropTypes';
import SortOptions from './ReviewLists/SortOptions';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown';

export default function RatingReviews({
  data, helpOnClick, productId,
  onSortChange, characteristics, ratings, recommended,
  onFieldChange, reviewsAverageRating, reviewsNew, reviewsTotal,
  onReviewSubmit,
}) {
  const pageSize = 2;
  const [displayCount, setDisplayCount] = useState(pageSize);
  const [rating, setRating] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setDisplayCount(pageSize);
    setRating([]);
    setKeyword('');
  }, [productId]);

  let newData = rating.length === 0
    ? data.slice()
    : data.slice().filter((x) => rating.includes(x.rating));
  if (keyword !== '') {
    newData = newData.filter((x) => (x.body.toLowerCase().includes(keyword.toLowerCase())
      || x.summary.toLowerCase().includes(keyword.toLowerCase())));
  }

  const displayReviews = newData.slice(0, displayCount);
  const btnVisible = newData.length > displayCount;

  const moreReviewsOnClick = () => {
    setDisplayCount(displayCount + pageSize);
  };

  const onKeywordChange = (value) => {
    setKeyword(value);
  };

  const ratingBarOnClick = (range) => {
    if (rating.length === 0) {
      setRating([range]);
    } else {
      const rr = rating.slice();
      const ind = rating.indexOf(range);
      if (ind === -1) {
        rr.push(range);
      } else {
        rr.splice(ind, 1);
      }
      setRating(rr);
    }
  };

  return (
    <div
      id="ratings"
      style={{
        marginTop: '50px', display: 'flex', width: '80%', marginLeft: '10%',
      }}
    >
      <div style={{ width: '40%' }}>
        <RatingBreakdown
          productId={productId}
          ratings={ratings}
          recommended={recommended}
          reviewsAverageRating={reviewsAverageRating}
          ratingBarOnClick={ratingBarOnClick}
        />
        <ProductBreakdown characteristics={characteristics} />
      </div>
      <div style={{ width: '60%' }}>
        <div className="sortOption">
          <SortOptions
            onSortChange={onSortChange}
            reviewsTotal={reviewsTotal}
            data={data}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <div>
            <TextField
              label="Search key word"
              color="action"
              focused
              value={keyword}
              onChange={(e) => onKeywordChange(e.target.value)}
              size="small"
              fullWidth
            />
          </div>
        </div>
        <div className="reviewList">
          {
            displayReviews.map((review) => (
              <RatingReviewsList
                helpOnClick={helpOnClick}
                key={review.review_id}
                review={review}
                keyword={keyword}
              />
            ))
          }
        </div>
        <ReviewButtons
          onReviewSubmit={onReviewSubmit}
          moreReviewsOnClick={moreReviewsOnClick}
          btnVisible={btnVisible}
          onFieldChange={onFieldChange}
          reviewsNew={reviewsNew}
        />
      </div>
    </div>

  );
}

RatingReviews.propTypes = {
  data: PropTypes.arrayOf(reviewPropTypes),
  helpOnClick: PropTypes.func,
  onSortChange: PropTypes.func,
  onReviewSubmit: PropTypes.func,
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
  onFieldChange: PropTypes.func,
  reviewsAverageRating: PropTypes.number.isRequired,
  reviewsNew: PropTypes.shape({
    summary: PropTypes.string,
    body: PropTypes.string,
  }),
  reviewsTotal: PropTypes.number.isRequired,
  productId: PropTypes.number,
  onReviewSubmit: PropTypes.func.isRequired,
};
RatingReviews.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  recommended: {},
  characteristics: {},
  reviewsNew: {},
  data: [],
  helpOnClick: () => { },
  onSortChange: () => { },
  onFieldChange: () => { },
  onReviewSubmit: () => { },
  productId: 66643,
};
