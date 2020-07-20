import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import AccountTabButton from "./AccountButton";
const Constraint: AnyStyledComponent = styled.div`
    display: flex;
    height: 100%;
    color: white;
    max-width: 1200px;
    margin-top: 70px;
    margin-left: auto;
    flex-direction: column;
    margin-right: auto;
`;

const Title: AnyStyledComponent = styled.div`
    font-size: 55px;
    font-weight: bold;
    padding-top: 20px;
`;
const Center: AnyStyledComponent = styled.div`
    display: flex;
    justify-content: center;
    horizontal-content: center;
    text-align: center;
`;
const NavGroup: AnyStyledComponent = styled.div`
    border-bottom: 1px solid black;
`;

const tabs: any = [
    {
        id: "1",
        name: "Billing",

        link: "/account/billing",
    },
    {
        id: "2",
        name: "Servers",

        link: "/account/servers",
    },
];

export interface IAccountTab {
    name: string;
    link: string;
    id: number;
}

export default () => {
    const tabList: JSX.Element[] = tabs.map(
        (tab: IAccountTab, index: number) => (
            <AccountTabButton
                tab={tab}
                index={index}
                key={tab.id}
            ></AccountTabButton>
        )
    );
    return (
        <Constraint>
            <Center>
                <Title>My Account</Title>
            </Center>
            <NavGroup>{tabList}</NavGroup>
        </Constraint>
    );
};
