import Head from "next/head";
import Image from "next/image";
import Photo from "@/components/Photo";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import data from "@/data/photos.json";
import Splash from "@/components/Splash";

const inter = Inter({ subsets: ["latin"] });

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
                {data.map(({ photo }, index) => (
                    <Photo key={index} {...photo} alignment={index % 2 == 0} />
                ))}
            </main>
        </>
    );
}
