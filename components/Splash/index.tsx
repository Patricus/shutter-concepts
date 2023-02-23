import React from "react";
import Logo from "./logo";
import styles from "@/styles/Splash.module.css";

function Splash() {
    return (
        <header className={styles.container}>
            <Logo />
            <h1 className={styles.title}>Shutter Concepts</h1>
        </header>
    );
}

export default Splash;
