import { Footer } from "@/components/footer";
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
  title: "Kshitij Dumbre - Software Development Engineer",
  description:
    "Portfolio of Kshitij Dumbre, a passionate Software Development Engineer with expertise in modern web technologies, scalable backend systems, and innovative solutions.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Kshitij Dumbre",
  ],
  authors: [{ name: "Kshitij Dumbre" }],
  creator: "Kshitij Dumbre",
  openGraph: {
    title: "Kshitij Dumbre - Software Development Engineer",
    description:
      "Portfolio showcasing innovative software solutions and technical expertise",
    url: "https://kshitijdumbre-portfolio.com",
    siteName: "Kshitij Dumbre Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kshitij Dumbre - Software Development Engineer",
    description:
      "Portfolio showcasing innovative software solutions and technical expertise",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
