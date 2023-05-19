import Image from "next/image";
import leather_eye from "@/images/leather_eye.jpg";
import mtn_hike from "@/images/mountain_hike.jpg";
import mushrooms from "@/images/mushrooms.jpg";

export default function Pictures() {
  const images = [
    {
      picture: leather_eye,
      text: "Leather Eye",
    },
    {
      picture: mtn_hike,
      text: "Mountain Hike",
    },
    {
      picture: mushrooms,
      text: "Mushrooms",
    },
  ];
  return (
    <div className="flex flex-col gap-20 w-full">
      {images &&
        images.map(({ picture, text }, index) => {
          return (
            <Image
              key={index}
              src={picture}
              alt={text}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcsXpaPQAGFgJa36wFugAAAABJRU5ErkJggg=="
              width={0}
              height={0}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              style={{ objectFit: "cover" }}
              className="w-full max-w-[2048px] h-auto rounded-sm shadow-lg shadow-secondary"
            />
          );
        })}
    </div>
  );
}
