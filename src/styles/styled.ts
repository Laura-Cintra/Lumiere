import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-family: "Chakra Petch", sans-serif;

    img {
        max-width: 92px;
        max-height: 110px;
    }

    nav {
        display: flex;
        gap: 40px;
    }

    #abas-navegacao {
        z-index: 2;
        transition: margin-left 0.3s ease;
        filter: none;
    }

    nav a,
    .opcoes a {
        color: #06303a;
        text-decoration: none;
    }

    nav a:hover{
        color: #5D98A4;
        border-bottom: 2px solid #5D98A4;
    }

    .btn_icon_header {
        background: transparent;
        border: none;
        color: #06303a;
        cursor: pointer;
        display: none;
    }

    .opcoes {
        display: flex;
        gap: 20px;
    }
    .opcoes-logado{
        display: flex;
        gap: 20px;
        align-items: center;
        .pontuacao img{
            width: 20px;
            height: 20px;
        }
        .pontuacao{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .user{
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
        .itens-logado {
            display: flex;
            flex-direction: column;
            text-align: start;
            align-items: center;
            gap: 4px;
            margin-left: 20px;
        }
        .itens-logado a{
            text-decoration: none;
            color: black;
            align-self: flex-start;
        }

        .pontuacao p {
        /* margin: 0; */
        font-size: 16px;
        font-weight: bold;
        color: #000; /* Cor do texto */
        }
        .pontuacao {
            display: flex;
            gap: 10px;
        }



    }

    @media screen and (max-width: 1040px) {
        
        #abas-navegacao {
            position: absolute;
            flex-direction: column;
            top: 0;
            background: #fff;
            height: 100vh;
            width: 38vw;
            padding: 1em;
            animation-duration: 1s;
            margin-left: -100vw;
            /* text-align: center; */
            box-shadow: 1px 1px 20px gray;
        }

        nav a {
            border-bottom: solid 2px #d3d3d3;
            padding: 8px 0;
        }

        nav a:hover{
            border-left: solid 3px #5D98A4;
            color: #5D98A4;
        }
        #abas-navegacao.menu-open {
            margin-left: -20px;
        }

        .btn_icon_header {
            display: block;
        }
    }
`;

export const HeaderFooterContainer = styled.div`
  display: flex;
  flex-direction: column; /* Coloca os elementos em coluna */
  min-height: 100vh; /* Garante que o container ocupe toda a altura da viewport */
`;

export const MainContent = styled.main`
    flex-grow: 1; /* Faz o conteúdo principal crescer para preencher o espaço */
`;

import fundo from "@/assets/inicial/fundohero.png";
import { RankingCardProps, RoundStyleColor } from "@/types";

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

    @media screen and (max-width: 650px){
        .img-destaque{
            width: 520px;
        }
    }
    @media screen and (max-width: 540px){
        .img-destaque{
            width: 420px;
        }
        p{
            font-size: 26px;
            width: 420px;
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
        /* font-size: 7px; */
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
        font-size: 15px;
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
      border-radius: 3px;
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
        margin: 0 13%;
    }

    .imagem_ods{
        margin-top: 30px;
    }

    p{
        width: 55%;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 10px;
        font-size:17px;
        color:#1a1a1a;
    }

    .titulo{
        margin-top: 60px;
        font-size: 2rem;
        font-weight: 500;
        margin-left: -25px;
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

    @media (max-width: 768px) {
        .container{
            flex-wrap: wrap;
        }
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
        font-size: 1.1rem;
        color: #333;
        line-height: 1.6;
        max-width: 75%;
        margin: 0 auto;

        @media (max-width: 768px) {
            flex-wrap: wrap;
            max-width: 50%;

            div{
                margin: 10px;
            }
        }

        @media (max-width: 400px) {
            flex-wrap: wrap;
            max-width: 80%;
        }
    }
`;

export const ParticipantesStyle = styled.div`
    margin: 30px auto 50px auto;
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

    @media screen and (max-width:800px) {
        #part3{
            margin-top: 30px;
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

        #part2, #part3{
            margin-top: 20px;
        }
    }
`

export const CirclesStyle = styled.div`
    .circles{
            background-color: #F9F9F9;
            display: flex;
            justify-content: space-between;
        }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Chakra Petch", sans-serif;

    .titulo{
        display: flex;

        h2{
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333333;
            padding: 5px 8px;
        }
    }

    .p-apresentacao > p{
        color: #494C46;
        font-size: 1.05rem;
        line-height: 1.6;
    }

  .close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.7rem;
    cursor: pointer;
  }

  span{
    color: #CFAF42;
    text-transform: uppercase;
  }

  label{
    display: block;
    text-align: left;
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #707070;
    font-weight: 700;
  }

  input{
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #cccccc;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .fileContainer{
    display: flex;
    align-items: center;
    border: 2px solid #808080;
    border-radius: 5px;

    input{
        border: 2px solid #808080;
        color: #707070;
    }

    .custom-file-upload{
        background-color: #555555;
        color: #ffffff;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9rem;
        border: none;
        margin-left: 15px;
    }

    input[type="file"]{
        display: none;
    }

    p{
        margin-top: 15px;
        padding-left: 20px;
    }
  }

  p{
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #707070;
  }

  .cadastrar-button{
    margin-top: 1rem;
    background: #D7BA58;
    color: #ffffff;
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background: #B29943;
    }
  }
`;

export const SetasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button<{ disabled: boolean }>`
  background: ${(props) => (props.disabled ? "#E5D6A3" : "#CFAF42")};
  color: #fff;
  border: none;
  padding: 5px;
  margin: 20px;
  margin-bottom: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => (props.disabled ? "#ececec" : "#E9CF75")};
  }
`;

export const FooterStyle = styled.footer`
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

export const DivCadastro = styled.div`
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    justify-content: space-between;
    background-color: #F9F9F9;
    min-height: 100vh;
    @media (max-width: 800px) {
        flex-direction: column;
        row-gap: 2rem;
    }
`

export const DivCadastroEsq = styled.div`
    background-color: #E3BD3C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    max-width: 40%;
    min-height: 100vh;
    padding: 10rem 0px;
    
    .logo img {
        max-width: 90px;
        max-height: 110px;
        position: absolute;
        left: 0;
        top: 0;
        padding: 10px 0px 0px 10px;
        margin-left: 0.6rem;
        margin-top: 0.6rem;
    }

    .image{
        max-height: 280px;
        max-width: 280px;
    }
    
    h2 {
        font-family: "Chakra Petch", sans-serif;
        font-size: 3rem;
        line-height: 2;
        padding: 8px 0px 2px;
    }
    
    p {
        font-size: 2rem;
        text-align: center;
        line-height: 3rem;
    }
    
    button{
        border: none;
        background-color: inherit;
    }


    @media screen and (max-width: 1200px){
        
        max-width: 40%;
        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 800px){
       min-width: 100vw;
       
       p {
        margin-bottom: 1rem;
       }
    }
    
`

export const DivCadastroDir = styled.div`
    margin: 0 auto;
    text-align: start;
    form {
        display:  flex;
        flex-direction: column;
        row-gap: 2rem;
    }

    form label{
        padding-right: 1rem;
        color: rgba(0, 0, 0, 0.6);
        font-family: "Montserrat", sans-serif;
        font-size: 34px;
    }

    form input {
        color: rgba(0, 0, 0, 0.3);
        border: none;
        background-color: white;
        border-radius: 3px;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
        padding: 6px 120px 6px 0px;
        font-size: 24px;
        text-indent: 10px;
        max-width: 90%;
    }
    ::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
    input[type="checkbox"] {
        margin-right: 10px;
    }

    .texto_erro {
        text-align: center;
    }

    button {
        margin: 0 auto;
        border: 2px solid #E3BD3C;
        border-radius: 5px;
        min-width: 50%;
        padding: 10px 0px;
        font-size: 24px;
        color: white;
        background-color: #E3BD3C;
        cursor: pointer;
    }

    button:hover{
        background-color: white;
        border: 2px solid #E3BD3C;
        color: #E3BD3C;
    }

    @media screen and (max-width: 1200px) {
        padding: 0px 10px;
        form label {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 800px) {
        margin-top: 2rem;
        form {
            max-width: 90vw;
            text-align: start;
        }
        form label {
            font-size: 1.5rem;
        }
    }

`
import bgLogin from "@/assets/login/login_bg.jpg"
export const DivLogin = styled.div`
    background: url(${bgLogin.src}) no-repeat center center/cover; ;
    background-color: lightgray;
    min-height: 150vh;
    .login-logo {
        max-width: 100px;
        max-height: 120px;
        padding: 6px 0px 0px 6px;
    }

    .login_card {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 50%;
        background-color: rgba(210,210,210,0.5);
        padding: 2rem 4rem;
        border-radius: 50px;

        img{
            max-width: 50%;
            height: auto;
        }

        form {
            display: flex;
            flex-direction: column;
            row-gap: 1.5rem;
            position: relative;
            width: 100%;
        }
        .esqueceu_senha_link {
            text-align: end;
            margin-right: 10%;
            color: rgba(0,0,0,0.80);
            font-weight: 600;
            text-decoration: underline 2px #E3BD3C;
        }

        .cadastro_link{
            text-align: center;
            color: rgba(0,0,0,0.80);
            font-weight: 600;
            text-decoration: underline 2px #E3BD3C;
        }
        
        h2 {
            font-family: "Chakra Petch", sans-serif;
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        p {
            font-size: 2rem;
        }

        form input {
            width: 80%;
            height: 2rem;
            border: none;
            border-radius: 10px;
            box-shadow: 1px 3px 3px rgba(0,0,0,0.5);
            margin-top: 2rem;
            padding: 1.5rem 1rem;
        }
        ::placeholder {
            color: rgba(0,0,0,0.6);
            font-size: 1.3rem;
        }

        form > button {
           position: relative;
           margin: 0 auto;
           padding: 8px 6rem;
           background-color: #E3BD3C;
           color: white;
           border: 2px solid #E3BD3C;
           font-size: 1.5rem;
           cursor: pointer;
           border-radius: 5px;
        }
        button:hover{
        background-color: white;
        border: 2px solid #E3BD3C;
        color: #E3BD3C;
        }
    }
    
    @media (max-width: 800px) {

        max-height: 100vh;
        .login_card {
            max-width: 85%;
            margin-top: 1rem;
        }

        .login_card form > button {
            padding: 8px 6rem;
        }

        .login_card img{
            max-width: 80%;
            height: auto;
        }

        .login_card h2 {
            font-family: "Chakra Petch", sans-serif;
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        .login_card p {
            font-size: 1.3rem;
        }

        .esqueceu_senha_link {
            font-size: 1rem;
        }

        .login_card input {
            min-width: 100%;
        }
    }

    @media (max-width: 475px){
        .login_card form > button {
            padding: 8px 4rem;
        }
    }
`;



export const PerfilStyle = styled.div`
   width: 100%;
   min-height: 450px;
   /* margin: 20px auto;  */
   position: relative;
   margin-top: 60px;
   gap: 50px;


   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: stretch;
   align-content: space-around;
    
`


export const FundoStyle = styled.div`
    background-color: #5D98A4;
    width: 100%;
    height: 157px;
    position: absolute;

    .card-btn-sair{
        display: flex;
        justify-content: end;
    }
    .btn-sair{
        margin-top: 20px;
        margin-right: 20px;
        width: 30px;
        height: 30px;
        color: white;
    }
`

export const PerfilContainerStyle = styled.div`
    padding-top: 20px;

`

export const PerfilInfosStyle = styled.div`
   font-family: "Montserrat", sans-serif;
   background-color: #fff;
   max-width: 590px;
   min-height: 600px;
   box-shadow: 0px 2px 5px black;
   border-radius: 5px;
   position: relative;

   .itens-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        border-bottom: 1px solid #808080; 
   }

   .itens-button{
        margin-top: 20px;
        background: none;
        border: none;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        color: #494C46;
        
        &:hover {
            /* color: #D7BA58; */
            border-bottom: 3px solid #D7BA58 ;
        }
   }

   label{
        font-weight: 600;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 5px;
        color: #808080;
    }
    .campos{
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      flex-direction: row;
      gap: 20px;
      margin: 20px 0;
    }
    .selectStyle, .btn{
        border-radius: 6px;
        min-height: 40px;
        min-width: 300px;
        padding:4px;
        border: none; 
        box-shadow: 1px 1px 5px gray;
        color: #A5A5A5;
        padding: 5px 15px;
    }
    .btn{
      background-color: #E3BD3C;
      width: 100px;
      height: 30px;
      border-radius: 7px;
      font-size: 18px;
      color: white;
      display: flex;
      justify-content: center;
      margin: auto;
      margin-top: 60px;
      cursor:pointer;
      border: none;
    }

    @media screen and (max-width: 590px) {
        max-width: 420px;

        label{
            font-size: 15px;
        }
        .selectStyle{
            font-size: 12px;
            min-height: 32px;
            min-width: 250px;
        }
        .itens-button{
            font-size: 17px;
        }
    }

`

export const DadosUserStyle = styled.div`

   font-family: "Montserrat", sans-serif;
   background-color: #fff;
   width: 380px;
   min-height: 600px;
   margin-left: 20px;
   box-shadow: 0px 2px 5px black;
   border-radius: 5px;
   

.icon-deletar{
    width: 30px;
    height: 30px;
    margin-top: 25px;
    margin-left: 15px;
}

.upload{
  margin-top: 20px;
  width: 100px;
  position: relative;
  margin: auto;
}

.upload img{
  border-radius: 50%;
  box-shadow: 3px 3px 10px #eaeaea;
  width: 140px;
  height: 140px;
}

.upload .round{
  position: absolute;
  bottom: 0;
  right: -20px;
  background: #D7BA58;
  color: white;
  font-size: 20px;
  width: 32px;
  height: 32px;
  line-height: 33px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
}

.upload .round input[type = "file"]{
  position: absolute;
  transform: scale(2);
  opacity: 0;
}

input[type=file]::-webkit-file-upload-button{
    cursor: pointer;
}

.informacoes{
    text-align: center;
    h2{
        margin-top: 15px;
        font-family: "Chakra Petch", sans-serif;
        font-size: 28px;
    }
    p{
        font-size: 18px;
        color: #494C46;
    }
}

.informacoes-extras{
    margin-top: 40px;
    color: #494C46;
    text-align: center;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    p{
        border-top: 1px solid #808080;
        /* border-bottom: 1px solid #808080; */
        margin-top: 15px;
        height: 50px;
        padding: 20px 0;
        
    }
}
`;


export const FundoCardStyle = styled.div`
    background-color: #5D98A4;
    width: 285px;
    height: 70px;
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
    justify-content: end;
    align-items: end;

    .editar{
        width: 25px;
        height: 25px;
        margin-right: 8px;
        margin-bottom: 8px;
    }
`

export const CardPerfilStyle = styled.div<RoundStyleColor>`
    width: 285px;
    height: 450px;
    background-color: #F9F9F9;
    box-shadow: 0px 2px 4px black;
    border-radius: 25px;
    margin-top: -50px;
    margin-left: 75%;
    position: absolute;
    z-index: 2;
    transition: opacity 0.3s ease;
    

    .foto{  
        width: 100px;
        height: 100px;
        position: relative;
        margin: auto;
    }

    .foto .foto-perfil{
        width: 100px;
        height: 100px;
        margin-top: 20px;
        border: 2px solid black;
        border-radius: 50%;
    }

    .foto .round{
        position: absolute;
        bottom: 0;
        right: 6px;
        background: ${(props) => props.BgRound || '#CFD426'};
        color: white;
        font-size: 20px;
        width: 26px;
        height: 26px;
        line-height: 33px;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
    }
    .foto .folha{
        margin-bottom: 3px;
        margin-top: -90px;
        width: 15px;
        height: 15px;
    }
    .infos-user{
        margin-top: 25px;
        text-align: center;
    }
    .infos-user h2{
        font-size: 22px;
        padding: 5px;
    }
    .infos-user p{
        font-size: 14px;
    }

    .infos-user2{
        margin-top: 50px;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        font-size: 14px;
    }
    .infos-user2 img{
        width: 28px;
        height: 28px;
    }
    span{
        color: #FDB813;
        font-weight: 600;
    }
    .infos-emblemas{
        padding: 30px;
        margin-top: 40px;
        font-size: 15px;
    }
    .infos-emblemas img{
        width: 30px;
        height: 30px;
    }
    .infos-emblemas p{
        margin-bottom: 10px;
    }
    .icones{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    @media screen and (max-width:1164px){
        margin-left: 71%;
    }
    @media screen and (max-width:1015px){
        margin-left: 64%;
    }
    @media screen and (max-width:915px){
        margin-left: 65%;
    }
    @media screen and (max-width:842px){
        margin-left: 55%;
        margin-top: -10px;
    }
    @media screen and (max-width:650px){
        margin-left: 35%;
        margin-top: -10px;
    }
    @media screen and (max-width:500px){
        margin-left: 15%;
        margin-top: -10px;
    }

`

export const DashboardStyle = styled.div`
    text-align: center;
    h1{
        text-align: start;
        margin-bottom: 30px;
        padding: 10px 20px;
    }
`;

export const RankingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 2.2rem;
        color: #222;
        text-align: center;
        padding: 0 20px 30px 20px;
    }
    .ul_ranking {
        font-size: 1.6rem;
        max-width: 80%;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            margin-bottom: 1rem;
            line-height: 1.5;
            font-size: 1.2rem;
            max-width: 80%;
            margin: 0 auto;
            padding: 10px;
        }
        span{
            color: #FDB813;
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .ul_ranking {
            font-size: 1.4rem;
            width: 90%;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.8rem;
        }

        .ul_ranking {
            font-size: 1.2rem;
            width: 100%;
        }
    }
`;

export const RankingBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    max-width: 800px;

    h1 {
    font-size: 2.2rem;
    color: #222;
    text-align: center;
    padding: 0 20px 30px 20px;

    span {
      color: #f7c945;
    }
  }

    ul {
        border: 1px solid #0964b0;
        border-radius: 10px;
        width: 80%;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .ranking_linha {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
        padding: 1rem;
        font-family: Arial, sans-serif;

        &:last-child {
            border-bottom: none;
        }

        .medalha {
            width: 42px;
            height: auto;
            margin-right: 1rem;
        }

        .pic_nome_pontos {
            display: flex;
            align-items: center;
            flex: 1;

            .foto {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 1rem;
            }

            .nome_pontos {
                display: flex;
                flex-direction: column;

                p {
                    margin: 0;
                }

                .nome_usuario{
                    font-weight: bold;
                    font-size: 1.1rem;
                }

                .pontos_span {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #fdb813;
                }
            }
        }

        .porc_consumo {
            font-size: 1.1rem;
            padding-left: 20px;

            .consumo_span {
                font-size: 1.3rem;
                color: #0964b0;
                font-weight: bold;
            }
        }
    }

    .underline_box {
        border: 2px solid #fdb813;
        width: 100%;
        margin: 3rem 0;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 1.8rem;
        }

        .ranking_linha {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            gap: 1rem;

            .medalha {
                width: 40px;
            }

            .pic_nome_pontos {
                flex-direction: row;

                .foto {
                    width: 50px;
                    height: 50px;
                }

                .nome_pontos {
                    .nome_usuario {
                        font-size: 1.1rem;
                    }

                    .pontos_span {
                        font-size: 1rem;
                    }
                }
            }

            .porc_consumo {
                font-size: 1rem;
                padding-left: 0;

                .consumo_span {
                    font-size: 1.2rem;
                }
            }
        }
    }
`

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 0s, opacity 0.5s linear;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  z-index: 1000;
`;

export const Content = styled.div<{ open: boolean }>`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transform: scale(${props => (props.open ? 1 : 0.9)});
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${props => (props.open ? 1 : 0)};
  z-index: 1001;
  width: 90%;
  max-width: 500px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: gray;
  transition: color 0.3s;

  &:hover {
    color: darkred;
  }
`;

export const ActionButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkgreen;
  }
`;

export const CancelButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }
`;

export const ModalQuizStyle = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.2)" : "transparent")};
  transition: background-color 0.3s ease;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  @media(max-width: 480px) {
    h1 {
      font-size: 1.6rem;
    }

    .ranking_linha {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .medalha {
        width: 30px;
      }

      .pic_nome_pontos {
        flex-direction: column;

        .foto {
          width: 45px;
          height: 45px;
        }

        .nome_pontos {
          .nome_usuario {
            font-size: 1rem;
          }

          .pontos_span {
            font-size: 0.9rem;
          }
        }
      }

      .porc_consumo {
        font-size: 0.9rem;

        .consumo_span {
          font-size: 1rem;
        }
      }
    }
  }
`;

export const ModalSuccessStyle = styled.div`

   .containerText{
      text-align: center;
      width: 14rem;
   }
   .icon-success{
      margin: 0 auto;
      color: #5cb85c; 
      font-size: 50px;
   }

   .title{
   font-size: 1.125rem; 
   font-weight: 900; 
   color: #2d3748; 
   margin-bottom: 10px;
   }

   .descricao{
   color: #a0aec0; 
   font-size: 0.875rem; 
   margin-bottom: 10px;
   }

   .btnCancelar{
      background-color: #f7fafc; 
      color: #4a5568;  
      width: 80%; 
      padding: 0.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      

      &:hover {
         background-color: #edf2f7;
      }
   }

   .btn{
      display: flex;
      gap: 0.5rem; 
      
      margin: auto;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem; 
      font-weight: 600; 
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); 
      border-radius: 1rem; 
      cursor: pointer;
   }

`

export const ModalErrorStyle = styled.div`
   .containerText{
      text-align: center;
      width: 14rem;
   }
   .icon-error{
      margin: 0 auto;
      color: #CC3300; 
      font-size: 50px;
   }

   .title{
   font-size: 1.125rem; 
   font-weight: 900; 
   color: #CC3300; 
   margin-bottom: 10px;
   }

   .descricao{
   color: #a0aec0; 
   font-size: 0.875rem; 
   margin-bottom: 10px;
   }

   .btnCancelar{
      background-color: #f7fafc; 
      color: #4a5568;  
      width: 80%; 
      padding: 0.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      

      &:hover {
         background-color: #edf2f7;
      }
   }

   .btn{
      display: flex;
      gap: 0.5rem; 
      
      margin: auto;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem; 
      font-weight: 600; 
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); 
      border-radius: 1rem; 
      cursor: pointer;
   }


`

export const AlternativesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    button {
        padding: 0.5rem 1rem;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            background-color: #0056b3;
        }
    }
`;

export const ModalContent = styled.div<{ open: boolean }>`
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    padding: 2.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: all 0.3s ease;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(1.25)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    width: 90%;
    max-width: 600px;
    height: 300px; 
    h3{
      margin-bottom: 20px;
      
    }
    img{
        width: 100px;
        height: 100px;
    }
`;

export const ModalOverlayQuiz = styled.div<{ open: boolean }>`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.2)" : "transparent")};
    transition: background-color 0.3s ease;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;