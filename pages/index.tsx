import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Splash from "@/components/Splash";
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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Splash />
                <Carousel />
            </main>
        </>
    );
}
