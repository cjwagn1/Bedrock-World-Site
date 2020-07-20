import React from "react";
import styles from "./SelectionOption.module.scss";

export interface Props {
    children: any;
    onClick?: () => void;
    selected?: boolean;
}

export default (props: Props) => {
    return (
        <div
            className={
                styles.selectionOption +
                " " +
                (props.selected && styles.selected)
            }
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};
