import React, { createContext, useCallback, useContext, useState } from "react";

interface loginCredentials {
  cpf: string;
  senha: string;
}

interface IAuthContext {
  signIn(credentials: loginCredentials): Promise<void>;
  login: boolean;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async (_) => {
    setLoading(true);
    setTimeout(() => {
      setLogin(true);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <AuthContext.Provider value={{ login, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useLogin(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}
