import { CircleDot, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbBrandTypescript } from "react-icons/tb";
import TechStackButton from "./ui/tech-button";

const Index = () => {
  return (
    <div className="mt-16">
      <div>
        <Image
          src={"/logo.jpg"}
          height={100}
          width={100}
          alt="logo"
          className="rounded-4xl"
        />
        <Dot className="fixed top-58 ml-20 border dark:bg-gray-500 border-gray-400 bg-gray-200  rounded-4xl shadow-lg shadow-gray-800/20" />
      </div>
      <div className="mt-8">
        <div>
          <h1 className="font-grotesk text-4xl font-bold">
            Hi, I'm Mohak! - A Full Stack Software Developer.
          </h1>
          <h2 className="font-grotesk text-lg mt-2 text-gray-500">
            I build webapps & dapps using{" "}
            <TechStackButton
              href="https://typescriptlang.org"
              src="/typescript.svg"
              alt="ts"
            >
              Typescript
            </TechStackButton>
            ,{" "}
            <TechStackButton
              href="https://tailwindcss.com"
              src="/tailwind.svg"
              alt="tw"
            >
              Tailwindcss
            </TechStackButton>
            ,
            <TechStackButton
              href="https://nextjs.org"
              src="/nextjs.svg"
              alt="next"
            >
              Next.JS
            </TechStackButton>
            , <br />
            <TechStackButton href="https://bun.com" src="/bunjs.svg" alt="bun">
              Bun
            </TechStackButton>
            ,{" "}
            <TechStackButton
              href="https://postgresql.org"
              src="/postgres.svg"
              alt="postgres"
            >
              Postgresql
            </TechStackButton>
            <span className="div">
              Currently focusing on <span className="font-bold">UI</span> and{" "}
              <span className="font-bold">AI agent</span> development.
            </span>
            <div className="mt-2 text-gray-500">
              I also enjoy low-level work with{" "}
              <TechStackButton
                href="https://en.wikipedia.org/wiki/C_(programming_language)"
                src="/c.svg"
                alt="c"
              >
                C
              </TechStackButton>
              ,{" "}
              <TechStackButton
                href="https://isocpp.org"
                src="/cpp.svg"
                alt="cpp"
              >
                C++
              </TechStackButton>
              ,{" "}
              <TechStackButton href="https://go.dev" src="/golang.svg" alt="go">
                Go
              </TechStackButton>
              ,{" "}
              <TechStackButton
                href="https://www.rust-lang.org"
                src="/rust.svg"
                alt="rust"
              >
                Rust
              </TechStackButton>{" "}<br/>
              for low-level and systems programming.
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Index;
