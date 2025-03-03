"use client";
import { useState, useEffect, useRef } from "react";
import { projectIcons } from "./ProjectIcons";
import Image from "next/image";
import { gsap } from "gsap";

// Define the Project type based on the shape of the projects array
type Project = (typeof projects)[0];

const projects = [
  {
    title: "Smart Lights Interface",
    icon: projectIcons.lights,
    description: "An interface for controlling smart lights using Tuya's API.",
    url: "https://github.com/jonnyboi42/Tuya-Blade-Runner-Smart-Lights-Interface",
    technologies: [
      "React for front-end development",
      "Express.js for backend",
      "Tuya Smart Light API",
      "Figma for design",
    ],
    details: [
      "Designed and built a smart lights interface for controlling lights using Tuya's Blade Runner API.",
      "Used Figma for UI/UX design to ensure a user-friendly experience.",
      "Integrated Tuya's Smart Light API to allow real-time control of connected smart devices.",
      "Developed the backend using Express.js to manage API calls and communication between the frontend and the Tuya API.",
    ],
  },
  {
    title: "Movie Theater Application",
    icon: projectIcons.movie,
    description: "A full-stack application for managing movie theater tickets.",
    url: "https://moviesitefrontend.onrender.com/",
    technologies: [
      "React for front-end development",
      "PostgreSQL to manage ticket purchase information",
      "Express.js to serve data and images",
      "Redux for state management",
      "Bootstrap for styling",
      "Deployed on Render (free hosting site)",
    ],
    details: [
      "Developed a dynamic movie theater application where users can view movie showtimes and purchase tickets.",
      "Implemented PostgreSQL database to store and manage ticket purchase data.",
      "Used Express.js to serve the backend data and images for the front-end interface.",
      "Utilized Redux to handle state management, ensuring a smooth user experience.",
      "The application was deployed using Render for both front-end and back-end, making it easily accessible online.",
    ],
  },
  {
    title: "Firebase File Uploader",
    icon: projectIcons.upload,
    description:
      "A file uploader app built with Firebase for file storage and authentication.",
    url: "https://github.com/jonnyboi42/File-Storage_Application",
    technologies: [
      "React for front-end development",
      "Firebase for file storage and authentication",
      "Firebase Authentication for secure login",
    ],
    details: [
      "Created a file uploader application where users can upload, search for, and delete files.",
      "Implemented Firebase Authentication to allow secure user sign-in and access control.",
      "Used Firebase Cloud Storage to handle file uploads and storage.",
      "Built the front-end using React, ensuring a smooth and responsive user experience.",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const detailsRef = useRef<HTMLUListElement>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current.children,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1 }
      );
    }
  }, [selectedProject]);

  return (
    <section
      className="max-w-5xl mx-auto py-20  border-[#4444446b]"
      id="projects"
    >
      <h1 className="text-6xl text-center mb-10">Projects</h1>
      {/* Horizontal Project List */}
      <div className="flex flex-wrap justify-center gap-6 pb-4">
        {projects.map((project, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleProjectClick(project)}
            className={`w-full lg:w-60 p-4 text-left border border-gray-300 rounded-lg flex items-center gap-3 transition-all duration-300 ${
              selectedProject.title === project.title
                ? "bg-[#00f5d4] text-black shadow-lg shadow-[#66c5b8ee] border-none"
                : "bg-black border-white text-white hover:bg-gray-700"
            }`}
          >
            {project.icon && (
              <Image
                src={project.icon}
                alt={project.title}
                width={22}
                height={22}
              />
            )}
            <span className="text-sm">{project.title}</span>
          </button>
        ))}
      </div>

      {/* Project Details */}
      <div className="bg-black text-white p-6 mt-6">
        <h2 className="text-4xl mb-4 flex items-center gap-2"></h2>
        <p className="mb-4">{selectedProject.description}</p>

        <h3 className="text-xl font-semibold">TECHNOLOGIES USED</h3>
        <ul className="list-none list-inside mb-4">
          {selectedProject.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold">PROJECT DETAILS</h3>
        <ul
          ref={detailsRef}
          className="space-y-2 h-[175px] overflow-y-auto overflow-x-hidden scrollbar-custom"
        >
          {selectedProject.details.map((detail, index) => (
            <li key={index} className="opacity-0">
              {detail}
            </li>
          ))}
        </ul>

        {/* Project Link Button */}
        <a
          href={selectedProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition border border-[#f1f1f1]"
        >
          <Image
            src={projectIcons.github}
            alt="Open Project"
            width={20}
            height={20}
          />
          View Project
        </a>
      </div>
    </section>
  );
}
