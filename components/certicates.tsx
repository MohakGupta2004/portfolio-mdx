import Image from "next/image";
import { CardAction } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const certificates = [
  {
    src: "/linkedin.svg",
    alt: "CompTIA Pentest+ Certificate Preparation",
    title: "CompTIA Pentest+ Certificate Preparation",
    description:
      "Completed the CompTIA Pentest+ Certificate Preparation course on LinkedIn Learning, gaining skills in penetration testing and vulnerability assessment.",
    source:
      "https://www.linkedin.com/learning/certificates/4f2f31077056cd86e5b5f474099fa28ba30c72b3d1dad6b2c8a7591520ba02b1?trk=share_certificate",
  },
  {
    src: "/linkedin.svg",
    alt: "Git Intermediate Techniques",
    title: "Git Intermediate Techniques",
    description:
      "Completed the Git Intermediate Techniques course on LinkedIn Learning, increasing collaboration skills in version control and collaborative development using Git.",
    source:
      "https://www.linkedin.com/learning/certificates/e8df51208279935e5b759419aa0b3bd050990bc4315dd208369fcda76a8749f7",
  },
  {
    src: "/secops.jpg",
    alt: "Certified Network Security Practitioner",
    title: "Certified Network Security Practitioner",
    description:
      "Earned the Certified Network Security Practitioner (CNSP) certification, demonstrating expertise in network security.",
    source:
      "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXV/oLILyQdbIH/qWi6y0BmiDRtAcVmopBCxBAZEtOwxm+6XzHRovGNMw5LI30Yka3NqrlRXxfyq1dmyKtgDMN3Y=",
  },
  {
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
    <section className="mt-12">
      <div>
        <h2 className="text-xs text-gray-600 dark:text-gray-500">Featured</h2>
        <h1 className="text-2xl font-grotesk font-bold text-gray-800 dark:text-gray-300">
          Certificates
        </h1>
      </div>
      <div>
        {certificates.map((certificates, index) => (
          <div
            key={index}
            className="mt-2 w-full border rounded-4xl shadow-inner dark:shadow-white/10 bg-card p-4"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
              <Image
                src={certificates.src}
                alt={certificates.alt}
                height={40}
                width={40}
                className="rounded-4xl"
              />
              <div>
                <div className="text-black dark:text-white font-bold font-grotesk text-md">
                  {certificates.title}
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs overflow-auto">
                    {certificates.description}
                  </p>
                </div>
              </div>
              <CardAction className="flex-col items-center mt-4">
                <Link
                  href={certificates.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge variant={"secondary"}>
                    view details <ArrowRight />
                  </Badge>
                </Link>
              </CardAction>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
