import React, { createContext, useCallback, useContext, useState } from 'react';

import AuthService from '../services/authService';
import AsyncOperationStatus from '../utils/AsyncOperationStatus';

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
      let responseMsg = await authService.signup(username, password);
      setAsyncStatus(AsyncOperationStatus.success);
      return responseMsg.data.message;
    } catch (e) {
      setAsyncStatus(AsyncOperationStatus.failure);
      return e.data.error;
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
