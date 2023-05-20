"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function Info({ text }: { text: string }) {
  return (
    <ParallaxProvider>
      <div className="overflow-hidden p-10">
        <Parallax speed={10}>
          <p>{text}</p>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default Info;
