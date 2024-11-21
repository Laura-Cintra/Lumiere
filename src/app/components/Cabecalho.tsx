"use client";

import { HeaderStyle } from "@/styles/styled"; // Importa o estilo
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import logocerta from "@/assets/logo_certa.png";
import person from "@/assets/person.png";
import ranking from "@/assets/ranking.png";
// import ModalConsumo from "./ModalConsumo";
import ModalMensagem from "./ModalMensagem";

export default function Cabecalho() {
    const [menu, setMenu] = useState<boolean>(false);
    const abasNavegacaoRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setMenu(!menu);
        document.body.style.overflow = menu ? "auto" : "hidden"; // Desativa o scroll do body quando o menu está aberto

        //  // Aplica o blur ao corpo da página
        // if (!menu) {
        //     document.body.style.filter = "blur(2px)"; // Aplica o blur
        // } else {
        //     document.body.style.filter = "none"; // Remove o blur
        // }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true); // Abre o modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Fecha o modal
    };

    return (
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
            <nav
                id="abas-navegacao"
                ref={abasNavegacaoRef}
                className={menu ? "menu-open" : ""}
            >
                <button className="btn_icon_header" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <Link href="" onClick={handleOpenModal}>CONSUMO MENSAL</Link>
                <Link href="/sobre-nos">SOBRE NÓS</Link>
                <Link href="/games">GAMES</Link>
            </nav>
            <div className="opcoes">
                <Link href="">
                    <Image src={ranking} alt="icone do ranking" />
                </Link>
                <Link href="">
                    <Image src={person} alt="icone do perfil" />
                </Link>
                <Link href="/login">Login</Link>
            </div>

            {isModalOpen && (
                <ModalMensagem
                    months={["setembro", "outubro", "novembro"]} // Meses
                    onClose={handleCloseModal} // Função para fechar o modal
                />
            )}
        </HeaderStyle>
    );
}
