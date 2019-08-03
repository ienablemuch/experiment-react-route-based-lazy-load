import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Home = lazy(() => import("./routes/Home" /* webpackChunkName: "home" */));

const About = lazy(() =>
    import("./routes/About" /* webpackChunkName: "about" */)
);

const App = () => (
    <>
        <Router>
            <span>
                <Link to="/">Home</Link>
            </span>
            |
            <span>
                <Link to="/about">About</Link>
            </span>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    </>
);

export default App;
