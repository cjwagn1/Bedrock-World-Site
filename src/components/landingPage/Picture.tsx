import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Mine from "../landingPage/minecraft.png";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import Button from "../common/Button";

const Background: AnyStyledComponent = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-size: cover;
    background-position: center;
    background-image: url(${Mine});
    z-index: 2;
`;

const Box: AnyStyledComponent = styled.div`
    display: flex;
    margin: auto;
    border-radius: 6px;
    z-index: 0;
    flex-direction: column;
    background-color: black;
    padding: 50px;
    backdrop-filter: blur(20px);
    background-color: #21212199;
    transition: all 0.2s ease-in-out;
    @supports not (backdrop-filter: blur(20px)) {
        background-color: #292929ef;
    }
    @media (max-width: 800px) {
        padding: 30px;
    }
    @media (max-width: 600px) {
        padding: 20px;
    }
    @media (max-width: 400px) {
        padding: 15px;
    }
`;

const List: AnyStyledComponent = styled.div`
    display: flex;

    align-items: center;
    color: white;
    justify-content: space-around;
    width: auto;
    height: auto;
`;
const Item: AnyStyledComponent = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 800px) {
        font-size: 15px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }
    @media (max-width: 400px) {
        font-size: 10px;
    }
`;

const Title: AnyStyledComponent = styled.div`
    display: flex;
    color: white;
    font-size: 50px;
    margin: auto;
    padding-bottom: 50px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 800px) {
        font-size: 30px;
    }
    @media (max-width: 600px) {
        font-size: 20px;
    }
    @media (max-width: 400px) {
        font-size: 15px;
    }
`;

export default () => {
    return (
        <Background>
            <Box>
                <Title>Design your Bedrock server</Title>
                <List>
                    <Item>
                        <Icon
                            path={mdiStar}
                            size={0.8}
                            title="Remove"
                            color="#2196f3"
                        />
                        Fast
                    </Item>
                    <Item>
                        <Icon
                            path={mdiStar}
                            size={0.8}
                            title="Remove"
                            color="#2196f3"
                        />
                        IOS and Android support
                    </Item>
                    <Item>
                        <Icon
                            path={mdiStar}
                            size={0.8}
                            title="Remove"
                            color="#2196f3"
                        />
                        Windows 10
                    </Item>
                </List>
                <Button style={{ float: "right", width: "100%" }}>
                    GET STARTED NOW
                </Button>
            </Box>
        </Background>
    );
};
