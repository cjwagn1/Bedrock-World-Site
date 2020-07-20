import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { useWindowSize } from "react-use";
import Nav from "./nav/Nav";
import "../../App.css";
import HeaderMain from "./header/Header";
import Chat from "./chat/Chat";
import PlayerList from "./player/PlayerList";
import Configure from "./configure/Configure";
import NavTest from "./nav/NavMobile";

const Grid: AnyStyledComponent = styled.div`
    height: 100%;
    display: grid;
    max-width: 1000px;
    grid-template-columns: 80px 80px repeat(14, 1fr);
    grid-template-rows: 155px auto;
    grid-template-areas:
        "h h h h h h h h h h h h h h h h"
        "m m c c c c c c c c c c c c c c";

    @media (max-width: 800px) {
        margin: 0;
        display: grid;
        width: 100%;
        height: 100vh;
        grid-template-columns: 100%;
        grid-template-rows: 155px auto;
    
`;

//---------------------------------------
const Content: AnyStyledComponent = styled.div`
    grid-area: c;
    width: 100%;
    background-color: #333333;
    color: white;
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
        display: none;
    }
`;
const ContentMobile: AnyStyledComponent = styled.div`
    width: 100%;
    background-color: #333333;
    display: flex;
    justify-content: center;
`;

//---------------------------------------
const Menu: AnyStyledComponent = styled.div`
    grid-area: m;

    background-color: #333333;
    @media (max-width: 800px) {
        display: none;
    }
`;
const MenuMobile: AnyStyledComponent = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        background-color: pink;
        height: 100vh;
        width: 100%;
    }
`;

//---------------------------------------
const Header: AnyStyledComponent = styled.div`
    grid-area: h;
    color: white;
    background-color: #333333;
    @media (max-width: 800px) {
    }
`;
const HeaderMobile: AnyStyledComponent = styled.div`
    display: none;
    @media (min-width: 800px) {
        grid-area: hm;
        background-color: yellow;
        display: block;
    }
`;

const ServerViewContent = () => {
    return (
        <Switch>
            <Route exact={true} path="/configure" component={Configure} />
            <Route path="/players" component={PlayerList} />
            <Route path="/chat" component={Chat} />
            {/* <Route exact={true} path="/" component={Stats} /> */}
            {/* <Route component={NotFound} /> */}
        </Switch>
    );
};

export default () => {
    const location = useLocation();
    const { width, height } = useWindowSize();

    if (location.pathname !== "/" && width <= 800) {
        return (
            <Grid>
                <Header>
                    <HeaderMain />
                </Header>
                <ContentMobile>
                    <ServerViewContent />
                </ContentMobile>
            </Grid>
        );
    } else {
        return (
            <Grid>
                <Header>
                    <HeaderMain />
                </Header>
                <Content>
                    <ServerViewContent />
                </Content>
                <Menu>
                    <Nav />
                </Menu>
                <MenuMobile>
                    <NavTest />
                </MenuMobile>
            </Grid>
        );
    }
};
