import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
    const [product] = React.useState({
        name: "Test",
        price: 100,
    });

    async function handleToken(token: Token) {
        const response = await axios.post("http://localhost:3000/checkout", {
            token,
            product,
        });
        const { status } = response.data;
        if (status == "success") {
            toast("Success! Check emails for details. ", { type: "success" });
        } else {
            toast("something went wrong", { type: "error" });
        }
    }
    return (
        <div>
            <p>hello</p>
            <StripeCheckout
                stripeKey="pk_test_Cfiz7FtYTZyxvXjwrnIe8Tul00Waq24mLf"
                token={handleToken}
                amount={product.price * 100}
                name="Test"
                billingAddress
            />
        </div>
    );
};
