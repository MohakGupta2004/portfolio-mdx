import { Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { SiLeetcode, SiPinterest } from "react-icons/si";

const links = [
  {
    path: "https://x.com/rushbeef04",
    icon: Twitter,
    label: "Twitter",
  },
  {
    path: "https://www.linkedin.com/in/mohak-gupta-007065294/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    path: "https://github.com/MohakGupta2004",
    icon: Github,
    label: "GitHub",
  },
  {
    path: "https://leetcode.com/u/mohakgupta500/",
    icon: SiLeetcode,
    label: "LeetCode",
  },
  {
    path: "https://www.youtube.com/@mohakgupta3586",
    icon: Youtube,
    label: "YouTube",
  },
  {
    path: "https://www.instagram.com/mohaak_gupta",
    icon: Instagram,
    label: "Instagram",
  },
  {
    path: "https://in.pinterest.com/mohakgupta500/",
    icon: SiPinterest,
    label: "Pinterest",
  },
  {
    path: "mailto:mohakgupta500@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-1 mt-6 flex-wrap">
      {links.map(({ path, icon: Icon, label }, index) => (
        <Link
          key={index}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
          aria-label={label}
          title={label}
        >
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
