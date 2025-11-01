import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

import SectionOne from "./components/LandingPage/SectionOne";
import SectionTwo from "./components/LandingPage/SectionTwo";
import SectionThree from "./components/LandingPage/SectionThree";
import SectionFour from "./components/LandingPage/SectionFour";
import SectionFive from "./components/LandingPage/SectionFive";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}
