import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Signup from './pages/authentication/Signup';
import AuthPageLayout from './components/authentication/AuthPageLayout';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/auth" element={<AuthPageLayout />}>
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
