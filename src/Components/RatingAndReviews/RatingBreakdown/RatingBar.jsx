import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const RatingBar = function RatingBar({
  range,
  ratingBarOnClick,
  count,
  ratings,
  productId,
}) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(false);
  }, [productId]);
  return (
    <div style={{ width: '80%' }} className={isSelected ? 'ratingBarSelected' : 'ratingBar'}>
      <Box display="flex" onClick={() => { setIsSelected(!isSelected); ratingBarOnClick(Number(range)); }}>
        <Box width="80%">
          <Box>
            {`${range} stars`}
          </Box>
          <LinearProgress
            sx={{ height: '15px' }}
            thickness={4}
            variant="determinate"
            color="inherit"
            value={(!Number.isNaN(Number(ratings[range]))
              / count ? Number(ratings[range]) / count : 0) * 100}
          />
        </Box>
      </Box>
    </div>
  );
};

export default RatingBar;

RatingBar.propTypes = {
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
  ratingBarOnClick: PropTypes.func.isRequired,
  productId: PropTypes.number,
  range: PropTypes.string,
  count: PropTypes.number,
};

RatingBar.defaultProps = {
  ratings: {
    1: '0', 2: '0', 3: '0', 4: '0', 5: '0',
  },
  recommended: {},
  productId: 66643,
  range: '5',
  count: 0,
};
