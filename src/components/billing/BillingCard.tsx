import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import CreditCardForm from "./CreditCardForm";
const Box: AnyStyledComponent = styled.div`
    height: 250px;
    width: 500px;
    background-color: #5c5c5c;
    border-radius: 15px;
    padding: 15px;
`;
const Title: AnyStyledComponent = styled.div`
    font-size: 20px;
    border-bottom: 1px solid black;
`;
const SubmitButton: AnyStyledComponent = styled.button`
    white-space: nowrap;
    border: 0;
    outline: 0;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background-color: #6772e5;
    text-decoration: none;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 10px;
    &:hover {
        color: #fff;
        cursor: pointer;
        background-color: #7795f8;
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
            0 3px 6px rgba(0, 0, 0, 0.08);
    }
`;
export default () => {
    return (
        <Box>
            <Title>Connect Card</Title>
            <CreditCardForm />
            <SubmitButton>Add card</SubmitButton>
        </Box>
    );
};
