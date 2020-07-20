import React from "react";
import { addDecorator } from "@storybook/react";

addDecorator((storyFn) => (
    <div style={{ fontFamily: "Roboto, Ubuntu, sans-serif", color: "white" }}>
        {storyFn()}
    </div>
));
