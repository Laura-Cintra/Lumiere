"use client"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Electrolize&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Luckiest+Guy&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap');

   * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        min-height: 100vh; 
        display: flex;
        flex-direction: column; 
    }

    main {
        flex-grow: 1; 
    }


`

export default GlobalStyle;
