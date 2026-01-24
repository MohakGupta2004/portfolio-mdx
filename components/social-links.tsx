import { Mail } from "lucide-react";
import Link from "next/link";
import {
  BsGithub,
  BsInstagram,
  BsPinterest,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    path: "https://x.com/rushbeef04",
    icon: BsTwitterX,
  },
  {
    path: "https://www.linkedin.com/in/mohak-gupta-007065294/",
    icon: LiaLinkedinIn,
  },
  {
    path: "https://github.com/MohakGupta2004",
    icon: BsGithub,
  },
  {
    path: "https://leetcode.com/u/mohakgupta500/",
    icon: SiLeetcode,
  },
  {
    path: "https://www.youtube.com/@mohakgupta3586",
    icon: BsYoutube,
  },
  {
    path: "https://www.instagram.com/mohaak_gupta",
    icon: BsInstagram,
  },
  {
    path: "https://in.pinterest.com/mohakgupta500/",
    icon: BsPinterest,
  },
  {
    path: "mailto:mohakgupta500@gmail.com",
    icon: Mail
  }
];

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {links.map(({ path, icon: Icon }, index) => (
        <Link
          key={index}
          href={`${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 mt-5 rounded-md hover:bg-white/10 transition"
        >
          <Icon className="text-xl text-gray-500 hover:text-black" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
