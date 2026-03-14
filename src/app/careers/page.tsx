import type { Metadata } from "next";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { CareersHero } from "@/sections/CareersHero";
import { WhyWorkAtGPower } from "@/sections/WhyWorkAtGPower";
import { WhatWeOffer } from "@/sections/WhatWeOffer";
import { OpenPositions } from "@/sections/OpenPositions";
import { CareersCta } from "@/sections/CareersCta";

export const metadata: Metadata = {
  title: "Careers | GPower",
  description:
    "Explore career opportunities at GPower and build your future in clean energy.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CareersHero />
      <WhyWorkAtGPower />
      <WhatWeOffer />
      <OpenPositions />
      <CareersCta />
      <Footer />
    </main>
  );
}
