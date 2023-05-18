import "./globals.css";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Shutter Concepts",
  description:
    "Explore the stunning portfolio of Shutter Concepts, a passionate and skilled photographer specializing in capturing life's moments with artistry and precision. From breathtaking landscapes to intimate portraits, immerse yourself in a world of visual storytelling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={garamond.className}>{children}</body>
    </html>
  );
}
