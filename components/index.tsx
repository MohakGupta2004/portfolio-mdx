"use client";
import { Dot, File, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TechStackButton from "./ui/tech-button";
import { Button } from "./ui/button";

import SocialLinks from "./social-links";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH1 } from "./animation/animation-h1";

const Index = () => {
  return (
    <AnimationWrapper>
      <div className="relative">
        <Image
          src={"/logo.jpg"}
          height={100}
          width={100}
          alt="logo"
          className="rounded-4xl w-20 h-20 sm:w-24 sm:h-24 md:w-25 md:h-25"
        />

        <Dot className="absolute top-16 left-16 sm:top-20 sm:left-20 md:top-20 md:left-20 lg:left-20 lg:top-20 border dark:bg-gray-500 border-gray-400 bg-gray-200 rounded-4xl shadow-lg shadow-gray-800/20" />
      </div>
      <div className="mt-8 sm:mt-10 flex flex-col gap-4">
        <div>
          <AnimationH1>
            Hi, I'm Mohak! - A Full Stack Software Developer.
          </AnimationH1>
          <AnimationWrapper>
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
              <span>
                <TechStackButton
                  href="https://postgresql.org"
                  src="/postgres.svg"
                  alt="postgres"
                >
                  Postgresql
                </TechStackButton>
              </span>
              Currently focusing on <span className="font-bold">UI</span> and{" "}
              <span className="font-bold">AI agent</span> development.
              <span>I also enjoy low-level work with</span>
              <TechStackButton
                href="https://en.wikipedia.org/wiki/C_(programming_language)"
                src="/c.svg"
                alt="c"
              >
                C
              </TechStackButton>
              <span>,</span>
              <TechStackButton
                href="https://isocpp.org"
                src="/cpp.svg"
                alt="cpp"
              >
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
              <span>for low-level and systems programming.</span>
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="p-4 bg-white-900 text-gray-600 border-2
             border-gray-800/30
             shadow-inner shadow-black/30
             hover:bg-gray-800/10
             dark:text-white
              dark:bg-gray-400/30
              dark:border-dashed
              dark:border-gray-400             
             "
              >
                <Link href={"/resume.pdf"} target="_blank">
                  <File />
                  Resume
                </Link>
              </Button>
              <Button
                asChild
                className="p-2 text-gray-200 border-2 border-gray-800/30 dark:text-white dark:bg-secondary dark:hover:bg-gray-800/10"
              >
                <Link href={"/contact"}>
                  <Send className="inline" />
                  Get in touch
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
        <AnimationWrapper>
          <SocialLinks />
        </AnimationWrapper>
      </div>
    </AnimationWrapper>
  );
};
export default Index;
