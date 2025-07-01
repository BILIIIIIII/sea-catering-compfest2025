import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Navigation } from "@/components/layout/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEA Catering - Healthy Meals, Anytime, Anywhere",
  description:
    "Customizable healthy meal service with delivery all across Indonesia. Fresh ingredients, detailed nutritional information, and nationwide delivery.",
};

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/subscription", label: "Subscription" },
  { href: "/contact", label: "Contact Us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <Providers>
          <Navigation items={navigationItems} />
          <div className="w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
