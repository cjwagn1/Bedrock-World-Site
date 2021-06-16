import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../profile/Profile";
const Navguide: AnyStyledComponent = styled.nav`
    background-color: #21212199;
    height: 70px;
    width: 100%;
    backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    z-index: 3;
    @supports not (backdrop-filter: blur(20px)) {
        background-color: 292929ef;
    }
`;
const Constraint: AnyStyledComponent = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: auto;
`;
const Overview: AnyStyledComponent = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
`;
const List: AnyStyledComponent = styled.li`
    padding: 20px;
    list-style-type: none;
`;
const LinkStyle: AnyStyledComponent = styled.a`
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom-color: white;
    }
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    user-select: none;
    cursor: pointer;
    @media (max-width: 1024px) {
        display: none;
    }
`;
const HomeLinkStyle: AnyStyledComponent = styled.a`
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom-color: white;
    }
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    user-select: none;
    cursor: pointer;
`;
const Text: AnyStyledComponent = styled.div`
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom-color: white;
    }
    transition: all 0.1s ease-in-out;

    @media (max-width: 550px) {
        font-size: 20px;
    }
    @media (max-width: 510px) {
        font-size: 17px;
    }
    @media (max-width: 490px) {
        font-size: 14px;
    }
`;
const Right: AnyStyledComponent = styled.div`
    display: flex;
    height: 70px;

    justify-content: center;
    align-items: center;
`;

export default () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Navguide>
            <Constraint>
                <Overview>
                    <List>
                        <HomeLinkStyle>
                            <Link style={{ textDecoration: "none" }} to="/">
                                <Text>Bedrock World</Text>
                            </Link>
                        </HomeLinkStyle>
                    </List>
                </Overview>
                <Right>
                    <List>
                        <LinkStyle>Hosting</LinkStyle>
                    </List>
                    <List>
                        <LinkStyle>Console</LinkStyle>
                    </List>
                    <List>
                        <LinkStyle>Discord</LinkStyle>
                    </List>
                    <List>
                        {!isAuthenticated && (
                            <Button
                                style={{ float: "right" }}
                                onClick={() => loginWithRedirect({})}
                            >
                                LOGIN
                            </Button>
                        )}
                        {isAuthenticated && <Profile />}
                    </List>
                </Right>
            </Constraint>
        </Navguide>
    );
};
