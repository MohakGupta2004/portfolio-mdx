import Link from "next/link";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    src: "/chainwork.png",
    alt: "ChainWork",
    title: "ChainWork - Blockchain based Freelance Platform",
    href: "https://chainworkweb3.vercel.app",
    description:
      "A decentralized freelance platform leveraging blockchain technology for secure and transparent transactions.",
    tools: [
      {
        src: "/ethereum.png",
        alt: "Ethereum",
      },
      {
        src: "/react.svg",
        alt: "React",
      },
      {
        src: "/solidity.svg",
        alt: "Solidity",
      },
      {
        src: "hardhat.svg",
        alt: "Hardhat",
      },
      {
        src: "nodejs.svg",
        alt: "NodeJS",
      },
    ],
  },
  {
    src: "/launcht.png",
    alt: "Launcht",
    href: "https://launcht.vercel.app",
    title: "Launcht - Solana Token Launchpad with Metadata Configurator",
    description:
      "A decentralized platform to launch Solana tokens with ease and security. Configuring metadata and minting tokens made simple.",
    tools: [
      {
        src: "/solana.svg",
        alt: "Solana",
      },
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
    ],
  },
  {
    src: "/strato.png",
    alt: "Strato",
    href: "https://strato-dev.vercel.app",
    title: "Strato - WebContainer based Browser AI IDE",
    description:
      "An AI-powered IDE that runs entirely in the browser using WebContainer technology. Build, test, and deploy applications seamlessly.",
    tools: [
      {
        src: "/webcontainer.svg",
        alt: "WebContainer",
      },
      {
        src: "/react.svg",
        alt: "React",
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
        src: "/bunjs.svg",
        alt: "BunJS",
      },
    ],
  },
  {
    src: "/sysreturn.png",
    alt: "Sysreturn",
    href: "https://github.com/MohakGupta/SysReturn",
    title: "SysReturn - AI chatbot with RAG capabilities",
    description:
      "An AI chatbot that utilizes Retrieval-Augmented Generation (RAG) for enhanced responses. Integrates with OpenAI and Qdrant for efficient information retrieval.",
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
        src: "/openai.png",
        alt: "OpenAI",
      },
      {
        src: "/qdrant.svg",
        alt: "Qdrant",
      },
    ],
  },
];

const Projects = () => {
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
export default Projects;
