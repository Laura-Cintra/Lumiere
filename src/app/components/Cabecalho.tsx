"use client"

import Image from "next/image";
import Link from "next/link";
import { HeaderStyle } from "@/styles/styled";

// import logo from "@/assets/logo.png";
import logocerta from "@/assets/logo_certa.png";
import ranking from "@/assets/ranking.png"
import person from "@/assets/person.png"

export default function Cabecalho(){
    return(
        <HeaderStyle>
            <Link href="/"><Image src={logocerta} alt="logo Lumiere"/></Link>
            <nav>
                <Link href="">CONSUMO MENSAL</Link>
                <Link href="">SIMULAÇÃO</Link>
                <Link href="">SOBRE NÓS</Link>
                <Link href="">GAMES</Link>
            </nav>
            <div className="opcoes">
                <Link href=""><Image src={ranking} alt="icone do ranking"/></Link>
                <Link href=""><Image src={person} alt="icone do perfil"/></Link>
                <Link href="">Login</Link>
            </div>
        </HeaderStyle>
    )
}