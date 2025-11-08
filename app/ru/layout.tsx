// app/ru/layout.tsx
import type { Metadata } from "next";

// components import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
