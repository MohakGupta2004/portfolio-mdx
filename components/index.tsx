"use client";
import { Dot, File, Send, MapPin, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import TechStackButton from "./ui/tech-button";
import { Button } from "./ui/button";

import SocialLinks from "./social-links";
import AnimationWrapper from "./animation/animation-wrapper";

const Index = () => {
  const [imageClicked, setImageClicked] = useState(false);

  return (
    <section className="pt-8 sm:pt-12">
      <AnimationWrapper>
        {/* Profile Header - Inspired by link-in-bio style */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          {/* Profile Image */}
          <div className="relative">
            <button
              onClick={() => setImageClicked(!imageClicked)}
              className="focus:outline-none"
            >
              <Image
                src={"/logo.jpg"}
                height={120}
                width={120}
                alt="Mohak Gupta"
                className={`rounded-full w-24 h-24 sm:w-28 sm:h-28 transition-all duration-200 ${imageClicked
                  ? "border-2 border-primary shadow-lg shadow-white/10"
                  : "border-2 border-border/50"
                  }`}
              />
            </button>
            <Dot className="absolute top-16 left-16 sm:top-20 sm:left-20 md:top-20 md:left-20 lg:left-20 lg:top-20 border dark:bg-gray-500 border-gray-400 bg-gray-200 rounded-4xl shadow-lg shadow-gray-800/20" />
          </div>

          {/* Name & Quick Info */}
          <div className="flex-1">
            <h1 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Mohak Gupta
            </h1>
            <p className="text-muted-foreground mt-1">
              Full Stack Developer
            </p>

            {/* Status Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                India
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5" />
                <span className="text-primary">RealtyGenie</span>
              </span>
            </div>
          </div>
        </div>
      </AnimationWrapper>

      <AnimationWrapper delay={50}>
        <div className="mt-8 space-y-4">
          {/* Bio with Tech Stack */}
          <div className="text-muted-foreground leading-relaxed">
            <p className="flex flex-wrap items-center gap-x-1 gap-y-2">
              <span>I build webapps and dapps using</span>
              <TechStackButton
                href="https://typescriptlang.org"
                src="/typescript.svg"
                alt="ts"
              >
                Typescript
              </TechStackButton>
              <span>,</span>
              <TechStackButton
                href="https://tailwindcss.com"
                src="/tailwind.svg"
                alt="tw"
              >
                Tailwindcss
              </TechStackButton>
              <span>,</span>
              <TechStackButton
                href="https://nextjs.org"
                src="/nextjs.svg"
                alt="next"
              >
                Next.JS
              </TechStackButton>
              <span>,</span>
              <TechStackButton
                href="https://bun.com"
                src="/bunjs.svg"
                alt="bun"
              >
                Bun
              </TechStackButton>
              <span>,</span>
              <TechStackButton
                href="https://postgresql.org"
                src="/postgres.svg"
                alt="postgres"
              >
                Postgresql
              </TechStackButton>
              <span>.</span>
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2">
              Currently focusing on{" "}
              <span className="font-semibold text-primary">UI</span> and{" "}
              <span className="font-semibold text-primary">AI agent</span>{" "}
              development. I also enjoy low-level work with
              <TechStackButton
                href="https://en.wikipedia.org/wiki/C_(programming_language)"
                src="/c.svg"
                alt="c"
              >
                C
              </TechStackButton>
              <span>,</span>
              <TechStackButton href="https://isocpp.org" src="/cpp.svg" alt="cpp">
                C++
              </TechStackButton>
              <span>,</span>
              <TechStackButton href="https://go.dev" src="/golang.svg" alt="go">
                Go
              </TechStackButton>
              <span>,</span>
              <TechStackButton
                href="https://www.rust-lang.org"
                src="/rust.svg"
                alt="rust"
              >
                Rust
              </TechStackButton>
              <span>for systems programming.</span>
            </p>
          </div>
        </div>
      </AnimationWrapper>

      {/* CTA Buttons - Redesigned */}
      <AnimationWrapper delay={100}>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href={"/resume.pdf"}
            target="_blank"
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border/50 text-foreground hover:border-primary hover:text-primary transition-all duration-200 shadow-sm shadow-inner shadow-gray-800/10"
          >
            <File className="w-4 h-4" />
            Resume
          </Link>
          <Link
            href={"mailto:mohakgupta500@gmail.com"}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-inner shadow-gray-800/10"
          >
            <Send className="w-4 h-4" />
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </AnimationWrapper>

      {/* Social Links */}
      <AnimationWrapper delay={150}>
        <SocialLinks />
      </AnimationWrapper>
    </section>
  );
};

export default Index;
