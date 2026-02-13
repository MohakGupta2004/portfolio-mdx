"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Home, FolderOpen, Briefcase, BookOpen, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    icon: Home,
    label: "Home",
    route: "/",
  },
  {
    icon: Briefcase,
    label: "Work",
    route: "/work",
  },
  {
    icon: FolderOpen,
    label: "Projects",
    route: "/projects",
  },
  {
    icon: BookOpen,
    label: "Blogs",
    route: "/blogs",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 px-2 py-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg shadow-black/20">
        {/* Logo */}
        <Link href="/" className="mb-2 group">
          <Image
            src="/logo.jpg"
            height={32}
            width={32}
            alt="Mohak Gupta"
            className="rounded-full w-8 h-8 border border-border/50 group-hover:border-primary/50 transition-all duration-200"
          />
        </Link>

        {/* Nav Icons */}
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={cn(
                "relative p-2.5 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              title={item.label}
            >
              <item.icon className="w-[18px] h-[18px]" />

              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-2.5 py-1 text-xs font-medium bg-card border border-border/50 text-foreground rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap shadow-md">
                {item.label}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-foreground rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-4 left-4 z-50 p-3 bg-card/90 backdrop-blur-md border border-border/50 rounded-full shadow-lg shadow-black/20 text-foreground hover:bg-muted/50 transition-all duration-200"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />

          {/* Mobile Nav Panel */}
          <nav className="md:hidden fixed bottom-16 left-4 z-50 flex flex-col gap-1 p-3 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl shadow-black/30 animate-fade-in-up">
            {navItems.map((item) => {
              const isActive = pathname === item.route;
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
};

export default Sidebar;
