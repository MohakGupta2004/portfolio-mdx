"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Home, FolderOpen, Briefcase, BookOpen, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);


  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        layout
        initial={{ width: "60px" }}
        animate={{ 
          width: isExpanded ? "240px" : "60px",
          backgroundColor: isExpanded ? "rgba(20, 20, 20, 0.95)" : "rgba(var(--card-rgb), 0.8)",
          paddingLeft: isExpanded ? "16px" : "8px",
          paddingRight: isExpanded ? "16px" : "8px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 py-4 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg shadow-black/20 group/sidebar overflow-hidden items-start",
        )}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty("--x", `${x}px`);
          e.currentTarget.style.setProperty("--y", `${y}px`);
        }}
        onClick={() => {}} 
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Spotlight Effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)",
          }}
        />

        {/* Logo */}
        <div className={cn("flex items-center gap-4 mb-2 group relative z-10 w-full", isExpanded && "px-1")}>
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.jpg"
              height={32}
              width={32}
              alt="Mohak Gupta"
              className="rounded-full w-8 h-8 border border-border/50 group-hover:border-primary/50 transition-all duration-200"
            />
          </Link>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -5, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: -5, width: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex flex-col overflow-hidden"
              >
                 <span className="text-sm font-semibold text-foreground whitespace-nowrap">Mohak Gupta</span>
                 <span className="text-[10px] text-muted-foreground whitespace-nowrap">Full Stack Dev</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav Icons */}
        <div className="flex flex-col gap-2 w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={cn(
                "relative z-10 flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group w-full",
                isActive
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              title={!isExpanded ? item.label : undefined}
            >
              <item.icon className="w-[18px] h-[18px] shrink-0" />
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -5, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: "auto" }}
                    exit={{ opacity: 0, x: -5, width: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip (Only when collapsed) */}
              {!isExpanded && (
                <span className="absolute left-full ml-3 px-2.5 py-1 text-xs font-medium bg-card border border-border/50 text-foreground rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap shadow-md z-[60]">
                  {item.label}
                </span>
              )}

              {/* Active indicator dot */}
              {isActive && !isExpanded && (
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-foreground rounded-full" />
              )}
              {isActive && isExpanded && (
                 <motion.span 
                   layoutId="activeTab"
                   className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-foreground rounded-r-full" 
                 />
              )}
            </Link>
          );
        })}
        </div>
      </motion.nav>

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
