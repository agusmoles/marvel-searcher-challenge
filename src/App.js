import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home"));
const ComicSection = React.lazy(() =>
    import("./components/ComicSection/ComicSection")
);
const Favorites = React.lazy(() => import("./components/Favorites/Favorites"));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    <Route path="/favorites" component={Favorites}></Route>
                    <Route
                        path="/comics/:comicId"
                        component={ComicSection}
                    ></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
