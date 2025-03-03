"use client";
import React, { useState, RefObject } from "react";
import CustomButton from "./CustomButton";

// Define the types for the props
interface HeaderProps {
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({ experienceRef, projectsRef }) => {
  // State to control the hamburger menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50 p-6 text-white flex justify-between items-center">
      {/* Left Section - Custom Logo and Links */}
      <div className="flex items-center gap-6">
        {/* Custom Logo (simple text logo) */}
        <div className="flex items-center font-bold text-xl text-white">
          JSM
        </div>

        {/* Links (visible on medium screens and up, hidden on small screens) */}
        <div className="hidden md:flex gap-6">
          <CustomButton
            title="LINKEDIN"
            route="https://www.linkedin.com/in/jon-san-migel-2937aa2ab/"
            glowEffect={true} // Enable glow effect
          />

          <CustomButton
            title="EXPERIENCE"
            route="#experience"
            glowEffect={true} // Enable glow effect
            onClick={() =>
              experienceRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <CustomButton
            title="PROJECTS"
            route="#projects"
            glowEffect={true} // Enable glow effect
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>

      {/* Hamburger Menu Content (Visible when menu is open on small screens) */}

      {/* Hamburger Menu Button (Visible on small screens only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white text-2xl z-50"
      >
        ☰
      </button>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:hidden absolute top-20 left-0 right-0 bg-black p-6 flex-col items-center gap-4`}
      >
        <CustomButton
          title="LINKEDIN"
          route="https://www.linkedin.com/in/jon-san-migel-2937aa2ab/"
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 w-full"
        />
        <CustomButton
          title="PROJECTS"
          route="#projects"
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 w-full"
          onClick={() => {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close the menu
          }}
        />
        <CustomButton
          title="EXPERIENCE"
          route="#experience"
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 w-full"
          onClick={() => {
            experienceRef.current?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close the menu
          }}
        />
        <a
          href="/ResumeJonSanMigel.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <CustomButton
            title="RESUME"
            route="#"
            className="border-b-2 border-transparent hover:border-white transition-all duration-300 w-full"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
