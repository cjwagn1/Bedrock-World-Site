import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import { ITab } from "./Nav";

interface ITabProps {
    tab: ITab;
    index: number;
    key: number;
}

export default (props: ITabProps) => {
    const { tab }: any = props;
    const location = useLocation();

    const active: any = {
        textDecoration: "none",
        color: "white",
    };

    if (location.pathname === tab.link) {
        active.color = "blue";
    } else {
        active.color = "white";
    }

    return (
        <Link style={active} className={tab.style} to={tab.link}>
            {tab.name}
        </Link>
    );
};
