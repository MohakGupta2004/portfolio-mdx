import About from "@/components/about";
import Achievements from "@/components/achievements";
import Blog from "@/components/blog";
import ConnectWithMe from "@/components/connection";
import Experience from "@/components/experience";
import GithubStats from "@/components/github-stats";
import Index from "@/components/index";
import Projects from "@/components/projects";
import WorkProjects from "@/components/work-projects";
export default function Home() {
  return (
    <div>
      <Index />
      <Experience />
      <Projects />
      <About />
      <GithubStats />
      <WorkProjects />
      <Blog />
      <ConnectWithMe />
      <Achievements />
    </div>
  );
}
