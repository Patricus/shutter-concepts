import React from "react";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";

function Contact() {
    const email = "shutter@concepts.com";
    const instagramName = "shutter_concepts";
    const instagramURL = `https://www.instagram.com/shutter_concepts?igshid=YmMyMTA2M2Y=`;
    return (
        <footer className={styles.container}>
            <article className={styles.link}>
                <i className={`fa-solid fa-envelope ${styles.icon} ${styles.email}`}></i>
                <Link href={`mailto:${email}?subject=Photo%20shoot%20inquirey`}>
                    shutter@concepts.com
                </Link>
            </article>
            <article className={styles.link}>
                <i className={`fa-brands fa-instagram ${styles.icon} ${styles.instagram}`}></i>
                <Link href={instagramURL}>{instagramName}</Link>
            </article>
        </footer>
    );
}

export default Contact;
