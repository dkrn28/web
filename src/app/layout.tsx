import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AQUABLISS - Premium Plumbing Services | 24/7 Emergency",
  description: "Ukraine's premier plumbing service since 1998. Expert emergency repairs, bathroom renovations, water heaters, and smart plumbing solutions. 25-year warranty guaranteed.",
  keywords: ["AQUABLISS", "plumbing", "emergency plumbing", "bathroom renovation", "water heater", "smart plumbing", "pipe repair", "drain cleaning", "Kiev plumbing", "Ukraine plumbing"],
  authors: [{ name: "AQUABLISS Team" }],
  openGraph: {
    title: "AQUABLISS - Premium Plumbing Services",
    description: "Where Excellence Flows. 24/7 emergency plumbing services with Roman concrete reliability and aerospace precision.",
    url: "https://aquabliss.com",
    siteName: "AQUABLISS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUABLISS - Premium Plumbing Services",
    description: "Where Excellence Flows. 24/7 emergency plumbing services.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
