import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

const SignUpForm = () => {
  return (
    <Box>
      <Box sx={{ width: 300 }}>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="contained">Sign up</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUpForm;
