import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import "./Nav.css";
import TabButton from "./TabButton";
import { ITab } from "./Nav";

const Grid: AnyStyledComponent = styled.div`
    display: grid;
    font-size: 20px;
    grid-gap: 5px;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 120px;
    width: 100%;
    grid-auto-flow: dense;
    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-auto-rows: 100px;
    }
`;

const tabsMobile: any = [
    {
        id: "3",
        name: "Configure",
        style: "ItemBig",
        link: "/configure",
    },
    {
        id: "1",
        name: "Players",
        style: "ItemNormal",
        link: "/players",
    },
    {
        id: "2",
        name: "Chat",
        style: "ItemNormal",
        link: "/chat",
    },
];

export default () => {
    const tabList: JSX.Element[] = tabsMobile.map(
        (tab: ITab, index: number) => (
            <TabButton tab={tab} index={index} key={tab.id}></TabButton>
        )
    );
    return <Grid>{tabList}</Grid>;
};
