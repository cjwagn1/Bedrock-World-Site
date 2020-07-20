import React from "react";
import PlayerList from "./PlayerList";

export default {
    title: "Player route",
    component: PlayerList,
};

export const withText = () => <PlayerList></PlayerList>;
