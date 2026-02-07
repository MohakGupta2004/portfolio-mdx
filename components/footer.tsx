import Link from "next/link";
import AnimationWrapper from "./animation/animation-wrapper";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <AnimationWrapper>
      <footer className="w-full border-t border-border/30 mt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left - Branding */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary text-lg">~</span>
              <span className="text-sm text-muted-foreground">
                <span className="text-primary">@rushbeef04</span>
              </span>
            </div>

            {/* Center - Quick Links */}
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/MohakGupta2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com/rushbeef04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohak-gupta-007065294/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - Copyright */}
            <p className="text-xs text-muted-foreground">
              Built with <span className="text-primary">passion</span>, assembled in India
            </p>
          </div>
        </div>
      </footer>
    </AnimationWrapper>
  );
};

export default Footer;
