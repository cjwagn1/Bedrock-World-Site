import React from "react";
import styles from "./ServerList.module.scss";
import Server from "./Server";

export default () => {
    return (
        <div className={styles.serverList}>
            <div className={styles.header}>Bedrock Servers</div>
            <div className={styles.grid}>
                <Server />
                <Server />
            </div>
        </div>
    );
};
