import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReviewButtonsCharacteristics from './RviewButtonsCharacteristics';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReviewButtons({ nextPageLength, moreReviewsOnClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {nextPageLength > 0 ? <button onClick={moreReviewsOnClick} type="button">More Reviews</button> : <div />}
      <div>
        <button type="button" onClick={handleOpen}>Add A Review +</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Write Your Review
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              About the [Product Name Here]
            </Typography>
            <div>
              stars
            </div>
            <div>
              Do you recommend this product?
              <form action="#">
                <fieldset id="group1">
                  <label htmlFor="yes">
                    <input type="radio" name="radAnswer" />
                    yes
                  </label>

                  <label htmlFor="no">
                    <input type="radio" name="radAnswer" />
                    no
                  </label>
                </fieldset>
              </form>
              <div>
                <ReviewButtonsCharacteristics />
              </div>
              <div>
                Review Summary
                <input type="text" />
              </div>
              <div>
                Review Body
                <input type="text" />
              </div>
              <div>
                Upload your photo
              </div>
              <div>
                name
                <input type="text" />
              </div>
              <div>
                email
                <input type="email" />
              </div>
              <button type="button">Submit</button>
            </div>
          </Box>
        </Modal>

      </div>

    </div>
  );
}

ReviewButtons.propTypes = {
  nextPageLength: PropTypes.number.isRequired,
  moreReviewsOnClick: PropTypes.func.isRequired,
};
