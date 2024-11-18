import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-family: "Electrolize", sans-serif;
    margin-bottom: 20px;


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
export const TituloStyle = styled.h1`
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
    font-size: 45px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
`

export const SubTituloStyle = styled.h2`
    font-family: "Orbitron", sans-serif;
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
    }

    p{
        font-size: 38px;
        font-family: 'Kameron', serif ;
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
   font-family: 'Kameron', serif ;
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
        font-family: 'Kameron', serif;
        background-color: #D7BA58;
        border-radius: 15px;
        width: 43px;
        height: 20px;
        margin-left: 12px;
        margin-top: 10px;
   }

   h2{
    font-family: "Orbitron", sans-serif;
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
        font-family: 'Kameron', serif;
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
        font-family: "Orbitron", sans-serif;
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
        font-family: 'Kameron', serif;
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




