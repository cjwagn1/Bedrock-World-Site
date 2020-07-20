import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Profile from "../profile/Profile";
import Button from "../common/Button";
const Overview: AnyStyledComponent = styled.div`
    display: flex;
    height: 70px;
`;
const Spacer: AnyStyledComponent = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    padding: 20px;
    align-items: center;
`;
const Content: AnyStyledComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    align-items: center;
`;
const CreateServerButton: AnyStyledComponent = styled.div`
    display: inline-block;
    padding: 30px;
`;
const Name: AnyStyledComponent = styled.div`
    display: inline-block;
`;

export default () => {
    return (
        <Overview>
            <Spacer></Spacer>
            <Content>
                <CreateServerButton>
                    <Button style={{ float: "right" }}>Create server</Button>
                </CreateServerButton>
                <Name>Carter Wagner</Name>
            </Content>
        </Overview>
    );
};
