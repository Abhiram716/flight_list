import { Grid } from "@mui/material";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import SignInForm from "../signin/sign-in-form";
import SignUpForm from "../signup/sign-up-form";
import AuthTab from "./auth-tab";

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
      <Grid item>
        <AuthTab />
      </Grid>
      <Grid item>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AuthPageLayout;
