import AnimationWrapper from "./animation/animation-wrapper";
import GithubActivity from "./github-activity";

const GithubStats = async () => {
  const result = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query ($userName: String!) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `,
      variables: {
        userName: "MohakGupta2004",
      },
    }),
    next: { revalidate: 86400 }, // cache for 24h (optional but great)
  });
  const data = await result.json();
  console.log(data);
  return (
    <AnimationWrapper>
      <div>
        <h2 className="text-xs text-gray-600 dark:text-gray-500">Featured</h2>
        <h1 className="text-2xl font-grotesk font-bold text-gray-800 dark:text-gray-300">
          Github Stats
        </h1>
        <GithubActivity
          weeks={
            data.data.user.contributionsCollection.contributionCalendar.weeks
          }
          totalContributions={
            data.data.user.contributionsCollection.contributionCalendar
              .totalContributions
          }
        />
      </div>
    </AnimationWrapper>
  );
};
export default GithubStats;
