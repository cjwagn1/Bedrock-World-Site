import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import TabButton from "./TabButton";

const Group: AnyStyledComponent = styled.div`
    width: 100%;

    height: 100%;
    padding-left: 20px;
    display: flex;

    padding-top: 20px;
`;

const Side: AnyStyledComponent = styled.ul`
    padding-left: 0;
    display: flex;
    flex-direction: column;
`;

export interface ITab {
    name: string;
    link: string;
    style: string | null;
    id: number;
}

const tabs: any = [
    {
        id: "1",
        name: "Players",
        style: null,
        link: "/players",
    },
    {
        id: "2",
        name: "Chat",
        style: null,
        link: "/chat",
    },
    {
        id: "3",
        name: "Configure",
        style: null,
        link: "/configure",
    },
];

export default () => {
    const tabList: JSX.Element[] = tabs.map((tab: ITab, index: number) => (
        <TabButton tab={tab} index={index} key={tab.id}></TabButton>
    ));

    return (
        <Group>
            <Side>{tabList}</Side>
        </Group>
    );
};
