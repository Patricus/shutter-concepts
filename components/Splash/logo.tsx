import React from "react";
import Image from "next/image";
import styles from "@/styles/Logo.module.css";
import logo from "@/public/images/logo_transparent.webp";

function Logo() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    //blurDataUrl is a base64 encoded image that is used as a placeholder while the image is loading, here we use code to generate a semi-transparent gray image
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMvgwAAY8BMGsecTMAAAAASUVORK5CYII="
                    src={logo}
                    alt="Shutter Concepts Logo"
                    sizes="150px"
                    // className={styles.logo}
                    fill
                    // width={150}
                    // height={150}
                    // quality={100}
                    placeholder="blur"
                />
            </div>
        </div>
    );
}

export default Logo;
