// LIBRARIES
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import { Button } from "~/components/ui/button";
import ChevronDown from "~/components/svgs/chevronDown";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <div
        // HERO ROW
        className="flex z-10 w-full items-center flex-col bg-gradient-to-br from-cyan-200 to-sky-400 p-20 gap-20"
      >
        <div className="flex flex-col gap-5">
          <h1 className="w-full text-center text-5xl">BIG HEADER TEXT</h1>
          <h2 className="w-full text-center text-xl">SMALLER HEADER TEXT</h2>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/#">
            <Button
              size={"lg"}
              className="rounded-xl bg-sky-800 px-8 py-4 font-bold text-white hover:bg-sky-600 text-xl"
            >
              Button 1
            </Button>
          </Link>
          <Link href="/#">
            <Button
              size={"lg"}
              className="rounded-xl bg-sky-800 px-8 py-4 font-bold text-white hover:bg-sky-600 text-xl"
            >
              Button 2
            </Button>
          </Link>
        </div>
        <Link
          // Scroll down chevron
          href="./#"
          className="h-12 w-12 cursor-pointer text-6xl transition ease-linear hover:h-14 hover:w-14 hover:-translate-y-1 hover:scale-105"
          passHref
        >
          <ChevronDown className="fill-white hover:fill-success" />
        </Link>
      </div>
      <div
        // 2ND ROW
        className="flex z-10 w-full items-center flex-col bg-gradient-to-br from-neutral-100 to-neutral-200 p-20 gap-20"
      >
        <div className="flex flex-col gap-10 text-slate-700">
          <h1 className="w-full text-center text-5xl">BIG HEADER TEXT</h1>
          <h2 className="w-full text-center text-xl">SMALLER HEADER TEXT</h2>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/#">
            <Button
              size={"lg"}
              className="rounded-xl bg-sky-800 px-8 py-4 font-bold text-white hover:bg-sky-600 text-xl"
            >
              Button 1
            </Button>
          </Link>
          <Link href="/#">
            <Button
              size={"lg"}
              className="rounded-xl bg-sky-800 px-8 py-4 font-bold text-white hover:bg-sky-600 text-xl"
            >
              Button 2
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
