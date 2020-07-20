import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import "./account.css";
import { IAccountTab } from "./AccountHeader";

interface IAccountTabProps {
    tab: IAccountTab;
    index: number;
    key: number;
}

export default (props: IAccountTabProps) => {
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
        <Link style={active} className="accountTab" to={tab.link}>
            {tab.name}
        </Link>
    );
};
