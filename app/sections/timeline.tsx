import React, { useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const timelineData = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-green-400" />,
      title: "10th Grade Completed",
      date: "2019",
      description: "Finished 10th grade at Narayana E-Tech with 87.6%",
      isKey: true,
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-green-400" />,
      title: "12th Grade Completed",
      date: "2021",
      description: "Finished 12th grade at Narayana Olympiad with 88.2%",
      isKey: true,
    },
    {
      id: 3,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Security Team Member",
      date: "November 2022",
      description: "Part of the security team for Maaya 2022.",
      isKey: false,
    },
    {
      id: 4,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Won Ingenius Hackathon",
      date: "April 2023",
      description: "Won in the framework track of the Ingenius hackathon.",
      isKey: true,
    },
    {
      id: 5,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Internship at CodMav",
      date: "Summer 2023 (June-July)",
      description: "Started an unpaid internship working on a research project: 'Winning Formula: Data-driven Cricket Matchup Analysis'.",
      isKey: false,
    },
    {
      id: 6,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Honorable Mention at GDSC Hackathon",
      date: "September 2023",
      description: "Received an honorable mention at the GDSC Hackathon.",
      isKey: true,
    },
    {
      id: 7,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Technical Team Member",
      date: "November 2023",
      description: "Part of the technical team for Maaya'23, developed and managed the college Maaya website.",
      isKey: false,
    },
    {
      id: 8,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Internship at Xperios",
      date: "November 2023",
      description: "Started interning at Xperios, participating in the thingQbator competition.",
      isKey: false,
    },
    {
      id: 9,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Internship at PESU Venture Labs",
      date: "March to May 2024",
      description: "Interned at PESU Venture Labs, worked as a full-stack developer across multiple ventures.",
      isKey: true,
    },
    {
      id: 10,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Internship at Gramanok Technologies",
      date: "June to August 2024",
      description: "Interned at Gramanok Technologies Pvt. Ltd., developing an AI-based resume search application.",
      isKey: true,
    },
    {
      id: 11,
      icon: <FaBriefcase className="text-yellow-400" />,
      title: "Spring Internship at Juniper Networks",
      date: "Jan 2025",
      description: "Scored a spring internship opportunity for the period January to June 2025.",
      isKey: false,
    },
  ];

//   const handleKeyDown = (e, id) => {
//     if (e.key === "Enter" || e.key === " ") {
//       setSelectedMilestone(id === selectedMilestone ? null : id);
//     }
//     if (e.key === "ArrowDown" && id < timelineData.length) {
//       const nextElement = document.getElementById(`milestone-${id + 1}`);
//       nextElement?.focus();
//     }
//     if (e.key === "ArrowUp" && id > 1) {
//       const prevElement = document.getElementById(`milestone-${id - 1}`);
//       prevElement?.focus();
//     }
//   };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6  lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="md:text-6xl text-3xl font-bold text-center text-neutral-500 mb-12 vt323-regular">Timeline of My Life</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              id={`milestone-${item.id}`}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              //onClick={() => setSelectedMilestone(item.id === selectedMilestone ? null : item.id)}
              //onKeyDown={(e) => handleKeyDown(e, item.id)}
              tabIndex={0}
              role="button"
              aria-expanded={selectedMilestone === item.id}
              aria-label={`${item.title} - ${item.date}`}
            >
              <div className="flex-1">
                <div
                  className={`p-6 rounded-lg shadow-lg transition-all justify-start duration-300 transform border border-[#39FF14] hover:scale-105`}
                >
                  <div className="flex mb-2">
                    <span className="text-sm font-semibold text-neutral-500 italic underline animate-pulse">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#CFFF04] oswald mb-2 ">{item.title}</h3>
                  <p className="text-neutral-300 text-sm vt323-regular ">{item.description}</p>
                </div>
              </div>

              <div className="mx-4 relative">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-black border-4 border-white shadow-lg`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
              </div>

              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
