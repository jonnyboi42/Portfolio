"use client";
import { useState, useEffect, useRef } from "react";
import { experienceIcons } from "@/components/experienceIcons";
import Image from "next/image";
import { gsap } from "gsap";

// Define the type for a job object
type Job = {
  title: string;
  icon: string; // or Image if you use Image component types
  duties: string[];
};

const jobs: Job[] = [
  {
    title: "Full-Stack Developer",
    icon: experienceIcons.developer,
    duties: [
      "Independent Full Stack Developer",
      "Developed responsive and user-friendly web applications using React and Next.js.",
      "Implemented reusable UI components and ensured consistent design with Tailwind CSS and Bootstrap.",
      "Integrated state management using Redux to manage application state across multiple components.",
      "Built and maintained APIs using Node.js and Express.js for backend communication.",
      "Implemented secure and efficient database management using PostgreSQL.",
      "Deployed applications on Render for reliable hosting and performance.",
    ],
  },
  {
    title: "IT Support Specialist",
    icon: experienceIcons.support,
    duties: [
      "Worked closely with system administrators to assist in IT projects, system maintenance, and managing user access through M365 Admin and Azure.",
      "Troubleshot and resolved hardware and software issues across campus, including imaging and repairing devices.",
      "Managed user accounts and permissions using On-Premise Active Directory (AD), M365 Admin Center, and Azure.",
      "Provided support for network-related issues, diagnosing and resolving connectivity problems.",
      "Utilized Intune and Exchange for device management, email setup, and ensuring security compliance.",
      "Supported remote desktop solutions to facilitate remote work for employees",
      "Maintained and repaired printers, ensuring proper configuration and functionality.",
      "Offered software troubleshooting assistance to employees ensuring minimal downtime.",
    ],
  },
  {
    title: "End User Specialist",
    icon: experienceIcons.support,
    duties: [
      "Provided remote support via Remote Desktop to troubleshoot and resolve end-user issues.",
      "Assisted in network troubleshooting, diagnosing connectivity issues with routers, switches, and endpoints.",
      "Automated repetitive IT tasks using PowerShell scripts to improve efficiency.",
      "Set up new user devices, installed required software, and configured system settings.",
      "Installed, configured, and troubleshot printers to ensure seamless operation.",
      "Collaborated closely with system administrators on various projects related to mobile device management (MDM) and IT infrastructure.",
    ],
  },
];

export default function WorkExperience() {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  const dutiesRef = useRef<HTMLUListElement>(null);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  useEffect(() => {
    if (dutiesRef.current) {
      gsap.fromTo(
        dutiesRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 1 }
      );
    }
  }, [selectedJob]);

  return (
    <section className="max-w-4xl mx-auto mt-[100px]" id="experience">
      <h1 className="text-6xl text-center mb-10 font-jura">Work Experience</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Job Options */}
        <div className="flex flex-col w-full md:w-1/3 space-y-2">
          {jobs.map((job, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleJobClick(job)}
              className={`p-4 text-left border rounded-lg flex items-center gap-3 transition-all duration-300 ${
                selectedJob.title === job.title
                  ? "bg-[#00f5d4] text-black shadow-lg shadow-[#66c5b8ee] border-none"
                  : "bg-black-800 text-white hover:bg-gray-800"
              }`}
            >
              {job.icon && (
                <Image src={job.icon} alt={job.title} width={30} height={30} />
              )}
              {job.title}
            </button>
          ))}
        </div>

        {/* Job Details with Scrollable Content */}
        <div className="flex-1 bg-black-900 text-white p-6 rounded-lg h-[250px] overflow-y-auto scrollbar-custom">
          <h2 className="text-4xl mb-4">{selectedJob.title}</h2>
          <ul ref={dutiesRef} className="space-y-2">
            {selectedJob.duties.map((duty, index) => (
              <li key={index} className="opacity-0">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
