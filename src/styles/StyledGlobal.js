import { createGlobalStyle } from "styled-components";
import pixel from "../component/images/pixel.png";

export const StyledGlobal = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size:18px;
        // background:rgb(242 242 238);
        background-image: url(${pixel});
    }

    a {
        text-decoration: none;
        color:#000;
    }
    ul{
        margin:0;
        padding: 0;
        border:none;
    }
    li{
        list-style:none;
        cursor: pointer;
        border:none;
    }
    p{
        margin: 0;
    }
`;
