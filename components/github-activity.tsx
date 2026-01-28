function getColor(contributionCount: number) {
  if (contributionCount === 0) {
    return "bg-gray-200 dark:bg-gray-800";
  } else if (contributionCount < 5) {
    return "bg-green-300 dark:bg-green-900";
  } else if (contributionCount < 10) {
    return "bg-green-400 dark:bg-green-700";
  } else if (contributionCount < 20) {
    return "bg-green-500 dark:bg-green-500";
  } else {
    return "bg-green-700 dark:bg-green-300";
  }
}

const GitHubActivity = ({
  weeks,
  totalContributions,
}: {
  weeks: Array<{
    contributionDays: Array<{
      date: string;
      contributionCount: number;
    }>;
    totalContributions: number;
  }>;
  totalContributions: number;
}) => {
  return (
    <div>
      <p className="font-grotesk text-sm font-semibold text-gray-500 dark:text-gray-400">
        Total contributions are{" "}
        <span className="font-extrabold italic text-black dark:text-white font-grotesk">
          {totalContributions}
        </span>
      </p>
      <div className="flex flex-wrap overflow-x-auto m-3 border border-black/30 dark:border-white/30 p-4 rounded-lg">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex flex-col">
            {week.contributionDays.map((day, dayIdx) => (
              <div
                key={dayIdx}
                title={`${day.date}`}
                className={`w-2 h-2 m-0.5 ${getColor(day.contributionCount)}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GitHubActivity;
