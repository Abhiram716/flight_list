import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AuthPageLayout from "./components/authentication/auth-page-layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/signin" replace />} />
          
          <Route path="/auth/*" element={<AuthPageLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
