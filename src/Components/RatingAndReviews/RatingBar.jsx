import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const RatingBar = function RatingBar({
  range,
  ratingBarOnClick,
  count,
  ratings,
}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={isSelected ? 'ratingBarSelected' : 'ratingBar'} style={{ width: '60%' }}>
      <Box onClick={() => { setIsSelected(!isSelected); ratingBarOnClick(Number(range)); }}>
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
  );
};

export default RatingBar;

RatingBar.propTypes = {
  ratingBarOnClick: PropTypes.func.isRequired,
  range: PropTypes.string,
  count: PropTypes.number,
  ratings: PropTypes.shape({
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
    1: PropTypes.string,
  }),
};

RatingBar.defaultProps = {
  range: '5',
  count: 0,
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
};
