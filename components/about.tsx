import Image from "next/image";
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
    <div>
      <div>
        <h2 className="text-xs text-gray-600 dark:text-gray-500">About</h2>
        <h1 className="text-2xl font-grotesk font-bold text-gray-800 dark:text-gray-300">
          Me
        </h1>
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
            <div className="text-black dark:text-white font-bold font-grotesk text-2xl">
              Mohak Gupta
            </div>
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
                <div className="flex text-sm font-grotesk font-bold">
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
    </div>
  );
};
export default About;
