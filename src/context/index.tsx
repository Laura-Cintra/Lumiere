'use client'

import React, { createContext, useState } from "react";

export type UserProps = {
  id_usuario: number | null;
  nome: string;
  email: string;
};

type AuthContextProps = {
  user: UserProps | null;
  loginContext: (user: UserProps) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>({
    id_usuario: 0,
    nome: "",
    email: "",
  });

  const loginContext = (user: UserProps) => {
    setUser(user);
  };

  const logout = () => {
    setUser({ id_usuario: 0, nome: "", email: "" });
  };

  return (
    <AuthContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
