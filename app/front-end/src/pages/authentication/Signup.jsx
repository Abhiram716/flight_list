import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';

import { useAuth } from '../../contexts/AuthContextProvider';

const Signup = () => {
  const theme = useTheme();
  const { signup, asyncStatus } = useAuth();
  const [response, setResponse] = useState();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      let res = await signup(values.username, values.password);
      setResponse(res);
    },
  });
  return (
    <>
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
            type="password"
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
          <Button variant="contained" type="submit">
            {asyncStatus === 'pending' ? (
              <CircularProgress
                size={24}
                sx={{ color: theme.palette.primary.contrastText }}
              />
            ) : (
              'Submit'
            )}
          </Button>
          {asyncStatus === 'success' || asyncStatus === 'failure' ? (
            <Alert
              severity={asyncStatus === 'success' ? 'success' : 'error'}
              sx={{ mt: 2 }}
            >
              <AlertTitle>
                {asyncStatus === 'success'
                  ? 'Signup successful'
                  : 'Signup failed'}
              </AlertTitle>
              {response}
              {asyncStatus === 'success' ? ',you can sigin now' : null}
            </Alert>
          ) : null}
        </Box>
      </form>
    </>
  );
};

export default Signup;
