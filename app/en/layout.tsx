// app/en/layout.tsx
import type { Metadata } from "next";

// components import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
