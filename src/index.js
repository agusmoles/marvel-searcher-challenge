import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import globalTheme from "./themes/globalTheme";
import lightTheme from "./themes/lightTheme";
import GlobalStyles from "./themes/globalStyles";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={globalTheme}>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
