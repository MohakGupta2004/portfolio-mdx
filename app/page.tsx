import About from "@/components/about";
import Achievements from "@/components/achievements";
import Blog from "@/components/blog";
import Certificates from "@/components/certicates";
import ConnectWithMe from "@/components/connection";
import Experience from "@/components/experience";
import GithubStats from "@/components/github-stats";
import Index from "@/components/index";
import Projects from "@/components/projects";
import Quotes from "@/components/quotes";
import WorkProjects from "@/components/work-projects";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
      <Index />
      <Separator />
      <Experience />
      <Separator />
      <WorkProjects />
      <Separator />
      <Projects />
      <Separator />
      <GithubStats />
      <Separator />
      <Blog />
      <Separator />
      <Achievements />
      <Separator />
      <Certificates />
      <Separator />
      <About />
      <Separator />
      <ConnectWithMe />
      <Separator />
      <Quotes />
    </div>
  );
}
