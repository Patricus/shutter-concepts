import React from "react";
import Image from "next/image";
import styles from "@/styles/Photo.module.css";

interface photoProps {
    description: string;
    photoURL: string;
    altText: string;
}

function Photo(photoProps: photoProps) {
    const { description, photoURL, altText } = photoProps;

    return (
        <div className={styles.section}>
            <img src={photoURL} alt={altText} className={styles.photo} />
            <p className="legend">{`${description}`}</p>
        </div>
    );
}

export default Photo;
