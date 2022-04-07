import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import ReviewButtonsCharacteristics from './RviewButtonsCharacteristics';
import ReviewButtonsPhoto from './ReviewButtonsPhoto';
import HoverRating from './StarsHoverRating';

export default function ReviewButtons({
  nextPageLength, moreReviewsOnClick,
  onFieldChange,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ display: 'flex' }}>
      {nextPageLength > 0 ? (
        <Button
          sx={{ color: '#616161', borderColor: 'gray' }}
          variant="outlined"
          onClick={moreReviewsOnClick}
          type="button"
        >
          More Reviews
        </Button>
      ) : <div />}
      <div>
        <Button
          sx={{ color: '#616161', borderColor: 'gray' }}
          variant="outlined"
          onClick={handleOpen}
        >
          Add A Review +
        </Button>
        <Dialog
          maxWidth="md"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DialogContent>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Write Your Review
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              About the [Product Name Here]
            </Typography>
            <div>
              stars
              <HoverRating onFieldChange={onFieldChange} />
            </div>
            <div>
              Do you recommend this product?
              <form action="#">
                <fieldset id="group1" onChange={(e) => { onFieldChange(e.target.value, 'recommend'); }}>
                  <label htmlFor="yes">
                    <input type="radio" name="recommend" value="yes" />
                    yes
                  </label>

                  <label htmlFor="no">
                    <input type="radio" name="recommend" value="no" />
                    no
                  </label>
                </fieldset>
              </form>
              <div>
                <ReviewButtonsCharacteristics onFieldChange={onFieldChange} />
              </div>
              <div>
                name
                <input type="text" onChange={(e) => { onFieldChange(e.target.value, 'name'); }} />
              </div>
              <div>
                email
                <input type="email" onChange={(e) => { onFieldChange(e.target.value, 'email'); }} />
              </div>
              <div>
                Review Summary
                <input placeholder="Best purchase ever!" type="text" onChange={(e) => { onFieldChange(e.target.value, 'summary'); }} />
              </div>
              <div>
                Review Body
                <input minLength="50" type="text" onChange={(e) => { onFieldChange(e.target.value, 'body'); }} />
              </div>
              <div>
                Upload your photo
                <ReviewButtonsPhoto />
              </div>
              <button type="button">Submit</button>
            </div>
          </DialogContent>
        </Dialog>

      </div>

    </div>
  );
}

ReviewButtons.propTypes = {
  nextPageLength: PropTypes.number.isRequired,
  moreReviewsOnClick: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};
