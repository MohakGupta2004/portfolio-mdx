import { Providers } from "@/components/providers";
import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto max-w-175">
        <Providers>
          <Header />
          <main className="glow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
