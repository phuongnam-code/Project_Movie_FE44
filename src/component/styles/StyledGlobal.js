import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size:18px;
    }

    a {
        text-decoration: none;
        color:#000;
    }
`;
