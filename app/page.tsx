"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { TypewriterEffectSmooth } from "@/components/typewriter";
import { useRef } from "react";
import Timeline from "./sections/timeline";
import Projects from "./sections/project";
import Footer from "./sections/footer";
import Introduction from "./sections/introduction";

export default function Home() {
  const words = [
    { text: "Hi, I am", className: "text-neutral-500 text-3xl" },
    { text: "Sai Charan :)", className: "text-[#CFFF04] text-3xl" },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const introRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  return (
    <div className="bg-black text-white min-h-screen md:mx-auto md:max-w-[50%] max-w-[100%]">
      {
      /* <Navbar
          onLinkClick={(section: string) => {
            if (section === "Introduction") scrollToSection(introRef);
            else if (section === "Education") scrollToSection(educationRef);
            else if (section === "Projects") scrollToSection(projectsRef);
            else if (section === "Experience") scrollToSection(experienceRef);
          }}
        /> */}


      <section
        ref={introRef}
        className=" flex flex-col lg:mt-36 md:mt-36 xl:mt-0 items-center justify-center text-center"
      >
        <Introduction />
      </section>

      <section
        ref={educationRef}
        className="sm:pt-20 md:pt-0 mt-24 flex items-center justify-center text-center"
      >
        <Timeline />
      </section>

      <section
        ref={projectsRef}
        className="sm:pt-20 md:pt-0 mt-24 flex items-center justify-center text-center"
      >
        <Projects />
      </section>
      <section
        ref={projectsRef}
        className="sm:pt-20 md:pt-0 mt-24 flex items-center justify-center text-center"
      >
        <Footer />
      </section>
    </div>
  );
}
