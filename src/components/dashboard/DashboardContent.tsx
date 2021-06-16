import React from "react";
// import styled, { AnyStyledComponent } from "styled-components";
import ServerList from "../serverList/ServerList";
import Account from "../account/Account";
import { Route, Switch } from "react-router-dom";

import "./dashboard.css";

const NotFound: React.FC<{}> = (): JSX.Element => {
    return <h1>You are lost!</h1>;
};
export default () => {
    return (
        <Switch>
            <Route path="/dashboard/servers" component={ServerList} />
            <Route path="/dashboard/account" component={Account} />
            <Route component={NotFound} />
        </Switch>
    );
};
