import React from "react";
import Image from "next/image"; // Import Image from next/image
import { educationIcons } from "./EducationIcons"; // Ensure this contains the path for your "education" icon

const EducationDetails = {
  Title: "Bachelor's Degree in Computer Science",
  University: "Texas State University",
  Minor: "Mathematics",
  Courses: [
    "Databases",
    "Computer Vision",
    "Human Factors",
    "Systems Security",
  ],
  TechnologiesUsed: ["C++", "Java", "Python", "Jupyter Notebook", "Tensorflow"],
  Description:
    "During my studies at Texas State University, I gained in-depth knowledge in various fields such as databases, computer vision, and human factors. I had the opportunity to apply C++, Java, and Python in my Systems Security and Computer Vision courses, where I explored security concepts and advanced image processing techniques.",
};

const Education = () => {
  return (
    <section className="max-w-4xl mx-auto mt-[55px] sm:mt-50px] md:mt-[30px]">
      <h3 className="text-center text-6xl font-jura">Education</h3>
      <h1 className="text-4xl font-semibold text-center mb-6 flex items-center justify-center gap-2 pt-4">
        {/* Use the Image component with the path from educationIcons
        <Image
          src={educationIcons.education} // Path to the icon
          alt="Education Icon"
          width={32} // Adjust the width
          height={32} // Adjust the height
        /> */}
        {EducationDetails.Title}
      </h1>
      <div className="text-center mb-4">
        <p className="text-xl">{EducationDetails.University}</p>
        <p className="text-lg text-gray-500">{EducationDetails.Minor} Minor</p>
      </div>
      <p className="mb-4 text-lg text-center sm:text-left">
        {EducationDetails.Description}
      </p>
      {/* <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-medium mb-2">COURSES</h2>
            <ul className="list-none space-y-2">
              {EducationDetails.Courses.map((course, index) => (
                <li key={index} className="text-lg">
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">TECHNOLOGIES</h2>
            <ul className="list-none space-y-2 ">
              {EducationDetails.TechnologiesUsed.map((tech, index) => (
                <li key={index} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Education;
