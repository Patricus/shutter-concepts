import React from "react";
import Image from "next/image";
import styles from "@/styles/Logo.module.css";

function logo() {
    return (
        <div className={styles.container}>
            <Image
                //blurDataUrl is a base64 encoded image that is used as a placeholder while the image is loading, here we use code to generate a semi-transparent gray image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMvgwAAY8BMGsecTMAAAAASUVORK5CYII="
                src="thirteen.svg"
                alt="Shutter Concepts Logo"
                className={styles.logo}
                width={100}
                height={100}
                quality={100}
                placeholder="blur"
            />
        </div>
    );
}

export default logo;
