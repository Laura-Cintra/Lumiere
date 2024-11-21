"use client"

import React, { createContext, useState } from "react";

export type UserProps = {
    id_usuario: number | null;
    nome: string;
    email: string;
    senha: string;
    nick_name: string;
    data_nascimento: string;
    cep: string;
};

type AuthContextProps = {
    user: UserProps | null;
    login: (user: UserProps) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<UserProps | null>(null);

    const login = (user: UserProps) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
