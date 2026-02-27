import { Navbar } from "@/sections/navbar";
import { Hero3 } from "@/sections/Hero3";
import { SaveOnBills } from "@/sections/SaveOnBills";
import { SolarMaintenance } from "@/sections/SolarMaintenance";
import { GenerateEnergy } from "@/sections/GenerateEnergy";
import { SleekDurable } from "@/sections/SleekDurable";
import { FeaturesCarousel } from "@/sections/FeaturesCarousel";
import { GridGoesDown } from "@/sections/GridGoesDown";
import { SolarHome } from "@/sections/SolarHome";
import { GettingToPowerOn } from "@/sections/GettingToPowerOn";
import { ServiceCards } from "@/sections/ServiceCards";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero3 />
      <SaveOnBills />
      <SolarMaintenance />
      <GenerateEnergy />
      <div className="py-16 bg-white" />
      <SleekDurable />
      <FeaturesCarousel />
      <GridGoesDown />
      <SolarHome />
      <GettingToPowerOn />
      <ServiceCards />
      <Footer />
    </main>
  );
}







