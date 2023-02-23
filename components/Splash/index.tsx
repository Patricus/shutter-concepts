import React from "react";
import Logo from "./logo";
import styles from "@/styles/Splash.module.css";

function Splash() {
    return (
        <div className={styles.container}>
            <Logo />
            <h1 className={styles.title}>Shutter Concepts</h1>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quod.
                Reprehenderit laboriosam quidem corporis quam porro ullam voluptatem sunt nisi
                impedit temporibus at earum, enim, perferendis illo assumenda distinctio suscipit.
            </p>
        </div>
    );
}

export default Splash;
