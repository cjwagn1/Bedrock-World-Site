import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useWindowSize } from "react-use";
import DashboardNav from "./DashboardNav";
import DashboardSidebar from "./DashboardSidebar";
import { scaleDown as Menu } from "react-burger-menu";
import DashboardContent from "./DashboardContent";
import "./dashboard.css";
const Grid: AnyStyledComponent = styled.div`
    height: 100%;
    display: grid;
    width: 100%;
    grid-template-columns: 80px 80px repeat(14, 1fr);
    grid-template-rows: 70px auto;
    grid-template-areas:
        "m m h h h h h h h h h h h h h h"
        "m m c c c c c c c c c c c c c c";

    @media (max-width: 1030px) {
        grid-template-areas:
            "h h h h h h h h h h h h h h h h"
            "c c c c c c c c c c c c c c c c";
    }
`;

const Nav: AnyStyledComponent = styled.div`
    grid-area: h;
    color: white;
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #242424;
`;
const Content: AnyStyledComponent = styled.div`
    grid-area: c;
    height: 100%;
    width: 100%;

    background-color: #292929;
`;
const Sidebar: AnyStyledComponent = styled.div`
    grid-area: m;
    height: 100vh;
    width: 180px;
    position: fixed;
    background-color: orange;
`;
const Constraint: AnyStyledComponent = styled.div`
    height: 100%;
    max-width: 2000px;

    justify-content: center;
    align-items: center;
`;
const Center: AnyStyledComponent = styled.div`
    justify-content: center;
    display: flex;
`;
export default () => {
    const { width } = useWindowSize();
    const content = (
        <div>
            <Grid>
                <Nav>
                    <DashboardNav />
                </Nav>
                <Sidebar>
                    <DashboardSidebar />
                </Sidebar>
                <Content>
                    <Center>
                        <Constraint>
                            <DashboardContent />
                        </Constraint>
                    </Center>
                </Content>
            </Grid>
        </div>
    );
    const mobileContent = (
        <div>
            <Grid>
                <Nav>
                    <DashboardNav />
                </Nav>
                <Menu width={180}>
                    <Sidebar>
                        <DashboardSidebar />
                    </Sidebar>
                </Menu>
                <Content>
                    {" "}
                    <DashboardContent />
                </Content>
            </Grid>
        </div>
    );
    if (width <= 1030) {
        return <div>{mobileContent}</div>;
    } else {
        return <div>{content}</div>;
    }
};
