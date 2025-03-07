"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
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
    <motion.main
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="flex flex-col px-10 min-h-screen pt-24 pb-24"
    >
      <Header experienceRef={experienceRef} projectsRef={projectsRef} />

      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Developer Info */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-10"
        >
          <h1 className="text-3xl md:text-6xl text-center sm:text-left font-orbitron">
            Meet The Developer
          </h1>

          <p className="text-xl md:text-2xl text-center sm:text-left">
            <span className="text-5xl font-jura">Jon</span>, An aspiring web
            developer with a focus on crafting user-friendly interfaces and
            efficient solutions with React.
          </p>
          <p className="text-xl md:text-2xl text-center sm:text-left">
            Dedicated to crafting intuitive user experiences and collaborating
            with teams to bring ideas to life.
          </p>
        </motion.section>

        {/* Developer Image */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/cube.webp"
            alt="Developer Picture"
            width={500}
            height={500}
            className="object-contain hidden md:block"
          />
        </motion.section>
      </div>

      {/* Skills and Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
      >
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-jura text-center sm:text-left">
            SKILLS
          </h1>
          <div className="skill-icons flex gap-5 flex-wrap justify-center">
            {Object.entries(skillIcons).map(([key, Icon]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * Math.random() }}
                className="icon-item"
              >
                <Image src={Icon} alt={`${key} Icon`} width={50} height={50} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
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
            className="flex gap-2 items-center bg-transparent border-2 border-[#d5d8d7] text-white rounded-lg text-xl mt-5 px-4 py-2 mx-auto transition-all duration-300 transform hover:bg-black-700 hover:scale-105 hover:shadow-lg hover:border-[3px] hover:border-[#29988f] hover:ring-2  font-orbitron"
            icon={projectIcons.github}
          />
        </motion.div>
      </motion.div>

      {/* Work Experience Section */}
      <div ref={experienceRef}>
        <WorkExperience />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      <Education />
    </motion.main>
  );
}
