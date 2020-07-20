import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./utils/react-auth0-wrapper";
import history from "./utils/history";
import Account from "./components/account/Account";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "../src/components/landingPage/Nav";
// import Server from "../src/components/serverView/ServerView";

const MainContent = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute path="/account" component={Account} />
        </Switch>
    );
};

export default () => {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Router history={history}>
            <div>
                <Nav />

                <div className="App">
                    <MainContent />
                </div>
            </div>
        </Router>
    );
};
