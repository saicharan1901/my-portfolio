import React from 'react';

const projectsData = [
  {
    title: "Winning Formula",
    description: "Data-Driven Cricket Team Selection and Match Prediction. This project introduces a model-based recommender system for cricket team selection, emphasizing a data-driven approach.",
    technologies: "Data Analysis, Machine Learning",
  },
  {
    title: "ProdUp",
    description: "A progressive tracker daily progress tracker that has todos, notes, reminders.",
    technologies: "Next.js, Flask, AWS, PostgreSQL",
  },
  {
    title: "EmuSkill",
    description: "An immersive cricket skill emulation platform focusing on posture and technique refinement. This research aims to enable users to emulate the skills of their favourite cricketers.",
    technologies: "Python, TensorFlow, OpenCV, MediaPipe, Unity, Flask, Next.js, Firebase, MongoDB",
  },
  {
    title: "SmartPark",
    description: "This project automates finding free parking spots across Bangalore that are available for rent.",
    technologies: "Next.js, Firebase, TailwindCSS",
  },
];

const Projects = () => {
  return (
    <section className="py-20 h-screen px-10 text-center space-y-6">
      <h2 className=" text-neutral-500 vt323-regular font-bold mb-6  md:text-6xl text-3xl">Projects</h2>
      <div className="grid gap-6 grid-cols-1  mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-transparent cursor-pointer border hover:scale-105 transition duration-300 border-[#CFFF04] p-5 rounded-lg shadow-lg hover:shadow-2xl"
          >
            <div className=' justify-between flex flex-row'>
            <div className="md:text-xl text-sm font-semibold mb-2 text-[#39FF14] oswald">{project.title}</div>
            <div className="text-neutral-500 font-bold md:text-xs text-[8px] italic animate-pulse">{project.technologies}</div>
            </div>

            <p className="text-neutral-400 mb-2 vt323-regular md:text-lg text-sm text-justify">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
