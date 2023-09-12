import React from 'react';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      //submit logic
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          id="username"
          name="username"
          label="username"
          margin="dense"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaUserAlt />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="password"
          name="password"
          label="password"
          margin="dense"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
    </form>
  );
};

export default Signup;
