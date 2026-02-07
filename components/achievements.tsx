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
        <div className="mt-6 space-y-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 border border-border/50 rounded-lg bg-card/30"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {achievement.description}
                </p>
              </div>

              {/* Logo */}
              <Image
                src={achievement.src}
                alt={achievement.alt}
                height={32}
                width={32}
                className="rounded-lg flex-shrink-0 hidden sm:block"
              />
            </div>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Achievements;
