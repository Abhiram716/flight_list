import React, { createContext, useCallback, useContext, useState } from 'react';

import AsyncOperationStatus from '../utils/AsyncOperationStatus';
import AuthService from '../services/authService'; // Correct the import path

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const [asyncStatus, setAsyncStatus] = useState(AsyncOperationStatus.default);

  const signup = useCallback(async (username, password) => {
    const authService = new AuthService();
    try {
      setAsyncStatus(AsyncOperationStatus.pending);
      const result = await authService.signup(username, password);
      setAsyncStatus(AsyncOperationStatus.success);
      console.log(result);
    } catch (e) {
      setAsyncStatus(AsyncOperationStatus.failure);
      console.error(e);
    }
  }, []);

  const contextValue = {
    signup,
    asyncStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
