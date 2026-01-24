import { Providers } from "@/components/providers";
import "./globals.css";
import Header from "@/components/header";
import { Hanken_Grotesk } from "next/font/google";
import { Playwrite_NG_Modern } from "next/font/google";
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
      <body className="w-full mx-auto max-w-2xl md:px-0">
        <Providers>
          <Header />
          <main className="glow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
