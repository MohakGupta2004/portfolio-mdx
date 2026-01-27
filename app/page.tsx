import About from "@/components/about";
import Blog from "@/components/blog";
import Experience from "@/components/experience";
import GithubStats from "@/components/github-stats";
import Index from "@/components/index";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <div>
      <Index />
      <Experience />
      <Projects />
      <About />
      <GithubStats />
      <Blog />
    </div>
  );
}
