'use client';

import React, { createContext, useState } from "react";

export type UserProps = {
  id_usuario: number | null;
  nome: string;
  email: string;
  pontuacao?: number; // Adiciona a pontuação como parte do usuário
  imgURL?: string;    // Adiciona a URL da foto como parte do usuário
};

type AuthContextProps = {
  user: UserProps | null;
  loginContext: (user: UserProps) => void;
  logout: () => void;
  updatePontuacao: () => Promise<void>; // Atualiza a pontuação
  updateFoto: () => Promise<void>;      // Atualiza a foto
  updateUser: () => Promise<void>;      // Atualiza pontuação e foto
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>({
    id_usuario: 0,
    nome: "",
    email: "",
  });

  // Função para atualizar a pontuação do usuário
  const updatePontuacao = async () => {
    if (!user?.id_usuario) return; // Verifica se o usuário está logado
    try {
      const response = await fetch(
        `http://localhost:8080/usuarioresource/buscarPontuacaoUsuario/${user.id_usuario}`
      );
      if (response.ok) {
        const pontuacao = await response.json();
        setUser((prevUser) => prevUser ? { ...prevUser, pontuacao } : null); // Atualiza a pontuação
      }
    } catch (error) {
      console.error("Erro ao atualizar a pontuação:", error);
    }
  };

  // Função para atualizar a foto do usuário
  const updateFoto = async () => {
    if (!user?.email) return; // Verifica se o e-mail do usuário está disponível
    try {
      const response = await fetch(
        `http://localhost:8080/usuarioresource/exibirFoto/${user.email}`
      );
      if (response.ok) {
        const { foto } = await response.json();
        if (foto && foto !== " ") {
          setUser((prevUser) => prevUser ? { ...prevUser, imgURL: foto } : null); // Atualiza a foto
        }
      }
    } catch (error) {
      console.error("Erro ao atualizar a foto:", error);
    }
  };

  // Função para atualizar todos os dados do usuário (pontuação e foto)
  const updateUser = async () => {
    await Promise.all([updatePontuacao(), updateFoto()]);
  };

  // Função para logar o usuário no contexto
  const loginContext = (user: UserProps) => {
    setUser(user);
  };

  // Função para deslogar o usuário
  const logout = () => {
    setUser({ id_usuario: 0, nome: "", email: "" });
  };

  return (
    <AuthContext.Provider
      value={{ user, loginContext, logout, updatePontuacao, updateFoto, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
