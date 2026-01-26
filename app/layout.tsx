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
      <body className="w-full ">
        <Providers>
          <Header />
          <main className="glow mx-auto max-w-3xl md:px-0">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
