import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider, onRedirectCallback } from "./utils/react-auth0-wrapper";
import { config } from "./config";
import { StripeProvider } from "react-stripe-elements";
ReactDOM.render(
    <React.StrictMode>
        <StripeProvider apiKey="pk_test_12345">
            <Auth0Provider
                domain={"dev-5ji4z47r.auth0.com"}
                client_id={"6aG85hAkO8v8j3wGEnUbuZgZWPtSgEY4"}
                redirect_uri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
            >
                <App />
            </Auth0Provider>
        </StripeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
