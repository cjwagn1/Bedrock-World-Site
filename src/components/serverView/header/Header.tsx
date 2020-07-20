import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Group: AnyStyledComponent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
const ServerInfoGroup: AnyStyledComponent = styled.div`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-left: 20px;
    bottom: 10px;
    position: absolute;
    height: auto;
    width: 100%;
`;
const HeaderText: AnyStyledComponent = styled.div`
    font-size: 40px;
    padding-left: 10px;
    font-weight: bold;
    @media (max-width: 365px) {
        font-size: 30px;
    }
`;
const HeaderGroup: AnyStyledComponent = styled.div`
    padding-left: 10px;
    display: flex;
    flex: 1;
`;
const HeaderImage: AnyStyledComponent = styled.img`
    height: 50px;
    width: 50px;
    margin-top: 20px;
    border-radius: 50px;
    @media (max-width: 365px) {
        margin-top: 10px;
    }
`;
const HeaderNodeText: AnyStyledComponent = styled.div`
    padding-left: 13px;
    margin-top: -5px;
`;

const ServerStats: AnyStyledComponent = styled.div`
    display: flex;
    padding: 5px;
    justify-content: space-between;
    flex: 1;
    max-width: 400px;
`;

const IPAdress: AnyStyledComponent = styled.div`
    display: inline-block;
    font-weight: bold;
`;
const Port: AnyStyledComponent = styled.div`
    display: inline-block;
    font-weight: bold;
`;
const Status: AnyStyledComponent = styled.div`
    display: inline-block;
    font-weight: bold;
`;
const OnOffGroup: AnyStyledComponent = styled.div`
    margin-top: 40px;
    padding-right: 40px;
`;
const OnOff: AnyStyledComponent = styled.button`
    height: 50px;
    width: 50px;
    background-color: green;
    border-radius: 50px;
    font-size: 20px;
    border: none;
    color: white;
`;
const Flex: AnyStyledComponent = styled.div`
    display: flex;
`;
export default () => {
    return (
        <Group>
            <Flex>
                <HeaderGroup>
                    <HeaderImage src="https://i.imgur.com/ApYhtIW.jpg?1" />
                    <div>
                        <HeaderText>my-server</HeaderText>
                        <HeaderNodeText>In NODE 1</HeaderNodeText>
                    </div>
                </HeaderGroup>
                <OnOffGroup>
                    <OnOff>On</OnOff>
                </OnOffGroup>
            </Flex>
            <ServerInfoGroup>
                <ServerStats>
                    <IPAdress>IP: 1.1.1.1</IPAdress>
                    <Port>PORT: 55555</Port>

                    <Status>Status: Running</Status>
                </ServerStats>
            </ServerInfoGroup>
        </Group>
    );
};
