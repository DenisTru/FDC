import React, { useState } from 'react';
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
