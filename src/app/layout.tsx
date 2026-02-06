import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LandingNavbar from "@/components/LandingNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky - Trade Smarter with AI-Powered Insights",
  description: "Your gateway to intelligent trading with AI-powered insights, real-time data, and a thriving community. Commission-free stock trading platform.",
  keywords: ["trading", "stocks", "AI trading", "copy trading", "investment", "portfolio management"],
  openGraph: {
    title: "Sky - Trade Smarter with AI-Powered Insights",
    description: "Your gateway to intelligent trading with AI-powered insights, real-time data, and a thriving community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LandingNavbar />
        {children}
      </body>
    </html>
  );
}
