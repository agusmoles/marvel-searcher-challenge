import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home"));
const Favorites = React.lazy(() => import("./components/Favorites/Favorites"));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
