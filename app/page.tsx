import Experience from "@/components/experience";
import Index from "@/components/index";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <div className="container">
      <Index />
      <Experience />
      <Projects />
    </div>
  );
}
