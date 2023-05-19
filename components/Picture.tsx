import Image, { StaticImageData } from "next/image";

export default function Picture({
  picture,
  alt,
  priority = false,
}: {
  picture: StaticImageData;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={picture}
      alt={alt}
      placeholder="blur"
      blurDataURL={
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcsXpaPQAGFgJa36wFugAAAABJRU5ErkJggg=="
      }
      width={0}
      height={0}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      unoptimized
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={100}
      style={{ objectFit: "cover" }}
      className="w-full max-w-[2048px] h-auto rounded-sm shadow-lg shadow-secondary"
    />
  );
}
