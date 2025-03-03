"use client";
import React, { useState, RefObject } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Blade from "../public/icons/header/blade.svg";

// Define the types for the props
interface HeaderProps {
  experienceRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({ experienceRef, projectsRef }) => {
  // State to control the hamburger menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50 p-6 text-white flex justify-between items-center">
      {/* Left Section - Logo and Links */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Blade} alt="Logo" width={50} height={50} />
        </div>

        {/* Links (visible on medium screens and up, hidden on small screens) */}
        <div className="hidden md:flex gap-6">
          <CustomButton
            title="LINKEDIN"
            route="https://www.linkedin.com/in/jon-san-migel-2937aa2ab/"
            glowEffect={true} // Enable glow effect
          />
          <CustomButton
            title="PROJECTS"
            route="#projects"
            glowEffect={true} // Enable glow effect
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <CustomButton
            title="EXPERIENCE"
            route="#experience"
            glowEffect={true} // Enable glow effect
            onClick={() =>
              experienceRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>

      {/* Hamburger Menu Button (Visible on small screens only) */}
      <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
        ☰
      </button>

      {/* Right Section - Resume Button */}
      <div className="hidden md:flex">
        <a
          href="/ResumeJonSanMigel.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton title="RESUME" route="#" glowEffect={true} />
        </a>
      </div>

      {/* Hamburger Menu Content (Visible when menu is open on small screens) */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:hidden absolute top-20 left-0 right-0 bg-black p-6 flex-col items-center gap-4`}
      >
        <CustomButton
          title="LINKEDIN"
          route="https://www.linkedin.com/in/jon-san-migel-2937aa2ab/"
          glowEffect={true}
        />
        <CustomButton
          title="PROJECTS"
          route="#projects"
          glowEffect={true}
          onClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <CustomButton
          title="EXPERIENCE"
          route="#experience"
          glowEffect={true}
          onClick={() =>
            experienceRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <a
          href="/ResumeJonSanMigel.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton title="RESUME" route="#" glowEffect={true} />
        </a>
      </div>
    </header>
  );
};

export default Header;
