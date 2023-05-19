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
    },
    {
      picture: mtn_hike,
      alt: "Mountain Hike",
    },
    {
      picture: mushrooms,
      alt: "Mushrooms",
    },
  ];
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between gap-10 snap-y snap-proximity">
      <Splash />
      {items.map(({ picture, alt }, index) => (
        <section className="snap-start">
          <Picture
            key={index}
            picture={picture}
            alt={alt}
            priority={index === 0}
          />
        </section>
      ))}
    </main>
  );
}
