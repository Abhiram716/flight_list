import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthTab from "./auth-tab";
import SignInForm from "../signin/sign-in-form";
import SignUpForm from "../signup/sign-up-form";

const AuthPageLayout = () => {
  return (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Routes>
        <Route path="/" element={<AuthTab />}>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </Grid>
  );
};

export default AuthPageLayout;
