import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRoute = ({
    component: Component,
    path,
    ...rest
}: {
    component: any;
    path: any;
}) => {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (isLoading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: window.location.pathname },
            });
        };
        fn();
    }, [isLoading, isAuthenticated, loginWithRedirect, path]);

    const render = (props: any) =>
        isAuthenticated === true ? <Component {...props} /> : null;

    return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
