import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const ChatBox: AnyStyledComponent = styled.div`
    height: 500px;
    width: 500px;
    background-color: black;
`;

export default () => {
    return (
        <div>
            <ChatBox>INSERT CHAT HERE</ChatBox>
        </div>
    );
};
