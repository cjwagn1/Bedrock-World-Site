import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import DashboardNav from "./DashboardNav";
import DashboardSidebar from "./DashboardSidebar";

const Grid: AnyStyledComponent = styled.div`
    height: 100%;
    display: grid;
width: 100%;
    grid-template-columns: 80px 80px repeat(14, 1fr);
    grid-template-rows: 70px auto;
    grid-template-areas:
        "m m h h h h h h h h h h h h h h"
        "m m c c c c c c c c c c c c c c";

    @media (max-width: 800px) {
        margin: 0;
        display: grid;
        width: 100%;
        height: 100vh;
        grid-template-columns: 100%;
        grid-template-rows: 155px auto;
    
`;

const Nav: AnyStyledComponent = styled.div`
    grid-area: h;
    color: white;
    height: 70px;
    background-color: #242424;
`;
const Content: AnyStyledComponent = styled.div`
    grid-area: c;
    background-color: #292929;
`;
const Sidebar: AnyStyledComponent = styled.div`
    grid-area: m;
    height: 100vh;
    background-color: orange;
`;
export default () => {
    return (
        <Grid>
            <Nav>
                <DashboardNav />
            </Nav>
            <Sidebar>
                <DashboardSidebar />
            </Sidebar>
            <Content></Content>
        </Grid>
    );
};
