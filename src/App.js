import React from "react";
import { Switch, Route } from "react-router-dom";


const App = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default App;
