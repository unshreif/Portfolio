import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none">
      <head>
        <Script id="security-script">
          {`
            document.addEventListener('contextmenu', (e) => e.preventDefault());
            document.addEventListener('keydown', (e) => {
              if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U')) {
                e.preventDefault();
              }
            });
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
