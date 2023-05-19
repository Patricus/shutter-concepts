import Image from "next/image";
import logo from "@/images/logo_transparent.webp";

function Splash() {
  return (
    <div className="flex items-center mt-6 gap-1">
      <span className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold">SHUTTER</span>
      <Image
        src={logo}
        alt="Shutter Concepts"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcsXpaPQAGFgJa36wFugAAAABJRU5ErkJggg=="
        width={0}
        height={0}
        priority
        className="w-16 sm:w-36 md:w-48 h-auto flex-shrink bg-accent shadow-[inset_1px_2px_12px_5px_var(--background-color)] sm:shadow-[inset_2px_5px_30px_18px_var(--background-color)] md:shadow-[inset_2px_10px_55px_30px_var(--background-color)] rounded-full"
      />
      <span className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold">CONCEPTS</span>
    </div>
  );
}

export default Splash;
