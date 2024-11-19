import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-family: "Chakra Petch", sans-serif;

    img{
        max-width: 92px;
        max-height: 110px;
    }

    nav {
        display: flex;
        gap: 40px;
    }

    nav a, .opcoes a {
        color: #06303A;
        text-decoration: none;
    }

    .opcoes{
        display: flex;
        gap: 20px;
    }
`

import fundo from "@/assets/inicial/fundohero.png";
import { RankingCardProps } from "@/types";

export const HomeStyle = styled.main`

font-family: "Chakra Petch", sans-serif;

  .hero{
    width: 100%;
    height: 90vh;
    overflow: hidden;
    position: relative;
    background: url(${fundo.src}) no-repeat center center/cover;
  }

  .heroConteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    position: relative;

    h1{
        font-size: 3rem;
        margin-bottom: 1rem;
        font-family: "Chakra Petch", sans-serif;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    button{
        padding: 0.8rem 2rem;
        font-size: 1rem;
        background-color: rgba(215, 186, 88, 0.8);
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    button a{
        color: #fff;
        text-decoration: none;
    }

    button:hover{
        background-color: #947E34;
    }
  }

  .heroSeta{
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(93, 152, 164, 0.7);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .heroSeta:hover {
    transform: translateY(20%) translateX(-50%);;
  }

  h2 {
    font-size: 2rem;
    color: #222;
    text-align: center;
    padding: 50px 20px 30px 20px;

    span {
      color: #f7c945;
    }
  }

  h3 {
      font-size: 1.8rem;
      color: #111;
      margin-bottom: 1.3rem;
      border-bottom: 4px solid #f7c945;
      display: inline-block;
    }

    h4 > span{
        color: #5D98A4;
        padding: 10px;
    }

    h4, h5{
        text-align: center;
        padding: 10px;
    }

    h4{
        font-size: 2.2rem;
        letter-spacing: 2px;
    }

    h5{
        font-size: 1.2rem;
        font-weight: 400;   
    }

    @media (max-width: 768px) {
        h2{
            font-size: 2.2rem;

            span{
                display: block;
            }
        }

        h4{
            font-size: 1.9rem;
            letter-spacing: 2px;
        }
    }
`;

export const TituloStyle = styled.h1`
    font-family: "Chakra Petch", sans-serif;
    font-weight: bold;
    font-size: 45px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
`

export const SubTituloStyle = styled.h2`
    font-family: "Chakra Petch", sans-serif;
    font-weight: bold;
    font-size: 42px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 40px;
`

export const ContainerTituloGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerDestaqueGame = styled.div`
    margin-top: 40px;
    background-color: rgba(6, 48, 58, 0.2);
    

    .conteudo-games{
        display: flex;
        width: 100%;
        min-height: 560px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
    }
    .raio-bottom{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    } 
 

    .btn{
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .btn:hover{
        transform: translateY(10px);
    }


    p{
        font-size: 38px;
        font-family: "Montserrat", sans-serif;
        width: 400px;
    }
    .explicacao-itens{
        display: flex;
        flex-direction: column;
        gap: 40px;
        
        img{
            align-self: center;
        }
    }

    @media screen and (max-width: 1093px){
        padding: 26px;

        p{
            width: 650px;
        } 
    }
    @media screen and (max-width: 707px){
        padding: 26px;

        p{
            font-size: 30px;
            width: 520px;
        } 
    }

`

export const CategoriaContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 20px;
   border-bottom: 2px solid #ddd; 
   border-radius: 10px;
`;

export const CategoriaButton = styled.button<{ isSelected: boolean }>`
   margin-top: 20px;
   background: none;
   border: none;
   padding: 10px 20px;
   font-size: 26px;
   font-family: "Montserrat", sans-serif;
   cursor: pointer;
   color: ${({ isSelected }) => (isSelected ? '#021639' : '#000')};
   font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
   border-bottom: ${({ isSelected }) => (isSelected ? '3px solid #021639' : 'none')};
   
   &:hover {
      color: #D7BA58;
      border-bottom: 3px solid #D7BA58 ;
   }

`;

export const ContainerCard = styled.div`
   background-color: white;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
   align-items: flex-start;
   align-content:space-around;
`

export const CardGameStyle = styled.div`

   border: 0.8px solid #D7BA58;
   width: 335px;
   height: 367px;
   text-align: center;
   border-radius: 15px;
   cursor: pointer;
   margin-bottom: 26px;

   .categoria{
        font-family: "Montserrat", sans-serif;
        background-color: #D7BA58;
        border-radius: 15px;
        width: 43px;
        height: 20px;
        margin-left: 12px;
        margin-top: 10px;
   }

   h2{
    font-family: "Chakra Petch", sans-serif;
    font-weight: 600;   
    margin-top: 10px;
    padding: 8px;
   }

   &:hover{
    transform: scale(1.1); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
   }
`
export const CardDicaStyle = styled.div`
    width: 340px;
    height: 368px;
    border: 0.8px solid #D7BA58;
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    position: relative;
    margin-bottom: 26px;


    img {
        height: 368px;
        width: 340px;
        object-fit: cover;
    }

    .categoria {
        font-family: "Montserrat", sans-serif;
        background-color: #5D98A4;
        border-radius: 15px;
        width: 60px;
        height: 25px;
        position: absolute;
        top: 10px; /* Sempre no topo */
        left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .conjunto-dica {
        width: 100%;
        height: 110px; /* Altura inicial */
        padding: 6px 10px; /* Ajuste de padding para dar espaço */
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* Começa do topo */
        align-items: center;
        transition: height 0.3s ease-in-out;
        z-index: 1; /* Fica abaixo da categoria */
    }

    h2 {
        font-family: "Chakra Petch", sans-serif;
        font-weight: 600;   
        margin: 35px 0 10px; 
        padding: 0;
        font-size: 24px;
    }
   
    .txt-destaque {
        font-size: 16px;
        margin-bottom: 2px;
    }

    p {
        font-family: "Montserrat", sans-serif;
        color: #302F2F;
    }

    .txt-surpresa {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        margin-top: 8px; /* Dá espaço do conteúdo padrão */
    }

    &:hover {
        cursor: pointer;
    }

    &:hover .conjunto-dica {
        height: 150px; /* Altura expandida */
    }

    &:hover .txt-surpresa {
        opacity: 1;
        visibility: visible;
        font-weight: 800; 
        font-size: 18px;
        color: #5D98A4;
    }
`;

export const SlideStyle = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left;

  p {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
  }
`;

export const Carrossel = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel {
    display: flex;
    align-items: center;
    gap: 10px;

    .control {
      background: none;
      border: none;
      font-size: 2rem;
      color: #f7c945;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #333;
      }
    }

    .slide {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 8px;

    .dot {
      width: 10px;
      height: 10px;
      background-color: #ccc;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s;

      &.active {
        background-color: #f7c945;
      }
    }
  }

  @media (max-width: 768px) {
    img{
        width: 300px;
        height: 200px;
    }
  }
`;

export const RankingCardContainer = styled.div<Pick<RankingCardProps, "height" | "posicao">>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem;
  height: auto;
  width: 120px;
  gap: 1rem;

  h5{
    font-size: 1.3rem;
  }

  .ranking-box {
    background-color: ${({ posicao }) => {
      if (posicao === 1) return "#5D98A4";
      if (posicao === 2) return "#698186";
      return "#91A8AD";
    }};
    color: white;
    border-radius: 8px;
    padding: 1rem;
    width: ${({ posicao }) => (posicao === 1 ? "160px" : posicao === 2 ? "140px" : "120px")};
    bottom: 0;
    height: ${({ height }) => `${parseInt(height) - (-10)}px`};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .rank-text {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .prize-text {
    font-size: 0.85rem;
  }

  .user-image {
    border-radius: 50%;
    border: solid 2px black;
    margin-bottom: -10px;
  }

  .points span {
    color: #FDB813;
    font-weight: bold;
  }
`;

export const RankingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  padding: 2rem;
  height: auto;
  overflow: 1;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const OdsContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center; 
    
    .container{
        text-align: center;
        display: flex; 
        justify-content: center; 
        align-items: center;
        flex-wrap: wrap;
    }

    .imagem_ods{
        margin-top: 30px;
    }

    p{
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .titulo{
        margin-top: 60px;
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
    }

    .subtitulo{
        width: 200px;
        font-size: 1.2rem;
        margin: 0 auto;
        margin-top: 15px;
        height: 50px;
    }
    .ods{ 
        text-align: center;
    }
    .iconeraio1{
        color:   #FFC400;
    }
    .iconeraio2{
        color:  #BF8C2B;
    }
`;

export const SobreStyle = styled.main`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-family: "Chakra Petch", sans-serif;

    h1, h2{
        font-size: 2rem;
        color: #222;
        text-align: center;
        padding: 50px 20px 30px 20px;
    }

    .introducao {
        font-size: 1.25rem;
        color: #333;
        line-height: 1.6;
        max-width: 80%;
        text-align: justify;
        margin: 0 auto;
    }

    .container-compromissos{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        @media (max-width: 768px) {
            flex-wrap: wrap;
        }
    }

    .container-compromissos{
        font-size: 1.1rem;
        color: #333;
        line-height: 1.6;
        max-width: 75%;
        margin: 0 auto;
    }
`;

export const ParticipantesStyle = styled.div`
    margin: 40px auto 50px auto;
    background-color: #F3F4F6;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content:space-around;
    text-align: start;
    font-family: "Montserrat", sans-serif;

    .container{
        max-width: 278px;
        height: 79px;
        border-radius: 20px;
        background-color: #B7D5E5;
        padding: 10px;
        position: absolute;
        margin-left: 70px; 
        margin-top:-55px;
        box-shadow: 5px 5px 2px #021639;
    }

    #part1, #part2, #part3{
        position: relative;
        margin-left: 25px;
        padding-right: 30px;
        margin-right: 10px;
        justify-content: space-evenly;
    }

    .icons{
        display: flex;
        margin-top: -20px;
        margin-left: 190px;
    }

    .icons :nth-child(2){
        margin-right: 10px;
        padding-left: 5px;
    }

    .infos{
        display: inline-block;
        width: 200px;
    }
    .infos h3{
        font-size: 20px;
        color:#012E40;
    }
    .infos p{
        margin-top: 5px;
        font-size:16px;
        color:#797979;
    }

    @media screen and (max-width:1086px) {
        .container{
            max-width: 252.53px;
            height: 69px;
        }
        .foto{
            width: 280px;
            height: 280px;
        }
        .infos{
            margin-left: -15px;
        }
        .infos h3{
            font-size: 20px;
            padding-left: 15px;
            color:#012E40;
        }
        .infos p{
            font-size:14px;
            padding-left: 15px;
            color:#797979;
        }
        .icons{
            margin-left: 140px;
            margin-top: -25px;
        }
    }

    @media screen and (max-width:700px) {
        .icons{
            margin-left: 150px;
            margin-top: -25px;
        }

        #part1, #part2, #part3{
            padding-top: 30px;
        }
    }
`

export const CirclesStyle = styled.div`
    .circles{
            display: flex;
            justify-content: space-between;
        }
`

export const FooterStyle = styled.footer`

    margin-top: 30px;
    max-height: 184px;
    width: 100%;
    background-color: #5D98A4;
    text-align: center;
    font-family: "Chakra Petch", sans-serif;

    img{
        margin-top: 10px;
        margin-left: 16px;
    }

    ul{
        margin-top: 10px;
        font-size: 14px;
    }

    li {
        display: inline-block;
        padding-left: 10px;
    }
    a {
        text-decoration: none;
        color: #fff;
    }

    #copyright img{
        margin: 0;
        padding-top: 2px;
    }

    #copyright p{
        display: inline-block;
        color: #B7B4BF;
        font-size: 14px;
        margin-left: 2px;
    }
    #copyright{
        margin-top: 10px;
    }
`