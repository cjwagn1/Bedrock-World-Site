import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { IPlayer } from "./PlayerList";

const Group: AnyStyledComponent = styled.div`
    padding-bottom: 10px;
`;
const Box: AnyStyledComponent = styled.div`
    background-color: #888888;
    display: flex;
    width: 200px;
    padding-bottom: 20px;
    height: 50px;
    align-items: center;
    padding: 5px;
`;
const Profile: AnyStyledComponent = styled.img`
    height: 40px;
    width: 40px;
`;
const Username: AnyStyledComponent = styled.div`
    padding-left: 20px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
`;
// const KickButton: AnyStyledComponent = styled.button`
//     width: 40px;
//     height: 20px;
//     display: block;
//     margin-bottom: 5px;
//     font-size: 10px;
//     text-align: center;
// `;
// const BanButton: AnyStyledComponent = styled.button`
//     width: 40px;
//     height: 20psx;
//     font-size: 10px;
//     display: block;
//     text-align: center;
// `;
// const ButtonGroup: AnyStyledComponent = styled.div`
//     padding-left: 20px;
//     font-size: 10px;
// `;

interface IPlayerProps {
    player: IPlayer;
    index: number;
    key: number;
}

export default (props: IPlayerProps) => {
    const { player }: any = props;

    return (
        <Group>
            <Box>
                <Profile src={player.profilePic} />
                <Username>{player.name}</Username>
                {/* <ButtonGroup>
                    <KickButton>Kick</KickButton> OPTIONAL
                    <BanButton>Ban</BanButton>
                </ButtonGroup> */}
            </Box>
        </Group>
    );
};
