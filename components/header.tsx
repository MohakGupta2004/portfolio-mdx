"use client";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
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
    route: "/blog",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-16 sticky top-0 z-50 rounded-3xl py-4 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={"/logo.jpg"}
            height={40}
            width={40}
            alt="logo"
            className="rounded-sm border dark:border-amber-50 border-black w-8 h-8 sm:w-10 sm:h-10"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navigations.map((n, idx) => (
              <Link
                className="px-3 py-2 dark:text-gray-400 text-gray-800 group hover:text-slate-900 dark:hover:text-white transition-colors"
                key={idx}
                href={n.route}
              >
                {n.pathname}
                <div className="bg-gray-500 dark:bg-gray-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side - Theme Switch + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeSwitch />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-gray-200 dark:border-gray-700 pt-4">
          {navigations.map((n, idx) => (
            <Link
              className="px-3 py-2 dark:text-gray-200 text-slate-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
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
