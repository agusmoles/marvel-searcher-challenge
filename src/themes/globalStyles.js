import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        background: ${({ theme }) => theme.colors.background};
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${({ theme }) => theme.colors.textColour}
    }

`;

export default GlobalStyle;
