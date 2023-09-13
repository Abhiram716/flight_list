import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useFormik } from 'formik';

import { useAuth } from '../../contexts/AuthContextProvider';

const Signup = () => {
  const { signup, asyncStatus } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      signup(values.username, values.password);
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
        <LoadingButton
          loading={asyncStatus === 'pending' ? true : false}
          variant="contained"
          type="submit"
        >
          <span>Submit</span>
        </LoadingButton>
      </Box>
    </form>
  );
};

export default Signup;
