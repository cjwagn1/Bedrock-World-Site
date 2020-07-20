import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import AccountHeader from "./AccountHeader";
import Billing from "../billing/Billing";

const AccountContent = () => {
    return (
        <Switch>
            <Route path="/account" exact={true} component={Billing} />
            <Route exact={true} path="/account/billing" component={Billing} />
            <Route path="/server" />
        </Switch>
    );
};

export default () => {
    return (
        <div>
            <AccountHeader />
            <AccountContent />
        </div>
    );
};
