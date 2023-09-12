import React from 'react';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Signup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        m: 5,
      }}
    >
      <TextField
        label="username"
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaUserAlt />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="password"
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaLock />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default Signup;
