import React from "react";
import Image from "next/image";
import styles from "@/styles/Photo.module.css";

interface photoProps {
    photoURL: string;
    altText: string;
}

function Photo(photoProps: photoProps) {
    const { photoURL, altText } = photoProps;

    return (
        <div className={styles.section}>
            <img src={photoURL} alt={altText} className={styles.photo} />
        </div>
    );
}

export default Photo;
