"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  route,
  className = "",
  icon,
  onClick,
  glowEffect = false, // Optional glow effect
}: CustomButtonProps) => {
  // Check if the route is an external URL (starts with http or www)
  const isExternal = route.startsWith("http") || route.startsWith("www");

  // Handle click based on whether the route is external or not
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (isExternal) {
      window.open(route, "_blank", "noopener noreferrer");
    } else {
      window.location.href = route;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative px-4 py-2 text-white transition-all duration-300 ease-in-out
        ${glowEffect ? "group" : ""}
        ${className}`}
    >
      {icon && (
        <Image
          src={icon}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="mr-2"
        />
      )}
      {title}

      {/* Glowing Bottom Border */}
      {glowEffect && (
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      )}
    </button>
  );
};

export default CustomButton;
