import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Providers } from "./providers/provider";
import Header from "./components/header";
import Footer from "./components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahul Behera - About Me",
  icons: {
    icon: "/rahul_behera_profile.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased flex flex-col min-h-screen relative`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 pb-32">
            <Header />
            <main className="flex-1 break-words">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
