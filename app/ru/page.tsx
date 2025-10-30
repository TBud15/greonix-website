import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

import SectionOne from "./components/LandingPage/SectionOne";
import SectionTwo from "./components/LandingPage/SectionTwo";

export default function Page() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
