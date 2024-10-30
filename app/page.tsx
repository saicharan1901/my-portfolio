"use client";

import Navbar from "@/components/navbar";
import { useRef } from "react";
import Timeline from "./sections/timeline";
import Projects from "./sections/project";
import Introduction from "./sections/introduction";
import Footer from "./sections/footer";

export default function Home() {
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const introRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  return (
    <div className="bg-black text-white min-h-screen md:mx-auto md:max-w-[50%] max-w-[100%]">
      <Navbar
        onLinkClick={(section: string) => {
          if (section === "Introduction") scrollToSection(introRef);
          else if (section === "Education") scrollToSection(educationRef);
          else if (section === "Projects") scrollToSection(projectsRef);
          else if (section === "Experience") scrollToSection(experienceRef);
        }}
      />

      <Introduction ref={introRef} />

      <section ref={educationRef} className="flex items-center justify-center text-center">
        <Timeline />
      </section>

      <section ref={projectsRef} className="flex items-center mb-10 justify-center text-center">
        <Projects />
      </section>

      {/* <Footer /> */}
    </div>
  );
}
