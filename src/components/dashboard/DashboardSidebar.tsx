import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
const Constraint: AnyStyledComponent = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: auto;
`;
const HomeLinkStyle: AnyStyledComponent = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    color: white;
    font-family: "Poppins", sans-serif;

    transition: all 0.2s ease-in-out;

    user-select: none;
    cursor: pointer;
`;
const Text: AnyStyledComponent = styled.div`
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom-color: white;
    }
    transition: all 0.1s ease-in-out;
`;
export default () => {
    return (
        <div>
            <HomeLinkStyle>
                <Text>Bedrock World</Text>
            </HomeLinkStyle>
        </div>
    );
};
