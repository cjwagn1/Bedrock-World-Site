import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled, { AnyStyledComponent } from "styled-components";
import Button from "../common/Button";
import Profile from "../profile/Profile";

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
const domain: string = `${process.env.REACT_APP_AUTH0_DOMAIN}`;

export default () => {
    const [message, setMessage] = useState("");
    const { getAccessTokenSilently } = useAuth0();

    // const callApi = async () => {
    //     try {
    //         const response = await fetch(
    //             `http://localhost:9002/server/delete/3`,
    //             {
    //                 method: "post",
    //             }
    //         );

    //         const responseData = await response.json();

    //         setMessage(responseData);
    //     } catch (error) {
    //         setMessage(error.message);
    //     }
    // };

    const callSecureApi = async () => {
        // console.log("hello");
        try {
            console.log(
                "%c hello",
                "color:white;font-size:2em;background:#ff00ff;font-family:'Comic Sans MS'"
            );
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "read:current_user",
            });
            console.log(accessToken);
            console.log("noobs");
            const response = await fetch(
                `http://localhost:9002/server/delete/3`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    method: "post",
                }
            );

            const responseData = await response.json();

            setMessage(responseData);
        } catch (error) {
            setMessage(error.message);
            // console.log("hello");
        }
    };

    return (
        <Overview>
            <Spacer></Spacer>
            <Content>
                <CreateServerButton>
                    <Button onClick={callSecureApi} style={{ float: "right" }}>
                        Create server
                    </Button>
                    {JSON.stringify(message, null, 2)}
                </CreateServerButton>
                <Name>
                    <Profile />
                </Name>
            </Content>
        </Overview>
    );
};
