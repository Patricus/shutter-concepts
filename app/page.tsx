import Pictures from "@/components/Pictures";
import Splash from "@/components/Splash";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Splash />
      <Pictures />
    </main>
  );
}
