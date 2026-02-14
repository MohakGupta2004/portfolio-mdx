import { Providers } from "@/components/providers";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { Hanken_Grotesk } from "next/font/google";
import Footer from "@/components/footer";
import { Metadata } from "next";
import ThemeSwitcher from "@/components/theme-switch";

const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohak Gupta - Full Stack Developer",
  description:
    "Full Stack Software Developer specializing in web applications, dApps, and AI development. Building with TypeScript, Next.js, and modern technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "TypeScript",
    "Next.js",
    "React",
    "Blockchain",
    "dApps",
    "AI",
  ],
  authors: [{ name: "Mohak Gupta" }],
  openGraph: {
    title: "Mohak Gupta - Full Stack Developer",
    description:
      "Full Stack Software Developer specializing in web applications, dApps, and AI development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohak Gupta - Full Stack Developer",
    description:
      "Full Stack Software Developer specializing in web applications, dApps, and AI development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${grotesk.variable}`}>
      <body className="w-full font-grotesk min-h-screen">
        <Providers>
          <Sidebar />
          <Header />
          <div className="absolute top-4 right-4 m-4 hidden md:block">

          <ThemeSwitcher/>
          </div>
          <main className="md:pl-16 mx-auto max-w-3xl px-4 sm:px-6 md:px-8 pb-8 md:mt-20 mt-9">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
