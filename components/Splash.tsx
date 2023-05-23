import Image from "next/image";
import logo from "@/images/logo_transparent.webp";
import email from "@/images/email.svg";
import instagram from "@/images/instagram.svg";

function Splash() {
  const emailaddress = "shutter@concepts.com";
  const instagramURL = "https://www.instagram.com/shutter_concepts?igshid=YmMyMTA2M2Y=";
  return (
    <>
      <div className="flex items-center justify-center mt-6 gap-1">
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
      <div className="flex justify-evenly items-center w-full max-w-[2048px] mb-2">
        <div>
          <a
            href={`mailto:${emailaddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-primary rounded p-1 cursor-pointer bg-secondary hover:bg-accent">
              <Image
                src={email}
                alt="Email"
                width={24}
              />
            </div>
          </a>
        </div>
        <div className="w-1/2 flex flex-col text-center">
          {`Explore the stunning portfolio of Shutter Concepts, a passionate and skilled photographer
          specializing in capturing life's moments with artistry and precision. From breathtaking
          landscapes to intimate portraits, immerse yourself in a world of visual storytelling.`}
        </div>
        <div>
          <a
            href={instagramURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-primary rounded p-1 cursor-pointer bg-secondary hover:bg-accent">
              <Image
                src={instagram}
                alt="Instagram"
                width={24}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Splash;
