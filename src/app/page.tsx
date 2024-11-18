"use client"

import { HomeStyle } from "@/styles/styled";
import seta from "@/assets/down_arrow.png"
import Image from "next/image";

export default function Home() {

  return (
    <HomeStyle>
      <section className="hero">
        <div className="heroConteudo">
          <h1>Lumière</h1>
          <p>Se beneficie sendo consciente</p>
          <button><a href="#">SAIBA MAIS</a></button>
        </div>
        <button className="heroSeta">
          <a href="#"><Image src={seta} alt="seta para baixo"/></a>
        </button>
      </section>
    </HomeStyle>
  )}