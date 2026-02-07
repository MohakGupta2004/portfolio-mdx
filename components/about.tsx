import Image from "next/image";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";

const tools = [
  { src: "/nextjs.svg", alt: "Next.JS" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/bunjs.svg", alt: "Bun" },
  { src: "/react.svg", alt: "React" },
  { src: "/tailwind.svg", alt: "TailwindCSS" },
  { src: "/postgres.svg", alt: "PostgreSQL" },
  { src: "/mongodb.svg", alt: "MongoDB" },
  { src: "/openai.png", alt: "OpenAI" },
];

const About = () => {
  return (
    <section className="mt-16">
      <AnimationWrapper>
        <AnimationH2>About</AnimationH2>
        <AnimationH1>Me</AnimationH1>
      </AnimationWrapper>

      <AnimationWrapper delay={50}>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Profile Image */}
          <div className="sm:col-span-1">
            <Image
              src="/logo.jpg"
              alt="Mohak Gupta"
              width={200}
              height={200}
              className="rounded-xl border border-border/50 w-full max-w-[200px]"
            />
          </div>

          {/* Bio */}
          <div className="sm:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-foreground">Mohak Gupta</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Mohak Gupta, a passionate Full Stack Software Developer with
              expertise in building web applications and decentralized
              applications (dApps). With a strong focus on performance and user
              experience, I strive to deliver high-quality software that meets
              the needs of users and businesses alike.
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 border border-border/50 rounded-md"
                    title={tool.alt}
                  >
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      height={16}
                      width={16}
                    />
                    <span className="text-sm text-muted-foreground">
                      {tool.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default About;
