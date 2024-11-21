"use client"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

   * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        background-color: #F9F9F9;
        min-height: 100vh; 
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        font-family: 'Chakra Petch', sans-serif;
    }

    main {
        
        flex-grow: 1;
    }
`

export default GlobalStyle;
