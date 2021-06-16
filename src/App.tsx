import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import history from "./utils/history";
// import Account from "./components/account/Account";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
// import Nav from "../src/components/landingPage/Nav";
// import ServerView from "./components/serverView/ServerView";
// import ExternalApi from "./utils/testapi";
// import Server from "../src/components/serverView/ServerView";

const MainContent = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="App">
                <MainContent />
            </div>
        </div>
    );
};
