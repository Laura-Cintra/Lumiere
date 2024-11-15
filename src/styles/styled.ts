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