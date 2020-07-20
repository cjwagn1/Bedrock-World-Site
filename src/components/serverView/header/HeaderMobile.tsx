import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Group: AnyStyledComponent = styled.div`
    width: 100%;
    padding: 10px;
`;
const HeaderText: AnyStyledComponent = styled.div`
    font-size: 40px;
`;

export default () => {
    return (
        <Group>
            <HeaderText>my-server / NODE</HeaderText>
        </Group>
    );
};
