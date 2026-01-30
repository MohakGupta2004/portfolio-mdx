import Link from "next/link";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    src: "/chainwork.png",
    alt: "Callgenie",
    title:
      "Callgenie - AI Powered Phone Call Assistant With Call Scheduling Features",
    href: "https://callgenie.realtygenie.co",
    description:
      "An AI-powered phone calling assistant designed to help real estate agents manage and respond to client calls efficiently. It offers call scheduling, transcription, and intelligent responses to enhance customer interactions.",
    tools: [
      {
        src: "/nextjs.svg",
        alt: "NextJS",
      },
      {
        src: "/livekit.png",
        alt: "LiveKit",
      },
      {
        src: "/mongodb.svg",
        alt: "MongoDB",
      },
      {
        src: "/redis.svg",
        alt: "Redis",
      },
      {
        src: "/bunjs.svg",
        alt: "BunJS",
      },
      {
        src: "/gcp.svg",
        alt: "GCP",
      },
    ],
  },
  {
    src: "/realty.png",
    alt: "realtygenie",
    href: "https://realtygenie.co",
    title: "RealtyGenie - AI powered Realtor Services Provider Platform",
    description:
      "An AI-powered lead management platform tailored for real estate professionals to streamline client interactions and boost sales. With various AI services integrated, RealtyGenie helps agents manage leads more effectively.",
    tools: [
      {
        src: "/nextjs.svg",
        alt: "NextJS",
      },
      {
        src: "/typescript.svg",
        alt: "Typescript",
      },
      {
        src: "/tailwind.svg",
        alt: "TailwindCSS",
      },
      {
        src: "/gcp.svg",
        alt: "GCP",
      },
      {
        src: "/openai.png",
        alt: "OpenAI",
      },
      {
        src: "/bunjs.svg",
        alt: "BunJS",
      },
    ],
  },
];

const WorkProjects = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 cursor-pointer">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            alt={project.alt}
            title={project.title}
            description={project.description}
            tools={project.tools}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
};
export default WorkProjects;
