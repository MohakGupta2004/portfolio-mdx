import Image from "next/image";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";
import { Trophy } from "lucide-react";

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
    <section className="mt-16">
      <AnimationWrapper>
        <AnimationH2>Recognition</AnimationH2>
        <AnimationH1>Achievements</AnimationH1>
      </AnimationWrapper>

      <AnimationWrapper delay={50}>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 border border-white/10 rounded-xl bg-card hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 py-1">
                <h3 className="font-semibold text-foreground text-lg">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Logo */}
              <Image
                src={achievement.src}
                alt={achievement.alt}
                height={40}
                width={40}
                className="rounded-lg flex-shrink-0 hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Achievements;
