import Navbar from "@/components/navbar";
import Image from "next/image";
import { Boxes } from "@/components/backgroundBoxes";
import { cn } from "@/utils/cn";
import hi from "../assets/home-main.svg";
import { TypewriterEffectSmooth } from "@/components/typewriter";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Web/App",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-[#B968C7]",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="text-4xl text-white ">
        <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-row items-center justify-between rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <div
            className={cn("md:text-4xl text-xl ml-52 text-white relative z-20")}
          >
            <div className="items-center justify-center">
              <p className="text-neutral-600 dark:text-neutral-200 text-4xl sm:text-4xl ">
                Hi, I'm <span className="font-extrabold">Sai Charan</span>
              </p>
            </div>
            <div className="text-4xl sm:text-4xl text-neutral-600 dark:text-neutral-200">
              <TypewriterEffectSmooth words={words} />
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <Link href="/contactme">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  Contact Me
                </button>
                </Link>
                <Link href="/projects">
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  My work
                </button>
                </Link>


              </div>
            </div>
          </div>

          <div className="z-20 mr-10">
            <Image
              src={hi}
              alt="home pic"
              className="img-fluid"
              style={{ maxWidth: "750px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
