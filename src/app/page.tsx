"use client"

import { Carrossel, HomeStyle, OdsContainer, RankingContainer, SlideStyle, TextContainer } from "@/styles/styled";
import { MdBolt } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";
import RankingCard from "./components/RankingCard";
import { RankingCardProps } from "@/types";
import Link from "next/link";

// imagens
import ods1 from "@/assets/inicial/ods1.png"
import ods2 from "@/assets/inicial/ods2.png"
import seta from "@/assets/inicial/down_arrow.png"
import lampada from "@/assets/inicial/lamp.png";
import ouro from "@/assets/inicial/medalha_ouro.png";
import prata from "@/assets/inicial/medalha_prata.png";
import bronze from "@/assets/inicial/medalha_bronze.png";
import menina from "@/assets/inicial/menina.png"
import menina2 from "@/assets/inicial/menina2.png"
import menino from "@/assets/inicial/menino.png"
import fundo from "@/assets/inicial/fundohero.png";


const slides = [
  { text: "Energia renovável é a chave para o futuro!", image: lampada },
  { text: "Sustentabilidade começa com pequenos passos.", image: fundo },
  { text: "Reduza o consumo e preserve o planeta!", image: lampada },
];

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () =>
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  const next = () =>
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  const rankings: RankingCardProps[] = [
    {
      posicao: 2,
      nome: "Pedroca",
      foto: menino,
      medalha: prata,
      pontos: 820,
      height: "160px",
      premio: "Desconto de 20% em sites parceiros",
    },
    {
      posicao: 1,
      nome: "Luana",
      foto: menina,
      medalha: ouro,
      pontos: 1000,
      height: "200px",
      premio: "Voucher 50% OFF nas lojas Natura",
    },
    {
      posicao: 3,
      nome: "Carol",
      foto: menina2,
      medalha: bronze,
      pontos: 750,
      height: "140px",
      premio: "Ingresso para stand-up",
    },
  ];

  return (
    <HomeStyle>
      <section className="hero">
        <div className="heroConteudo">
          <h1>Lumière</h1>
          <p>Se beneficie sendo consciente</p>
          <button><Link href="#conteudo">SAIBA MAIS</Link></button>
        </div>
        <button className="heroSeta">
          <Link href="#conteudo"><Image src={seta} alt="seta para baixo"/></Link>
        </button>
      </section>

      <h2 id="conteudo">Energia para um <span>Futuro Sustentável</span></h2>
      <SlideStyle>
        <TextContainer>
          <h3>Você sabia?</h3>
          <p>{slides[currentSlide].text}</p>
        </TextContainer>
        <Carrossel>
          <div className="carousel">
            <button className="control prev" onClick={prev}>
              <IoIosArrowDropleftCircle />
            </button>
            <div className="slide">
              <Image
                src={slides[currentSlide].image}
                alt="Imagem sobre sustentabilidade"
                width={400}
                height={300}
              />
            </div>
            <button className="control next" onClick={next}>
              <IoIosArrowDroprightCircle />
            </button>
          </div>
          <div className="indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </Carrossel>
      </SlideStyle>

    <div>
      <h4><span><MdLeaderboard /></span>Ranking Sustentável<span><MdLeaderboard /></span></h4>
      <h5>Veja os usuários com o consumo mais consciente do mês!</h5>
    </div>

    <RankingContainer>
      {rankings.map((user) => (
        <RankingCard
          key={user.posicao}
          posicao={user.posicao}
          nome={user.nome}
          foto={user.foto}
          medalha={user.medalha}
          pontos={user.pontos}
          height={user.height}
          premio={user.premio}
        />
      ))}
    </RankingContainer>
    <div>
      <h4>ODS&apos;s que defendemos</h4>
    </div>
    <OdsContainer>
      <div className="container">
        <div className="ods">
            <div className="titulo">
            <MdBolt className="iconeraio1" style={{ fontSize: '34px', marginLeft: '8px' }} />
              ODS 7
            </div>
            <div className="subtitulo">Energia Limpa e Acessível</div>
            <Image className="imagem_ods" src={ods1} alt="Logo ODS 7" width={150} height={150}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="ods">
            <div className="titulo">
            <MdBolt className="iconeraio2"style={{ fontSize: '34px', marginLeft: '8px'}} />
            ODS 12
            </div>
            <div className="subtitulo">Consumo e Produção Responsáveis</div>
            <Image className="imagem_ods" src={ods2} alt="Logo ODS 12" width={150} height={150}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </OdsContainer>
    </HomeStyle>
  )}