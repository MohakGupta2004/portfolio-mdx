"use client";
import Link from "next/link";
import ProjectCard from "./project-card";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH1 } from "./animation/animation-h1";
import { AnimationH2 } from "./animation/animation-h2";

const projects = [
  {
    src: "/chainwork.png",
    alt: "ChainWork",
    title: "ChainWork",
    fullTitle: "ChainWork - Blockchain based Freelance Platform",
    href: "https://chainworkweb3.vercel.app",
    description:
      "A decentralized freelance platform leveraging blockchain technology for secure and transparent transactions.",
    tools: [
      { src: "/ethereum.png", alt: "Ethereum" },
      { src: "/react.svg", alt: "React" },
      { src: "/solidity.svg", alt: "Solidity" },
      { src: "hardhat.svg", alt: "Hardhat" },
      { src: "nodejs.svg", alt: "NodeJS" },
    ],
  },
  {
    src: "/launcht.png",
    alt: "Launcht",
    href: "https://launcht.vercel.app",
    title: "Launcht",
    fullTitle: "Launcht - Solana Token Launchpad with Metadata Configurator",
    description:
      "A decentralized platform to launch Solana tokens with ease and security. Configuring metadata and minting tokens made simple.",
    tools: [
      { src: "/solana.svg", alt: "Solana" },
      { src: "/nextjs.svg", alt: "NextJS" },
      { src: "/typescript.svg", alt: "Typescript" },
      { src: "/tailwind.svg", alt: "TailwindCSS" },
    ],
  },
  {
    src: "/strato.png",
    alt: "Strato",
    href: "https://strato-dev.vercel.app",
    title: "Strato",
    fullTitle: "Strato - WebContainer based Browser AI IDE",
    description:
      "An AI-powered IDE that runs entirely in the browser using WebContainer technology. Build, test, and deploy applications seamlessly.",
    tools: [
      { src: "/webcontainer.svg", alt: "WebContainer" },
      { src: "/react.svg", alt: "React" },
      { src: "/typescript.svg", alt: "Typescript" },
      { src: "/tailwind.svg", alt: "TailwindCSS" },
      { src: "/bunjs.svg", alt: "BunJS" },
    ],
  },
  {
    src: "/sysreturn.png",
    alt: "Sysreturn",
    href: "https://github.com/MohakGupta/SysReturn",
    title: "SysReturn",
    fullTitle: "SysReturn - AI chatbot with RAG capabilities",
    description:
      "An AI chatbot that utilizes Retrieval-Augmented Generation (RAG) for enhanced responses. Integrates with OpenAI and Qdrant for efficient information retrieval.",
    tools: [
      { src: "/nextjs.svg", alt: "NextJS" },
      { src: "/typescript.svg", alt: "Typescript" },
      { src: "/tailwind.svg", alt: "TailwindCSS" },
      { src: "/openai.png", alt: "OpenAI" },
      { src: "/qdrant.svg", alt: "Qdrant" },
    ],
  },
];

const Projects = () => {
  return (
    <section className="mt-16">
      <AnimationWrapper>
        <div className="flex items-end justify-between">
          <div>
            <AnimationH2>Featured</AnimationH2>
            <AnimationH1>Projects</AnimationH1>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/50 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
          >
            <span>View All</span>
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </AnimationWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {projects.map((project, index) => (
          <AnimationWrapper key={index} delay={index * 50}>
            <ProjectCard
              src={project.src}
              alt={project.alt}
              title={project.title}
              description={project.description}
              tools={project.tools}
              href={project.href}
            />
          </AnimationWrapper>
        ))}
      </div>
    </section>
  );
};

export default Projects;
