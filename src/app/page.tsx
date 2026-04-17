import { Navbar } from "@/sections/navbar";
import { Hero3 } from "@/sections/Hero3";
import { BessHero } from "@/sections/BessHero";
import { SaveOnBills } from "@/sections/SaveOnBills";
import { WhyGPowerHome } from "@/sections/WhyGPowerHome";
import { SolarMaintenance } from "@/sections/SolarMaintenance";
import { GPowerAdvantage } from "@/sections/GPowerAdvantage";
import { GenerateEnergy } from "@/sections/GenerateEnergy";
import { SleekDurable } from "@/sections/SleekDurable";
import { FeaturesCarousel } from "@/sections/FeaturesCarousel";
// import { GridGoesDown } from "@/sections/GridGoesDown";
// import { SolarHome } from "@/sections/SolarHome";
// import { GettingToPowerOn } from "@/sections/GettingToPowerOn";
// import { ServiceCards } from "@/sections/ServiceCards";
import { Footer } from "@/sections/Footer";
import { TurnkeyEnergySolutions } from "@/sections/TurnkeyEnergySolutions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero3 />
      <BessHero />
      <SaveOnBills />
      {/* <WhyGPowerHome /> */}
      <SolarMaintenance />
      <GPowerAdvantage />
      <GenerateEnergy />
      <SleekDurable />
      <FeaturesCarousel />
      {/* <GridGoesDown />
      <SolarHome />
      <GettingToPowerOn />
      <ServiceCards /> */}
      <TurnkeyEnergySolutions />
      <Footer />
    </main>
  );
}







