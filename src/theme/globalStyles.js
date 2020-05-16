import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
    }

    font-family: {
        font-family: -apple-system, BlinkMacSystemFont, "Roboto";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalStyle;