import React from 'react';
import PropTypes from 'prop-types';

export default function SortOptions({ onSortChange }) {
  return (
    <div>
      reviews,sorted by
      <select
        defaultValue="helpful"
        onChange={(e) => {
          onSortChange(e.target.value);
        }}
        name="reviewsSort"
        id="reviewsSort"
      >
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
        <option value="relevant">Relevant</option>
      </select>
    </div>
  );
}

SortOptions.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};
