"use client";
import { useRef } from "react";
import Image from "next/image";
import { Header, CustomButton, WorkExperience, Projects } from "@/components";
import { skillIcons } from "@/components/skillIcons"; // Import skillIcons object
import { projectIcons } from "@/components/ProjectIcons";
import Education from "@/components/Education";

export default function Home() {
  // Explicitly typing the refs as HTMLDivElement | null
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="px-10 min-h-screen pt-24 pb-24">
      <Header experienceRef={experienceRef} projectsRef={projectsRef} />

      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Developer Info */}
        <section className="flex flex-col gap-10">
          <h1 className="text-3xl md:text-7xl">Meet The Developer / </h1>
          <p className="text-xl md:text-2xl">
            <span className="text-5xl colo">Jon</span>, An aspiring web
            developer with a focus on crafting user-friendly interfaces and
            efficient solutions with React.
          </p>
        </section>

        {/* Developer Image */}
        <section className="flex justify-center">
          <Image
            src="/cube.webp" // Replace with the correct path or URL
            alt="Developer Picture"
            width={500} // Define the width for smaller screens
            height={500} // Define the height for smaller screens
            className="object-contain"
          />
        </section>
      </div>

      {/* Skills and Projects Section */}
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-5xl">Skills</h1>
          <div className="skill-icons flex gap-5 flex-wrap justify-center">
            {Object.entries(skillIcons).map(([key, Icon]) => (
              <div key={key} className="icon-item">
                <Image src={Icon} alt={`${key} Icon`} width={50} height={50} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col text-center justify-center"
          style={{
            boxShadow: "10px 10px 20px rgb(12 175 176 / 60%)",
            padding: "2em",
            borderRadius: "50px",
            marginTop: "2em",
          }}
        >
          <p className="text-xl md:text-2xl">
            From API-driven dashboards to secure file storage applications, my
            work combines both front-end and back-end solutions.
          </p>
          <CustomButton
            title="Github"
            route="https://github.com/jonnyboi42"
            className="flex gap-1 items-center bg-transparent border-2 border-gray-700 text-white rounded-[10px] text-xl mt-5 px-2 py-1 mx-auto transition-colors duration-300 hover:bg-gray-700"
            icon={projectIcons.github} // Example of an SVG path
          />
        </div>
      </div>

      {/* Work Experience Section */}
      <div ref={experienceRef}>
        <WorkExperience />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      <Education />
    </main>
  );
}
