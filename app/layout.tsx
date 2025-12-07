import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/header";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserratBody = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QDAS Global Group",
  description:
    "Building Africa's Digital, Energy & Infrastructure Future. QDAS Global Group delivers innovative solutions in technology, renewable energy, and construction across Africa.",
  openGraph: {
    title: "QDAS Global Group",
    description:
      "Building Africa's Digital, Energy & Infrastructure Future through innovative solutions in technology, renewable energy, and construction.",
  },
  twitter: {
    card: "summary_large_image",
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
        className={`${montserrat.variable} ${montserratBody.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
