/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const axios = require('axios');

const Input = styled('input')({
  display: 'none',
});

const uploadOnChange = (file, cb) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('key', 'c6066fe81870c98e11c0f7bceddc706b');
  axios({
    method: 'post',
    url: 'https://api.imgbb.com/1/upload',
    data: formData,
    headers: {
      'content-type': 'multipart/form-data',
    },
  }).then(({ data }) => (data.data.image.url))
    .then((url) => { cb(url, 'url'); })
    .catch((err) => alert(err));
};

export default function ReviewButtonsPhoto({ onFieldChange }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => uploadOnChange(e.target.files[0], onFieldChange)} />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => uploadOnChange(e.target.files[0], onFieldChange)} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
ReviewButtonsPhoto.propTypes = {
  onFieldChange: PropTypes.func,
};

ReviewButtonsPhoto.defaultProps = {
  onFieldChange: () => { },
};
