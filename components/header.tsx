"use client";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import Image from "next/image";

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
  return (
    <header className="w-full mx-auto pb-2 flex sticky top-0 z-50 backdrop-blur-2xl justify-between items-center pt-5">
      <div className="flex m-2 gap-3">
        <Image
          src={"/logo.jpg"}
          height={40}
          width={50}
          alt="logo"
          className="rounded-sm border dark:border-amber-50 border-black"
        />
        <span className="pt-6">
          {navigations.map((n, idx) => (
            <Link
              className="p-2 dark:text-gray-200 text-slate-600"
              key={idx}
              href={n.route}
            >
              {n.pathname}
            </Link>
          ))}
        </span>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
