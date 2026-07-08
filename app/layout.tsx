import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import { profile } from "@/data/profile";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    siteName: profile.name,
    locale: "ko_KR",
    images: [profile.avatarUrl],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    images: [profile.avatarUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
