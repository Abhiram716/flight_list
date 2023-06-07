import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

const SignInForm = () => {
  return (
    <Box>
      <Box sx={{ width: 300, marginTop: 5, }}>
        <Stack spacing={2}>
          <TextField id="username" label="Username" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
          <Button variant="contained">Sign in</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignInForm;
