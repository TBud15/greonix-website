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
    "Greonix - Резиновая Крошка от Производителя | Производство и Доставка по Украине и Европе",
  description:
    "Greonix - ведущий производитель резиновой крошки в Украине. Высококачественная резиновая крошка для спортивных покрытий, детских площадок, строительства и других целей. Доставка по всей Украине и Европе. 15000 тонн годового объема производства.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
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
