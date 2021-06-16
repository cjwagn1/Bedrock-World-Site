import React from "react";
import { Route, Switch } from "react-router-dom";

import AccountHeader from "./AccountHeader";
import Billing from "../billing/Billing";

const AccountContent = () => {
    return (
        <Switch>
            <Route
                path="/dashboard/account/billing"
                exact={true}
                component={Billing}
            />
            <Route
                exact={true}
                path="/dashboard/account/billing"
                component={Billing}
            />
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
