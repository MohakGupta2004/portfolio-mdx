import { Providers } from "@/components/providers";
import "./globals.css";
import Header from "@/components/header";
import { Hanken_Grotesk } from "next/font/google";
import { Playwrite_NG_Modern } from "next/font/google";
import Footer from "@/components/footer";
const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={grotesk.variable}>
      <body className="w-full ">
        <Providers>
          <Header />
          <main className="glow mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
