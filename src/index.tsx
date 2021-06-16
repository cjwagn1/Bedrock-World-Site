import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import history from "./utils/history";
import * as serviceWorker from "./serviceWorker";
// import { Auth0Provider, onRedirectCallback } from "./utils/react-auth0-wrapper";
import { Auth0Provider } from "@auth0/auth0-react";

// import { StripeProvider } from "react-stripe-elements";

const domain: string = `${process.env.REACT_APP_AUTH0_DOMAIN}`;
const client: string = `${process.env.REACT_APP_AUTH0_CLIENT_ID}`;
const audience: string = "https://ads-api";

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Auth0Provider
                domain={domain}
                clientId={client}
                redirect_uri={window.location.origin}
                // onRedirectCallback={onRedirectCallback}
                audience={audience}
            >
                <App />
            </Auth0Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
