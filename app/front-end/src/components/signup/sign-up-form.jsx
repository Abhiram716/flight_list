import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import React from "react";
import { useAuthContext } from "../../contexts/auth-context.provider";

const SignUpForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const { signUp } = useAuthContext();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await signUp(values.username, values.password);
    },
  });

  return (
    <Box>
      <Box sx={{ width: 300, marginTop: 5 }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              id="username"
              label="Username"
              variant="outlined"
            />
            <TextField
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              id="password"
              label="Password"
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;
