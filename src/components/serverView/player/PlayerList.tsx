import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Player from "./Player";

const Box: AnyStyledComponent = styled.div`
    background-color: #333333;
    display: flex;
    width: 220px;
    height: auto;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
`;
const Center: AnyStyledComponent = styled.div`
    margin: auto;
`;

export interface IPlayer {
    profilePic: string;
    name: string;
    id: number;
}

const players: any = [
    {
        id: "1",
        name: "cjwagn1",
        profilePic:
            "https://i.pinimg.com/originals/85/78/bf/8578bfd439ef6ee41e103ae82b561986.png",
    },
    {
        id: "2",
        name: "BrandonDyer64",
        profilePic:
            "https://i.pinimg.com/originals/85/78/bf/8578bfd439ef6ee41e103ae82b561986.png",
    },
];

export default () => {
    const playerList: JSX.Element[] = players.map(
        (player: IPlayer, index: number) => (
            <Player player={player} index={index} key={player.id}></Player>
        )
    );
    return (
        <Box>
            <Center>{playerList}</Center>
        </Box>
    );
};
