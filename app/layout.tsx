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
  metadataBase: new URL("https://bththm.com"),

  verification: {
    google: "icuHUbQBEnZiuBcvrgKjJrECPQWdLvdcRKPEogzMrvI",
  },

  title: {
    default:
      "BTHTHM | AI Automation, Business Automation, Websites & Custom Software",
    template: "%s | BTHTHM",
  },

  description:
    "BTHTHM helps businesses work smarter with AI automation, business automation, website design, custom software, mobile apps, and connected business systems.",

  keywords: [
    "AI automation",
    "AI business automation",
    "business automation",
    "business automation services",
    "AI automation services",
    "website design",
    "website development",
    "custom software",
    "custom software development",
    "business software",
    "mobile app development",
    "AI solutions",
    "business technology",
    "SEO services",
    "BTHTHM",
  ],

  alternates: {
    canonical: "https://bththm.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "BTHTHM | AI Automation, Business Automation, Websites & Custom Software",
    description:
      "AI automation, business automation, website design, custom software, mobile apps, and connected business systems for growing businesses.",
    url: "https://bththm.com",
    siteName: "BTHTHM",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}