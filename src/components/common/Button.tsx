import React from "react";
import styles from "./Button.module.scss";

export interface Props {
    children: any;
    href?: string;
    onClick?: () => any;
    style?: any;
    className?: string;
}

export default (props: Props) => {
    return (
        <a
            className={`${styles.button} ${props.className}`}
            href={props.href || ""}
            onClick={(e) => {
                if (!props.href) e.preventDefault();
                props.onClick && props.onClick();
            }}
            style={props.style}
        >
            {props.children}
        </a>
    );
};
