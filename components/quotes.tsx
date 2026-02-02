import AnimationWrapper from "./animation/animation-wrapper";

const Quotes = async () => {
  const quote = await fetch("https://zenquotes.io/api/random", {
    cache: "no-store",
  });
  const data = await quote.json();
  console.log(data[0].q);
  return (
    <div className="mt-25 mb-24 flex-col justify-end items-end border shadow-inner w-full rounded-2xl text-center p-10 bg-card">
      <AnimationWrapper>
        <blockquote className="text-3xl text-end italic font-medium text-gray-500 dark:text-gray-300">
          {`“${data[0].q}”`}
        </blockquote>
      </AnimationWrapper>
      <AnimationWrapper>
        <p className="mt-4 text-end text-lg font-semibold text-gray-500 dark:text-gray-300">
          — {data[0].a}
        </p>
      </AnimationWrapper>
    </div>
  );
};

export default Quotes;
