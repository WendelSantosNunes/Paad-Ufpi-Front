import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --fonts: #EEE;
        --background: #EEE;
        --background-header-footer-login: #222831;
        --button: #222831;
        --button-hover: #484B4D;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px transparent;
    }

    html{
        width: auto;
    }

    body{
        max-width: 100vw;
        height: 100vh;
        background-color: #EEEEEE;
    }

    ul,
    li {
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    a{
        text-decoration: none;
        padding: 0;
        margin: 0;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .container {
        max-width: 70rem;
        padding: 0rem 1rem;
        margin: 0 auto;
    }

`
