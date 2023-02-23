import React from "react";
import { Carousel as CarouselContainer } from "react-responsive-carousel";
import Photo from "@/components/Photo";
import data from "@/data/photos.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "@/styles/Carousel.module.css";

function Carousel() {
    const carouselProps = {
        autoPlay: true,
        infiniteLoop: true,
        interval: 3500,
        stopOnHover: true,
        showThumbs: false,
        showStatus: false,
    };
    return (
        <CarouselContainer className={styles.carousel} {...carouselProps}>
            {data.map(({ photo }, index) => (
                <Photo key={index} {...photo} />
            ))}
        </CarouselContainer>
    );
}

export default Carousel;
