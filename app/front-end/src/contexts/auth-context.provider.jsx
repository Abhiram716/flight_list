import React,
{
  Children,
  createContext,
  useCallback,
  useContext
} from "react";

import { signUpService } from "../services/signUpService";

const AuthContext = createContext(null);

const useAuthContext = () => useContext(AuthContext);
const AuthContextProvider = () => {
  const signUp = useCallback(async (username, password) => {
    signUpService(username, password);
  }, []);
  return <AuthContext.Provider value={signUp}>{Children}</AuthContext.Provider>;
};

export { AuthContextProvider, useAuthContext };
