import React from "react";
import Configure from "./Configure";

export default {
    title: "Configure route",
    component: Configure,
};

export const withText = () => (
    <Configure title="Configure your server" onSubmit={() => {}}></Configure>
);
