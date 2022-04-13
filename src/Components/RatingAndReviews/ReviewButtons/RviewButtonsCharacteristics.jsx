import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const size = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
const width = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
const comfort = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
const quality = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
const length = ['Runs Short', 'Runs,slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
const fit = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

const formObj = {
  size: { values: size, name: 'Size' },
  width: { values: width, name: 'Width' },
  comfort: { values: comfort, name: 'Comfort' },
  quality: { values: quality, name: 'Quality' },
  length: { values: length, name: 'Length' },
  fit: { values: fit, name: 'Fit' },
};

export default function ReviewButtonsCharacteristics({ onFieldChange }) {
  return (
    <Box sx={{
      p: 2,
      border: '1px solid grey',
      paddingLeft: '5%',
      borderRadius: '30px',
      marginTop: '20px',
      marginBottom: '20px',
    }}
    >
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>Characteristics Choice</div>
      {
        Object.keys(formObj).map((id) => (
          <FormControl key={id}>
            <FormLabel>{formObj[id].name}</FormLabel>
            <RadioGroup
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 16,
                },
              }}
              row
            >
              {
                formObj[id].values.map((value, ind) => (
                  <FormControlLabel
                    key={value}
                    value={ind + 1}
                    control={(
                      <Radio
                        required
                        onChange={(e) => onFieldChange(e.target.value, id)}
                      />
                    )}
                    label={(
                      <Typography sx={{ fontSize: 14 }}>
                        {value}
                      </Typography>
                    )}
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
        ))
      }
    </Box>
  );
}
