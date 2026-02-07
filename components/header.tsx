"use client";
import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigations = [
  {
    pathname: "Projects",
    route: "/projects",
  },
  {
    pathname: "Work",
    route: "/work",
  },
  {
    pathname: "Blogs",
    route: "/blogs",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container mx-auto max-w-3xl px-4 sm:px-6 md:px-8 sticky top-0 z-50 py-4 bg-background/90 backdrop-blur-sm border-b border-border/30">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={"/logo.jpg"}
              height={32}
              width={32}
              alt="Mohak Gupta"
              className="rounded-full w-8 h-8 border-2 border-transparent group-hover:border-primary transition-all duration-200"
            />
            <span className="font-grotesk font-medium text-sm text-muted-foreground group-hover:text-primary transition-colors">
              @rushbeef04
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navigations.map((n, idx) => (
              <Link
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                key={idx}
                href={n.route}
              >
                {n.pathname}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side - Theme Switch + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <AnimatedThemeToggler />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-2 flex flex-col gap-1 border-t border-border/30 pt-4 animate-fade-in">
          {navigations.map((n, idx) => (
            <Link
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
              key={idx}
              href={n.route}
              onClick={() => setMobileMenuOpen(false)}
            >
              {n.pathname}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
