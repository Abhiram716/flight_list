import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthTab = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/auth/signin");
    } else if (newValue === 1) {
      navigate("/auth/signup");
    }
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="SignIn" />
        <Tab label="SignUp" />
      </Tabs>
    </Box>
  );
};

export default AuthTab;
