import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import reviewPropTypes from './reviewPropTypes';
import TextRating from './StaticStars';
import './index.scss';

const axios = require('axios');
const config = require('./config');

export default function RatingReviewsList({ review, helpOnClick }) {
  const createdAt = review.date;
  const reviewerName = review.reviewer_name;
  const reviewId = review.review_id;
  const [displayMore, setDisplay] = useState('false');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = React.useState(0);
  const {
    body,
    helpfulness,
    rating,
    recommend,
    response,
    summary,
    photos,
  } = review;

  const onNoClick = (reportId) => {
    const options = function options() {
      return {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${reportId}/report`,
        headers: {
          Authorization: config.TOKEN,
        },
        method: 'put',
      };
    };
    options(reportId).params = {
      review_id: reportId,
    };
    axios(options(reviewId)).then(() => console.log('success'));
  };

  return (
    <div style={{ marginRight: '0' }}>
      <div><TextRating ratingValue={rating} /></div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div>{reviewerName}</div>
        <div style={{ marginLeft: 'auto' }}>{moment(createdAt).format('MMM Do YYYY')}</div>
      </div>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}><strong>{summary}</strong></div>
      <div>
        {
          body.length > 250 && displayMore === 'false' ? (
            <div>
              {body.slice(0, 250)}
              <button type="button" onClick={() => { setDisplay('true'); }}>Show More</button>
            </div>
          ) : body
        }
      </div>
      <div>
        {recommend ? (
          <div>
            <CheckIcon fontSize="small" />
            I recommend this product
          </div>
        ) : (<div />)}
      </div>
      <div>
        {
          response.length === 0 ? <div />
            : (
              <div>
                <div>Response from seller</div>
                {response}

              </div>
            )
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {
          photos.map((photo) => (
            <div key={photo.id} onClick={() => { setId(photo.url); handleOpen(); }} onKeyDown={() => { }} role="button" tabIndex={0}>
              <img
                src={photo.url}
                alt=""
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: '100px',
                  height: '100px',
                  paddingRight: '10px',
                }}
              />
            </div>
          ))
        }
      </div>
      <Modal open={open} onClose={handleClose} onClick={handleClose}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <img
            style={{ objectFit: 'scale-down', width: '100%', height: '100%' }}
            src={id}
            alt=""
          />
        </Box>
      </Modal>
      <div style={{ display: 'flex' }}>
        <option onClick={() => helpOnClick(reviewId)}>
          Helful?Yes(
          {helpfulness}
          )
        </option>
        <option onClick={() => onNoClick(reviewId)}> | Report</option>
      </div>
      <hr />
    </div>
  );
}

RatingReviewsList.propTypes = {
  review: reviewPropTypes.isRequired,
  helpOnClick: PropTypes.func.isRequired,
};
