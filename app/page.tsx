import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Picture from "@/components/Picture";
import Prices from "@/components/Prices";
import Splash from "@/components/Splash";

import leather_eye from "@/images/leather_eye.jpg";
import mtn_hike from "@/images/mountain_hike.jpg";
import mushrooms from "@/images/mushrooms.jpg";

export default function Home() {
  const items = [
    {
      picture: leather_eye,
      alt: "Leather Eye",
      text: "Explore the stunning portfolio of Shutter Concepts, a passionate and skilled photographer specializing in capturing life's moments with artistry and precision. From breathtaking landscapes to intimate portraits, immerse yourself in a world of visual storytelling.",
    },
    {
      picture: mtn_hike,
      alt: "Mountain Hike",
    },
    {
      picture: mushrooms,
      alt: "Mushrooms",
      text: "Explore the stunning portfolio of Shutter Concepts, a passionate and skilled photographer specializing in capturing life's moments with artistry and precision. From breathtaking landscapes to intimate portraits, immerse yourself in a world of visual storytelling.",
    },
  ];
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between snap-proximity snap-y mb-5">
      <section>
        <Splash />
      </section>
      {items.map(({ picture, alt, text }, index) => (
        <section
          key={index}
          className="snap-start"
        >
          <Picture
            picture={picture}
            alt={alt}
            priority={index === 0}
          />
          {text && <Info text={text} />}
        </section>
      ))}
      <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-14 mt-5">
        <Prices />
      </section>
      <Footer />
    </main>
  );
}
