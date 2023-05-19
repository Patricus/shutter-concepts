import Image from "next/image";
import logo from "@/images/logo_transparent.webp";

function Splash() {
  return (
    <div className="flex items-center mx-1 gap-1">
      <span className="text-2xl font-bold">SHUTTER</span>
      <Image
        src={logo}
        alt="Shutter Concepts"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcsXpaPQAGFgJa36wFugAAAABJRU5ErkJggg=="
        width={0}
        height={0}
        priority
        className="w-48 h-auto flex-shrink bg-accent shadow-[inset_2px_10px_55px_30px_var(--background-color)] rounded-full"
      />
      <span className="text-2xl font-bold">CONCEPTS</span>
    </div>
  );
}

export default Splash;
