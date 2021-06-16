import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { NavButton } from "./DashboardNavButton";

// const Constraint: AnyStyledComponent = styled.div`
//     display: flex;
//     height: 100%;
//     max-width: 1200px;
//     margin: auto;
// `;
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
const Side: AnyStyledComponent = styled.ul`
    padding-left: 0;
    padding-top: 70px;
`;
// const Img = styled.img`
//     height: 40px;
//     width: 40px;
//     margin-right: 10px;
//     user-select: none;
// `;
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
            <Side>
                <NavButton
                    image="https://img.icons8.com/material-outlined/24/000000/data-configuration.png"
                    link="/dashboard/configure"
                    text="Configure"
                />
                <NavButton
                    image="https://img.icons8.com/fluent-systems-filled/24/000000/edit-property.png"
                    link="/dashboard/servers"
                    text="Servers"
                />
                <NavButton
                    image="https://img.icons8.com/material-outlined/24/000000/data-configuration.png"
                    link="/dashboard/account"
                    text="Account"
                />
                <NavButton
                    image="https://img.icons8.com/material-outlined/24/000000/data-configuration.png"
                    link="/dashboard/meow"
                    text="Permissions"
                />
            </Side>
        </div>
    );
};
