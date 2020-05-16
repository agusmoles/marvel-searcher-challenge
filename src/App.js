import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import globalTheme from "./themes/globalTheme";
import lightTheme from "./themes/lightTheme";

const Home = React.lazy(() => import("./components/Home/Home"));

const App = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <ThemeProvider theme={lightTheme}>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default App;
