import React from "react";
import styles from "./Selection.module.scss";

export interface Props {
    children: any;
}

export default (props: Props) => {
    return <div className={styles.selection}>{props.children}</div>;
};
