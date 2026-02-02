import Image from "next/image";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";
const achievements = [
  {
    src: "/sih.png",
    alt: "SIH Achievement",
    title: "Smart India Hackathon 2023 - Finalist",
    description:
      "Finalist of smart india hackathon 2023 under student innovation on healthcare track.",
  },
  {
    src: "/innovocon.png",
    alt: "Innovocon Achievement",
    title: "Innovocon 2025 - 1st Place",
    description:
      "Won 1st place at Innovocon 2025 for developing ChainWork, a blockchain-based freelance platform.",
  },
];
const Achievements = () => {
  return (
    <AnimationWrapper>
      <div>
        <AnimationH2>Featured</AnimationH2>
        <AnimationH1>
          Achievements
        </AnimationH1>
      </div>
      <div>
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="mt-2 h-15 w-full border rounded-4xl shadow-inner dark:shadow-white/10 bg-card p-2 flex items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src={achievement.src}
                alt={achievement.alt}
                height={40}
                width={40}
                className="rounded-4xl"
              />
              <div>
                <div className="text-black dark:text-white font-bold font-grotesk text-md">
                  {achievement.title}
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs overflow-auto">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default Achievements;
