import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

const labels = {
  0.5: 'Poor-',
  1: 'Poor',
  1.5: 'Fair-',
  2: 'Fair',
  2.5: 'Ok',
  3: 'Average',
  3.5: 'Good-',
  4: 'Good',
  4.5: 'Great-',
  5: 'Great',
};

export default function TextRating({ ratingValue }) {
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
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}

TextRating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
};
