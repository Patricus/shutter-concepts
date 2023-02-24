import React from "react";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import styles from "@/styles/Contact.module.css";

function Contact() {
    const email = "shutter@concepts.com";
    const instagramName = "shutter_concepts";
    const instagramURL = `https://www.instagram.com/shutter_concepts?igshid=YmMyMTA2M2Y=`;
    return (
        <footer className={styles.container}>
            <article className={styles.link}>
                <Image src="email.svg" alt="Email Icon" className={styles.icon} />
                <Link href={`mailto:${email}?subject=Photo%20shoot%20inquirey`}>
                    shutter@concepts.com
                </Link>
            </article>
            <article className={styles.link}>
                <Image src="instagram.svg" alt="Instagram Icon" className={styles.icon} />
                <Link href={instagramURL}>{instagramName}</Link>
            </article>
        </footer>
    );
}

export default Contact;
