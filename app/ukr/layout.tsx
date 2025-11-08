// app/ukr/layout.tsx
import type { Metadata } from "next";

// components import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title:
    "Greonix - Гумова Крихта від Виробника | Виробництво та Доставка по Україні та Європі",
  description:
    "Greonix - провідний виробник гумової крихти в Україні. Високоякісна гумова крихта для спортивних покриттів, дитячих майданчиків, будівництва та інших цілей.. Доставка по всій Україні та Європі. 15000 тонн річного обсягу виробництва.",
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
