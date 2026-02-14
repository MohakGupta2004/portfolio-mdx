import Image from "next/image";
import Link from "next/link";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";
import AnimationWrapper from "./animation/animation-wrapper";
import { ExternalLink, GraduationCap, Trophy } from "lucide-react";

interface Certificate {
  icon: "cert" | "award";
  src: string;
  alt: string;
  title: string;
  description: string;
  source: string;
}

const certificates: Certificate[] = [
  {
    icon: "cert",
    src: "/linkedin.svg",
    alt: "CompTIA Pentest+ Certificate Preparation",
    title: "CompTIA Pentest+ Certificate Preparation",
    description:
      "Completed the CompTIA Pentest+ Certificate Preparation course on LinkedIn Learning, gaining skills in penetration testing and vulnerability assessment.",
    source:
      "https://www.linkedin.com/learning/certificates/4f2f31077056cd86e5b5f474099fa28ba30c72b3d1dad6b2c8a7591520ba02b1?trk=share_certificate",
  },
  {
    icon: "cert",
    src: "/linkedin.svg",
    alt: "Git Intermediate Techniques",
    title: "Git Intermediate Techniques",
    description:
      "Completed the Git Intermediate Techniques course on LinkedIn Learning, increasing collaboration skills in version control and collaborative development using Git.",
    source:
      "https://www.linkedin.com/learning/certificates/e8df51208279935e5b759419aa0b3bd050990bc4315dd208369fcda76a8749f7",
  },
  {
    icon: "cert",
    src: "/secops.jpg",
    alt: "Certified Network Security Practitioner",
    title: "Certified Network Security Practitioner",
    description:
      "Earned the Certified Network Security Practitioner (CNSP) certification, demonstrating expertise in network security.",
    source:
      "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXV/oLILyQdbIH/qWi6y0BmiDRtAcVmopBCxBAZEtOwxm+6XzHRovGNMw5LI30Yka3NqrlRXxfyq1dmyKtgDMN3Y=",
  },
  {
    icon: "award",
    src: "/murf.jpeg",
    alt: "Murf AI Voice Agent Challenge",
    title: "Murf AI Voice Agent Challenge",
    description:
      "Completed the Murf AI Voice Agent Challenge, showcasing skills in creating AI-powered voice agents using Murf AI platform.",
    source:
      "https://murf.ai/public-assets/community/tdva-nov-25/certificates/completion/mohakgupta500%40gmail.com.png",
  },
];

const Certificates = () => {
  return (
    <section className="mt-16">
      <AnimationWrapper>
        <AnimationH2>Achievements</AnimationH2>
        <AnimationH1>Certifications</AnimationH1>
      </AnimationWrapper>

      <AnimationWrapper delay={50}>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {certificates.map((cert, index) => (
            <Link
              key={index}
              href={cert.source}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 border border-gray-300 dark:border-white/20 rounded-xl bg-card hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
            >
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${
                  cert.icon === "cert"
                    ? "bg-primary/10 border-primary/20 group-hover:bg-primary/20"
                    : "bg-yellow-500/10 border-yellow-500/20 group-hover:bg-yellow-500/20"
                }`}
              >
                {cert.icon === "cert" ? (
                  <GraduationCap className="w-6 h-6 text-primary" />
                ) : (
                  <Trophy className="w-6 h-6 text-yellow-500" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 py-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Source Logo */}
              <Image
                src={cert.src}
                alt={cert.alt}
                height={28}
                width={28}
                className="rounded-md flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity hidden sm:block"
              />
            </Link>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Certificates;
