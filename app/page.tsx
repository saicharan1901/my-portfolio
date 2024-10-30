"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { TypewriterEffectSmooth } from "@/components/typewriter";
import { useRef } from "react";
import Timeline from "./sections/timeline";
import Projects from "./sections/project";
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
      <div className="flex flex-col">
        <Navbar
          onLinkClick={(section: string) => {
            if (section === "Introduction") scrollToSection(introRef);
            else if (section === "Education") scrollToSection(educationRef);
            else if (section === "Projects") scrollToSection(projectsRef);
            else if (section === "Experience") scrollToSection(experienceRef);
          }}
        />

        {/* Apply padding only on small screens */}
        <section
          ref={introRef}
          className="lg:pt-20 xl:pt-0 pt-20  flex flex-col items-center justify-center text-center"
        >
          <Introduction />
        </section>
      </div>

      <section
        ref={educationRef}
        className="sm:pt-20 md:pt-0 flex items-center justify-center text-center"
      >
        <Timeline />
      </section>

      <section
        ref={projectsRef}
        className="sm:pt-20 md:pt-0 flex items-center justify-center text-center"
      >
        <Projects />
      </section>
    </div>
  );
}
