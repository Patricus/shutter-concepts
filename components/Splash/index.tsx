import React from "react";
import Logo from "./logo";
import styles from "@/styles/Splash.module.css";

function Splash() {
    return (
        <div className={styles.container}>
            <Logo />
            <h1 className={styles.title}>Shutter Concepts</h1>
        </div>
    );
}

export default Splash;
