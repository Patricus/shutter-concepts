import React from "react";
import Image from "next/image";
import styles from "@/styles/Photo.module.css";

interface photoProps {
    description: string;
    photoURL: string;
    altText: string;
    alignment: boolean;
}

function Photo(photoProps: photoProps) {
    const { description, photoURL, altText } = photoProps;

    const alignment = photoProps.alignment ? styles.left : styles.right;

    return (
        <div className={styles.section}>
            <p className={`${styles.description} ${alignment}`}>{`${description}`}</p>
            <Image
                //blurDataUrl is a base64 encoded image that is used as a placeholder while the image is loading, here we use code to generate a semi-transparent gray image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMvgwAAY8BMGsecTMAAAAASUVORK5CYII="
                src={`${photoURL}`}
                alt={`${altText}`}
                className={styles.photo}
                fill
                quality={100}
                placeholder="blur"
            />
        </div>
    );
}

export default Photo;
