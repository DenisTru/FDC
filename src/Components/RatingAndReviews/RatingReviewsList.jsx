import React from 'react';
import PropTypes from 'prop-types';
import reviewPropTypes from './reviewPropTypes';

export default function RatingReviewsList({ review, helpOnClick }) {
  const createdAt = review.date;
  const reviewerName = review.reviewer_name;
  const reviewId = review.review_id;
  const {
    body,
    helpfulness,
    rating,
    recommend,
    response,
    summary,
  } = review;
  return (
    <div variant="individualTile">
      <div variant="stars" />
      <div>{reviewId}</div>
      <div>{reviewerName}</div>
      <div>{createdAt}</div>
      <div>{summary}</div>
      <div>{body}</div>
      <div>{response}</div>
      <div>{rating}</div>
      <option onClick={() => helpOnClick(reviewId)}>
        Helful?Yes(
        {helpfulness}
        )
      </option>
      {recommend ? (<div>I recommend this product</div>) : (<div />)}
      <br />
    </div>
  );
}

RatingReviewsList.propTypes = {
  review: reviewPropTypes.isRequired,
  helpOnClick: PropTypes.func.isRequired,
};
