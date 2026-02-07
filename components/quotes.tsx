import AnimationWrapper from "./animation/animation-wrapper";
import { Quote } from "lucide-react";

const Quotes = async () => {
  const quote = await fetch("https://zenquotes.io/api/random", {
    cache: "no-store",
  });
  const data = await quote.json();

  return (
    <section className="mt-16">
      <AnimationWrapper>
        <div className="relative border border-border/50 rounded-xl bg-card/30 p-8 sm:p-10 overflow-hidden">
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <Quote className="w-8 h-8 text-primary mb-4" />
          <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
            "{data[0].q}"
          </blockquote>
          <p className="mt-4 text-sm text-primary">
            — {data[0].a}
          </p>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Quotes;
