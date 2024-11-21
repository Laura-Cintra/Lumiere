'use client'

import { useContext, useState } from "react";
import { DivLogin } from '@/styles/styled';
import Image from 'next/image';
import logo from '@/assets/logo_certa.png';
import icone from '@/assets/login/icone_login.png';
import Link from 'next/link';
import { LoginProps } from '@/types';
import { useRouter } from 'next/navigation';
import { AuthContext } from "@/context";

export default function Login() {
  const navigate = useRouter();
  const { loginContext } = useContext(AuthContext);

  const [login, setLogin] = useState<LoginProps>({
    email: '',
    senha: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/usuarioresource/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });
  
      if (response.ok) {
        const response2 = await fetch(`http://localhost:8080/usuarioresource/buscaIdUsuario/${login.email}`);
        if (response2.ok) {
          const idUsuario = await response2.json();
          const response3 = await fetch(`http://localhost:8080/usuarioresource/exibirUsuarioResumo/${idUsuario}`);
          if (response3.ok) {
            const data = await response3.json();
            const user = {
              id_usuario: idUsuario,
              email: login.email,
              nome: data.nome,
            };
            loginContext(user); // Atualiza o contexto com os dados do usuário
            navigate.push("/"); // Redireciona para a página inicial após o login
          }
        }
      } else {
        alert("Falha ao realizar o Login! Verifique se o e-mail e senha estão corretos.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  return (
    <DivLogin>
      <div className="login-logo">
        <Link href={"/"}>
          <Image className="login-logo" src={logo} alt="Logo Lumiere" />
        </Link>
      </div>
      <div className="login_card">
        <Image src={icone} alt="Icone de um desenho de uma mulher" />
        <h2>Login</h2>
        <p>Seja bem vindo(a)!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={login.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              name="senha"
              value={login.senha}
              onChange={handleChangeInput}
            />
          </div>
          <Link className="esqueceu_senha_link" href={"/"}>
            Esqueceu a Senha?
          </Link>
          <button type="submit">Login</button>
          <Link className="cadastro_link" href={"/cadastro"}>
            Ainda não tem uma conta? Cadastre-se
          </Link>
        </form>
      </div>
    </DivLogin>
  );
}
