import { Analytics } from "@vercel/analytics/next";

// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";

// components import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Greonix - Crumb Rubber Manufacturer | Production and Delivery Across Ukraine and Europe",
  description:
    "Greonix - leading crumb rubber manufacturer in Ukraine. High-quality crumb rubber for sports surfaces, playgrounds, construction, and other applications. Delivery across Ukraine and Europe. 15,000 tons annual production capacity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
