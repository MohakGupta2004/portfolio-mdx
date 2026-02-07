import Link from "next/link";
import ProjectCard from "./project-card";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH1 } from "./animation/animation-h1";
import { AnimationH2 } from "./animation/animation-h2";

const projects = [
  {
    src: "/callgenie.png",
    alt: "Callgenie",
    title: "Callgenie",
    fullTitle:
      "Callgenie - AI Powered Phone Call Assistant With Call Scheduling Features",
    href: "https://callgenie.realtygenie.co",
    description:
      "An AI-powered phone calling assistant designed to help real estate agents manage and respond to client calls efficiently. It offers call scheduling, transcription, and intelligent responses to enhance customer interactions.",
    tools: [
      { src: "/nextjs.svg", alt: "NextJS" },
      { src: "/livekit.png", alt: "LiveKit" },
      { src: "/mongodb.svg", alt: "MongoDB" },
      { src: "/redis.svg", alt: "Redis" },
      { src: "/bunjs.svg", alt: "BunJS" },
      { src: "/gcp.svg", alt: "GCP" },
    ],
  },
  {
    src: "/realty.png",
    alt: "realtygenie",
    href: "https://realtygenie.co",
    title: "RealtyGenie",
    fullTitle: "RealtyGenie - AI powered Realtor Services Provider Platform",
    description:
      "An AI-powered lead management platform tailored for real estate professionals to streamline client interactions and boost sales. With various AI services integrated, RealtyGenie helps agents manage leads more effectively.",
    tools: [
      { src: "/nextjs.svg", alt: "NextJS" },
      { src: "/typescript.svg", alt: "Typescript" },
      { src: "/tailwind.svg", alt: "TailwindCSS" },
      { src: "/gcp.svg", alt: "GCP" },
      { src: "/openai.png", alt: "OpenAI" },
      { src: "/bunjs.svg", alt: "BunJS" },
    ],
  },
];

const WorkProjects = () => {
  return (
    <section className="mt-16">
      <AnimationWrapper>
        <div className="flex items-end justify-between">
          <div>
            <AnimationH2>Professional</AnimationH2>
            <AnimationH1>Proof of Works</AnimationH1>
          </div>
          <Link
            href="/work"
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

export default WorkProjects;
