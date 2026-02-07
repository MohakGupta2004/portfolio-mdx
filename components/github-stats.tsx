import AnimationWrapper from "./animation/animation-wrapper";
import GithubActivity from "./github-activity";
import { AnimationH1 } from "./animation/animation-h1";
import { AnimationH2 } from "./animation/animation-h2";

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
    next: { revalidate: 86400 },
  });
  const data = await result.json();

  return (
    <section className="mt-16">
      <AnimationWrapper>
        <AnimationH2>Activity</AnimationH2>
        <AnimationH1>GitHub Contributions</AnimationH1>
      </AnimationWrapper>

      <AnimationWrapper delay={50}>
        <div className="mt-6 border border-border/50 rounded-lg bg-card/30 p-4 overflow-x-auto">
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
    </section>
  );
};

export default GithubStats;
