import PropTypes from 'prop-types';

const reviewPropTypes = PropTypes.shape({
  body: PropTypes.string,
  date: PropTypes.string,
  helpfulness: PropTypes.number,
  rating: PropTypes.number,
  recommend: PropTypes.bool,
  response: PropTypes.string,
  review_id: PropTypes.number,
  reviewer_name: PropTypes.string,
  summary: PropTypes.string,
});

export default reviewPropTypes;
// module.exports = reviewPropTypes;
