import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhmd Samy",
  description: "A showcase of innovative web development projects and skills using cutting-edge technologies.",
  keywords: "portfolio, web development, React, Next.js, Three.js, 3D, animation, developer",
  icons: {
    icon: [
      {
        url: "/MLogo.png",
        sizes: "any",
      },
    ],
  },
};

// For custom fonts in Next.js 13+, use this pattern instead of manual head tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
