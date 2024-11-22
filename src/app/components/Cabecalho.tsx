"use client";

import { HeaderStyle } from "@/styles/styled"; // Importa o estilo
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";

import logocerta from "@/assets/logo_certa.png";
import person from "@/assets/person.png";
import userLogin from "@/assets/user-logado.png";
import wattscoins from "@/assets/wattscoins.png";
import ranking from "@/assets/ranking.png";

import CardPerfilResumo from "../perfil/CardPerfilResumo";
import ModalNovoConsumo from "./ModalNovoConsumo";
import { AuthContext } from "@/context";

export default function Cabecalho() {
  const [menu, setMenu] = useState<boolean>(false);
  const [cardPerfil, setCardPerfil] = useState<boolean>(false);
  const abasNavegacaoRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, updateUser } = useContext(AuthContext);

  const togglePerfil = () => {
    setCardPerfil(!cardPerfil); // Alterna o estado do card de perfil
  };

  const toggleSidebar = () => {
    setMenu(!menu);
    document.body.style.overflow = menu ? "auto" : "hidden"; // Desativa o scroll do body quando o menu está aberto
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  // Retorna o primeiro nome do usuário
  const pegarPrimeiroNome = (): string => {
    if (user?.nome) {
      const nomes = user.nome.split(" ");
      return nomes[0]; // Retorna o primeiro nome
    }
    return ""; // Caso o nome esteja vazio ou indefinido
  };

  // Atualiza informações do usuário ao carregar o componente
  useEffect(() => {
    if (user?.id_usuario) {
      updateUser();
    }
  }, [user, updateUser]);

  // Retorna o nome e valor do mês atual
  const getCurrentMonth = () => {
    const now = new Date();
    const monthName = now.toLocaleString("default", { month: "long" }); // Nome completo do mês
    const monthValue = now.toISOString().slice(0, 7); // Formato YYYY-MM
    return [{ name: monthName, value: monthValue }];
  };

  return (
    <div>
      <HeaderStyle>
        <button onClick={toggleSidebar} className="btn_icon_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className="logo">
          <Link href="/">
            <Image src={logocerta} alt="logo Lumiere" />
          </Link>
        </div>
        <nav id="abas-navegacao" ref={abasNavegacaoRef} className={menu ? "menu-open" : ""}>
          <button className="btn_icon_header" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <Link href="" onClick={handleOpenModal}>
            CONSUMO MENSAL
          </Link>
          <Link href="/sobre-nos">SOBRE NÓS</Link>
          <Link href="/games">GAMES</Link>
        </nav>
        {user?.nome ? (
          <div className="opcoes-logado">
            <div>
              <Link href="/ranking">
                <Image src={ranking} alt="icone do ranking" />
              </Link>
            </div>
            <div className="itens-logado">
              <Link href="/login">{pegarPrimeiroNome()}</Link>
              <div className="pontuacao">
                <Image src={wattscoins} alt="icone wattscoins" />
                <p>{user?.pontuacao || 0}</p>
              </div>
            </div>
            <div className="userCard">
              {user?.imgURL ? (
                <Image
                  src={user.imgURL}
                  alt="Imagem Perfil"
                  height={200}
                  width={203}
                  layout="intrinsic"
                  className="imgFoto"
                  onClick={togglePerfil}
                />
              ) : (
                <Image src={userLogin} alt="perfil" onClick={togglePerfil} />
              )}
            </div>
          </div>
        ) : (
          <div className="opcoes">
            <Link href="/ranking">
              <Image src={ranking} alt="icone do ranking" />
            </Link>
            <Link href="/login">
              <Image src={person} alt="icone do perfil" />
            </Link>
            <Link href="/login">Login</Link>
          </div>
        )}
        {isModalOpen && <ModalNovoConsumo months={getCurrentMonth()} onClose={handleCloseModal} />}
      </HeaderStyle>
      {cardPerfil && <CardPerfilResumo />}
    </div>
  );
}
