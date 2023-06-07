import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPageLayout from "./components/authentication/auth-page-layout";
// import SignIn from "./components/signin/sign-in-layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/*" element={<AuthPageLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
