import React from "react";
import { CardElement, Elements } from "react-stripe-elements";
import styled, { AnyStyledComponent } from "styled-components";
import "./Billing.css";

const Form: AnyStyledComponent = styled.form`
    font-size: 20px;
`;
export default () => {
    return (
        <Elements>
            <Form>
                <label>
                    <CardElement />
                </label>
            </Form>
        </Elements>
    );
};
