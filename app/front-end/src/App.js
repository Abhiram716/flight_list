import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Signup from './pages/authentication/Signup';
import AuthPageLayout from './components/authentication/AuthPageLayout';
import AuthContextProvider from './contexts/AuthContextProvider';
import Signin from './pages/authentication/Signin';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthContextProvider>
        <Routes>
          <Route path="/auth" element={<AuthPageLayout />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
