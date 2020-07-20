import React from "react";
import ServerBuilder from "./ServerBuilder";

export default {
    title: "ServerBuilder",
    component: ServerBuilder,
};

export const withText = () => (
    <ServerBuilder title="Build Your Server" onSubmit={() => {}} />
);
