import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelrahman Tarek | .NET Backend Developer",
  description: "Portfolio of Abdelrahman Tarek, a Junior Backend Developer specializing in .NET and scalable backend systems.",
};

import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#050505] text-slate-200 w-full overflow-x-hidden">
        <Preloader />
        <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw]">
          {children}
        </div>
      </body>
    </html>
  );
}
