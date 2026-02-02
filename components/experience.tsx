"use client";
import AnimationWrapper from "./animation/animation-wrapper";
import WorkCard from "./work-card";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";
const experiences = [
  {
    src: "/realtygenielogo.png",
    alt: "realty",
    startingDate: "December 2025",
    endingDate: "Present",
    location: "Canada (remote)",
    jobRole: "Full Stack Developer",
    companyName: "RealtyGenie",
    tech: [
      {
        src: "/nextjs.svg",
        href: "https://nextjs.org",
        alt: "nextjs",
        children: "Next.JS",
      },
      {
        src: "/typescript.svg",
        href: "https://typescriptlang.org",
        alt: "typescript",
        children: "TypeScript",
      },
      {
        src: "/mongodb.svg",
        href: "https://mongodb.com",
        alt: "mongodb",
        children: "MongoDB",
      },
      {
        src: "/gcp.svg",
        href: "https://cloud.google.com/",
        alt: "gcp",
        children: "GCP",
      },
      {
        src: "/express.svg",
        href: "https://expressjs.com/",
        alt: "express",
        children: "Express",
      },
      {
        src: "/redis.svg",
        href: "https://redis.io/",
        alt: "redis",
        children: "Redis",
      },
      {
        src: "/livekit.png",
        href: "https://livekit.io/",
        alt: "livekit",
        children: "LiveKit",
      },
      {
        src: "/openai.png",
        href: "https://openai.com/",
        alt: "openai",
        children: "OpenAI",
      },
    ],
    description: [
      "Developed and maintained full stack features using TypeScript and Express.",
      "Implemented scalable Voice AI agents and phone calling agents with LiveKit.",
      "Leveraged MongoDB and Redis for scaling background jobs and data storage.",
      "Deployed & managed infrastructure on Google Cloud Platform (GCP).",
    ],
    open: true,
    href: "https://realtygenie.co",
  },
  {
    src: "/gdg.jpg",
    alt: "gdg",
    startingDate: "August 2025",
    endingDate: "November 2025",
    location: "Techno India University, Kolkata",
    jobRole: "Web3 Lead",
    companyName: "GDG On Campus TIU",
    tech: [
      {
        src: "/solana.svg",
        href: "https://solana.com",
        alt: "solana",
        children: "Solana",
      },
      {
        src: "/ethereum.png",
        href: "https://ethereum.org",
        alt: "ethereum",
        children: "Ethereum",
      },
      {
        src: "/typescript.svg",
        href: "https://typescriptlang.org",
        alt: "typescript",
        children: "TypeScript",
      },
      {
        src: "/nextjs.svg",
        href: "https://nextjs.org",
        alt: "nextjs",
        children: "Next.JS",
      },
    ],
    description: [
      "Taught Web3 development concepts and built projects using Solana and Ethereum.",
      "Organized workshops and hackathons to promote blockchain technology among students.",
    ],
    open: false,
    href: "https://gdg.community.dev/gdg-on-campus-techno-india-university/",
  },
  {
    src: "/gdg.jpg",
    alt: "gdg",
    startingDate: "September 2024",
    endingDate: "August 2025",
    location: "Techno India University, Kolkata",
    jobRole: "Cybersecurity Facilitator",
    companyName: "GDG On Campus TIU",
    tech: [
      {
        src: "/metasploit.svg",
        href: "https://www.metasploit.com/",
        alt: "metasploit",
        children: "Metasploit",
      },
      {
        src: "/linux.svg",
        href: "https://www.kernel.org/",
        alt: "linux",
        children: "Linux",
      },
      {
        src: "/nmap.png",
        href: "https://nmap.org/",
        alt: "nmap",
        children: "Nmap",
      },
      {
        src: "/burpsuite.svg",
        href: "https://portswigger.net/burp",
        alt: "burpsuite",
        children: "Burp Suite",
      },
    ],
    description: [
      "Taught Web3 development concepts and built projects using Solana and Ethereum.",
      "Organized workshops and hackathons to promote blockchain technology among students.",
    ],
    open: false,
    href: "https://gdg.community.dev/gdg-on-campus-techno-india-university/",
  },
];

const Experience = () => {
  return (
    <AnimationWrapper>
      <div className="mt-12">
        <div>
          <AnimationH2>Featured</AnimationH2>
          <AnimationH1>Experience</AnimationH1>
        </div>

        <AnimationWrapper>
          <div className="mt-6 space-y-4">
            {experiences.map((exp, idx) => (
              <WorkCard key={idx} {...exp} />
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </AnimationWrapper>
  );
};

export default Experience;
