import Link from "next/link";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    src: "/callgenie.png",
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
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <h1 className="font-grotesk font-bold text-center text-3xl">
          Proof of works
        </h1>
        <h2 className="font-grotesk text-gray-500 text-center text-lg">
          A collection of my proof of works, showcasing my skills and expertise
          in various domains.
        </h2>
        <div className="border w-full mb-2 mt-4"></div>
      </div>
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
