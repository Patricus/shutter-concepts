import Info from "@/components/Info";
import Picture from "@/components/Picture";
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
    <main className="flex w-full min-h-screen flex-col items-center justify-between snap-y snap-proximity">
      <Splash />
      {items.map(({ picture, alt, text }, index) => (
        <section
          className="snap-start"
          key={index}
        >
          <Picture
            picture={picture}
            alt={alt}
            priority={index === 0}
          />
          {text && <Info text={text} />}
        </section>
      ))}
    </main>
  );
}
