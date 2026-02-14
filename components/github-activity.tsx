function getColor(contributionCount: number) {
  if (contributionCount === 0) {
    return "bg-muted";
  } else if (contributionCount < 5) {
    return "bg-green-300";
  } else if (contributionCount < 10) {
    return "bg-green-400";
  } else if (contributionCount < 20) {
    return "bg-green-500";
  } else {
    return "bg-green-600";
  }
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface GitHubActivityProps {
  weeks: Week[];
  totalContributions: number;
}

const GitHubActivity = ({ weeks, totalContributions }: GitHubActivityProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          {totalContributions.toLocaleString()} contributions in the last year
        </p>
      </div>
      <div className="flex gap-0.5 overflow-x-auto pb-2">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-0.5">
            {week.contributionDays.map((day, dayIdx) => (
              <div
                key={dayIdx}
                title={`${day.date}: ${day.contributionCount} contributions`}
                className={`w-2.5 h-2.5 rounded-sm ${getColor(day.contributionCount)} transition-colors`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-3 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-0.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-muted" />
          <div className="w-2.5 h-2.5 rounded-sm bg-primary/30" />
          <div className="w-2.5 h-2.5 rounded-sm bg-primary/50" />
          <div className="w-2.5 h-2.5 rounded-sm bg-primary/70" />
          <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default GitHubActivity;
