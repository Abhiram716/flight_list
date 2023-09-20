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

  const signin = useCallback(async (username, password) => {
    const authService = new AuthService();
    try {
      setAsyncStatus(AsyncOperationStatus.pending);
      let accessToken = await authService.signin(username, password);
      setAsyncStatus(AsyncOperationStatus.success);
      setAccessToken(accessToken);
    } catch (e) {
      setAsyncStatus(AsyncOperationStatus.failure);
      return e.data.error;
    }
  }, []);

  const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
  };
  const logout = (accessToken) => {
    localStorage.removeItem('accessToken');
  };

  const contextValue = {
    signup,
    signin,
    logout,
    asyncStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
