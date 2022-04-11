import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReviewButtonsCharacteristics from './RviewButtonsCharacteristics';
import ReviewButtonsPhoto from './ReviewButtonsPhoto';
import HoverRating from './StarsHoverRating';

export default function ReviewButtons({
  moreReviewsOnClick, btnVisible,
  onFieldChange, reviewsNew,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ display: 'flex' }}>
      {btnVisible ? (
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
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              Tell Us About The Product
            </Typography>
            <div style={{ marginBottom: '20px' }}>
              Overall Rating
              <HoverRating onFieldChange={onFieldChange} />
            </div>
            <div>
              Do you recommend this product?
              <form action="#">
                <fieldset id="group1" onChange={(e) => { onFieldChange(e.target.value, 'recommend'); }}>
                  <label htmlFor="yes">
                    <input type="radio" name="recommend" value="yes" required />
                    yes
                  </label>
                  <label htmlFor="no">
                    <input type="radio" name="recommend" value="no" />
                    no
                  </label>
                </fieldset>
                <div>
                  <ReviewButtonsCharacteristics onFieldChange={onFieldChange} />
                </div>
                <div style={{ display: 'flex', marginLeft: '5%', marginBottom: '30px' }}>
                  <div style={{ width: '30%' }}>
                    <TextField
                      label="name"
                      size="small"
                      color="action"
                      focused
                      inputProps={{ maxLength: 60 }}
                      placeholder="Example: jackson11!"
                      onChange={(e) => { const { value } = e.target; onFieldChange(value, 'name'); }}
                      required
                    />
                    <Typography sx={{ fontSize: 14, width: '80%' }}>
                      For privacy reasons, do not use your full name or email address
                    </Typography>
                  </div>
                  <div style={{ width: '30%' }}>
                    <TextField
                      label="email"
                      size="small"
                      type="email"
                      color="action"
                      focused
                      inputProps={{ maxLength: 60 }}
                      placeholder="jackson11@email.com"
                      onChange={(e) => { const { value } = e.target; onFieldChange(value, 'email'); }}
                      required
                    />
                    <Typography sx={{ fontSize: 14, width: '80%' }}>
                      For authentication reasons, you will not be emailed
                    </Typography>
                  </div>
                  <TextField
                    label="Review Summary"
                    color="action"
                    focused
                    inputProps={{ maxLength: 60 }}
                    placeholder="Best purchase ever!"
                    onChange={(e) => { const { value } = e.target; onFieldChange(value, 'summary'); }}
                    required
                  />
                </div>
                <div style={{ marginLeft: '5%' }}>
                  <TextField
                    label="Review Body"
                    sx={{ width: '50%' }}
                    color="action"
                    focused
                    inputProps={{ maxLength: 1000, minLength: 50 }}
                    placeholder="Why did you like the product or not?"
                    onChange={(e) => { const { value } = e.target; onFieldChange(value, 'body'); }}
                    required
                  />
                  {reviewsNew.body && reviewsNew.body.length > 50
                    ? <Typography sx={{ fontSize: 14 }}>Minimum reached</Typography>
                    : (
                      <Typography sx={{ fontSize: 14 }}>
                        Minimum required characters left:
                        {reviewsNew.body ? (50 - reviewsNew.body.length) : 50}
                      </Typography>
                    )}
                </div>
                <div style={{ marginTop: '20px', marginLeft: '5%', marginBottom: '20px' }}>
                  <Typography>
                    Upload your photo
                  </Typography>
                  <ReviewButtonsPhoto />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <Button type="submit" variant="outlined"> Submit </Button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

ReviewButtons.propTypes = {
  moreReviewsOnClick: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func,
  btnVisible: PropTypes.bool.isRequired,
  reviewsNew: PropTypes.shape({

  }),
};

ReviewButtons.defaultProps = {
  reviewsNew: {},
  onFieldChange: () => { },
};
