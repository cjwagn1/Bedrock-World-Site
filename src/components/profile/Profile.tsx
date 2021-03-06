import React from "react";
import styled from "styled-components";

import { useAuth0 } from "@auth0/auth0-react";
import Options from "./ProfileOptions";

const DropdownWrapper = styled.div`
    position: relative;
`;

const Name = styled.div`
    border: none;
    font-size: 17px;
    font-weight: bold;
    background: none;
    color: white;
    margin-right: 1em;
    margin-left: 0.5em;
    &:hover {
        cursor: pointer;
    }
`;

const Picture = styled.img`
    min-width: 30px;
    max-width: 30px;
    min-height: 30px;
    max-height: 30px;
    border-radius: 50%;
`;

const ProfileDisplay = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
`;

const TriangleDown = styled.div`
    height: 0;
    width: 0;

    border-top: 4px solid white;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
`;

const TriangleRight = styled.div`
    height: 0;
    width: 0;
    margin-right: 4px;
    border-top: 4px solid transparent;
    border-left: 4px solid white;
    border-bottom: 4px solid transparent;
`;

export default () => {
    const { isLoading, user } = useAuth0();

    const [down, setDown] = React.useState(false);

    return (
        <DropdownWrapper>
            <ProfileDisplay
                onClick={() => {
                    if (down) {
                        setDown(false);
                    } else {
                        setDown(true);
                    }
                }}
            >
                {!isLoading && (
                    <Picture src={user.picture} alt="Profile"></Picture>
                )}
                {!isLoading && <Name>{user.name}</Name>}
                {down ? <TriangleRight /> : <TriangleDown />}
            </ProfileDisplay>
            {down && <Options />}
        </DropdownWrapper>
    );
};
