import Image from "next/image";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";
const tools = [
  {
    src: "/nextjs.svg",
    alt: "NextJS",
  },
  {
    src: "/typescript.svg",
    alt: "Typescript",
  },
  {
    src: "/bunjs.svg",
    alt: "BunJS",
  },
  {
    src: "/react.svg",
    alt: "React",
  },
  {
    src: "/tailwind.svg",
    alt: "TailwindCSS",
  },
  {
    src: "/postgres.svg",
    alt: "Postgresql",
  },
  {
    src: "/mongodb.svg",
    alt: "Mongodb",
  },
  {
    src: "/openai.png",
    alt: "OpenAI",
  },
];
const About = () => {
  return (
    <AnimationWrapper>
      <div>
        <AnimationH2>About</AnimationH2>
        <AnimationH1>Me</AnimationH1>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Image
            src="/logo.jpg"
            alt="about image"
            width={300}
            height={300}
            className="rounded-xl mt-4"
          />
          <div className="mt-6">
            <AnimationH1>Mohak Gupta</AnimationH1>
            <div>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                I'm Mohak Gupta, a passionate Full Stack Software Developer with
                expertise in building web applications and decentralized
                applications (dApps). With a strong focus on performance and
                user experience, I strive to deliver high-quality software that
                meets the needs of users and businesses alike.
              </p>
            </div>
            <br />
            <div>
              <p className="text-gray-800 dark:text-gray-300 font-bold font-grotesk">
                Skills
              </p>
              <div>
                <div className="flex flex-wrap text-sm font-grotesk font-bold">
                  {tools.map((tool, idx) => (
                    <Image
                      key={idx}
                      src={tool.src}
                      alt={tool.alt}
                      height={20}
                      width={20}
                      className="mr-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};
export default About;
