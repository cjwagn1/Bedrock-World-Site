import React, { useState } from "react";
import styles from "./Toaster.module.scss";
import { subscribe, ToastType } from "../../services/toaster";

export default () => {
    const [toasts, setToasts] = useState(
        [] as { type: ToastType; content: string }[]
    );

    subscribe((type: ToastType, content: string) =>
        setToasts((toasts) => [...toasts, { type, content }])
    );

    return (
        <div className={styles.toaster}>
            {toasts.map((toast) => (
                <div className={styles.toast}>{toast.content}</div>
            ))}
        </div>
    );
};
