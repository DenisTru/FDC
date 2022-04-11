import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

export default function getStars({ ratingValue, numRatings }) {
  const value = ratingValue;
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'black',
          },
        }}
        value={value}
        readOnly
        precision={0.25}
        emptyIcon={<StarIcon color="action" style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <div id="rating-num">{`(${numRatings})`}</div>
    </Box>
  );
}
getStars.propTypes = {
  ratingValue: PropTypes.number.isRequired,
};
