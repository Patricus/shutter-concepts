import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Splash from "@/components/Splash";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/Carousel"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Shutter Concepts</title>
                <meta name="description" content="Shutter Concepts Photography" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#939393" />
                <meta name="msapplication-TileColor" content="#efefef" />
                <meta name="theme-color" content="#efefef" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Splash />
                <section className={styles.carouselSection}>
                    <Carousel />
                </section>
                <Contact />
            </main>
        </>
    );
}
