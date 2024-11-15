"use client"

import Image from "next/image";
import Link from "next/link";
import { FooterStyle } from "@/styles/styled";

//imagens 
import instagram from "@/assets/instagram.png"
import github from "@/assets/github.png"
import facebook from "@/assets/facebook.png"
import copyrigth from "@/assets/Copyright.png"

export default function Rodape(){
    return(
        <FooterStyle>
            <section id="icons">
                <Link href="#"><Image src={instagram} alt="icone do instagram"/></Link>
                <Link href="#" target="_blank"><Image src={github} alt="icone do github"/></Link>
                <Link href="#"><Image src={facebook} alt="icone do facebook"/></Link>
            </section>
            <section id="abas">
                <ul className="opcoes-footer">
                    <li className="opcoes">
                        <Link href="">Consumo Mensal</Link>
                    </li>
                    <li className="opcoes">
                        <Link href=""> Simulação</Link>
                    </li>
                    <li className="opcoes">
                        <Link href="">Sobre Nós</Link>
                    </li>
                    <li className="opcoes">
                        <Link href="">Games</Link>
                    </li>
                </ul> 
            </section>
            <section id="copyright">
                <Image src={copyrigth} alt="icone de copyrigth"/>
                <p>2024 Lumière</p>
            </section>
    </FooterStyle>
    )
}