// components/introduction.tsx

import React from 'react';
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/typewriter";

const Introduction = React.forwardRef((props, ref) => {
  const words = [
    { text: "Hi, I am", className: "text-neutral-500 text-3xl" },
    { text: "Sai Charan :)", className: "text-[#CFFF04] text-3xl" },
  ];

  return (
    <section className="md:h-screen flex flex-col md:mt-0 mt-4 items-center justify-center text-center">
      <div className="hidden oswald md:block mb-4">
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="md:hidden oswald block text-neutral-500 mb-4 text-xl">
        Hi, This is{" "}
        <span className="text-[#39FF14] font-extrabold">Sai Charan</span>
      </div>
      <img
        src="/home.gif"
        alt="Animated Intro"
        className="img-fluid md:mb-8 rounded-lg w-[85%] shadow-xl"
      />
      <div className="text-4xl relative md:w-full flex flex-col md:mt-0 mt-4 w-[80%] items-center space-y-4 flex-grow">
        <p className="mb-4 text-lg text-neutral-500 text-justify vt323-regular">
          My name is{" "}
          <span className="font-bold text-[#39FF14]">Sai Charan</span>, and I
          am currently in my fourth year at
          <span className="font-bold text-[#CFFF04]"> PES University</span>,
          pursuing a degree in computer science. My deep fascination with
          technology has driven me to explore various domains, with a
          particular emphasis on
          <span className="font-bold text-[#CFFF04]"> full-stack development</span>.
          At present, I am dedicated to my capstone project, the
          <span className="font-bold text-[#CFFF04]"> "Cricket Skill Emulation Platform"</span>,
          which uniquely blends my passion for both technology and sports. In addition
          to this, I have developed two significant cricket-related projects, one of
          which I had the privilege of presenting at the
          <span className="font-bold text-[#CFFF04]"> ICT4SD conference</span>{" "}
          in August 2024. This experience has been invaluable, as it allowed me
          to share my insights and innovations with fellow enthusiasts. I am always
          open to collaboration and excited to connect with like-minded individuals.
          Feel free to reach out to me at
          <span className="font-bold text-[#CFFF04]"> papinenisaicharan@gmail.com</span>{" "}
          or check out my GitHub profile at
          <span className="font-bold text-[#CFFF04]"> www.github.com/saicharan1901</span>{" "}
          to explore my projects and contributions to the tech community.
        </p>
      </div>
    </section>
  );
});

export default Introduction;
