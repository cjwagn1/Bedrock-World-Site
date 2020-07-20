import React from "react";

import styled, { AnyStyledComponent } from "styled-components";
import BillingCard from "./BillingCard";
const Constraint: AnyStyledComponent = styled.div`
    display: flex;
    height: 100%;
    color: white;

    max-width: 1200px;
    padding: 20px;
    margin-left: auto;
    flex-direction: column;
    margin-right: auto;
`;

export default () => {
    return (
        <Constraint>
            <BillingCard />
        </Constraint>
    );
};
