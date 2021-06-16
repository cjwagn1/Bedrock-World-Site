import React from "react";
import styles from "./Server.module.scss";

export default () => {
    console.log(styles);
    return (
        <div className={styles.server}>
            <div className={styles.icon} />
            <div className={styles.name}>Server Name</div>
            <div className={styles.ip}>167.99.189.7</div>
            <div className={styles.elipsis}>...</div>
        </div>
    );
};
