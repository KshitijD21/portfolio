import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "John Doe - Software Development Engineer",
  description:
    "Portfolio of John Doe, a passionate Software Development Engineer with expertise in modern web technologies, scalable backend systems, and innovative solutions.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    title: "John Doe - Software Development Engineer",
    description:
      "Portfolio showcasing innovative software solutions and technical expertise",
    url: "https://johndoe-portfolio.com",
    siteName: "John Doe Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Software Development Engineer",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
