import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-family: "Electrolize", sans-serif;

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

export const HeroStyle = styled.section`

    background: url();
    background-size: cover;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 100px 20px;

    .hero-content{
        padding-top: 20px;
        padding-bottom: 80px;
        width: 75%;
        margin: 0 auto;
        background-color: rgba(0,0,0,0.5);
        border-radius: 50px;
    }

    .hero-content h1 {
        font-size: 2.5em;
        margin-bottom: 10px;
    }

    .hero-content p {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    .hero-content button {
        background-color: #D7BA58;
        border: none;
        margin-top: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 1.2em;
    }

    .hero-content button a{
        color: #fff;
        text-decoration: none;
    }

    .hero-content button:hover{
        background-color: #06303A;
    }
`

export const FooterStyle = styled.footer`

    margin-top: 30px;
    max-height: 184px;
    width: 100%;
    background-color: #5D98A4;
    text-align: center;
    font-family: "Electrolize", sans-serif;

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

// ===========================================================

import fundo from "@/assets/fundohero.png";

export const HomeStyle = styled.main`

  font-family: "Kameron", serif;

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
        font-family: "Orbitron", sans-serif;
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
`;