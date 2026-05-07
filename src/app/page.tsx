import { Navbar } from "@/sections/navbar";
import { Hero3 } from "@/sections/Hero3";
import { BessHero } from "@/sections/BessHero";
import { ProductSlideshow } from "@/sections/ProductSlideshow";
import { SaveOnBills } from "@/sections/SaveOnBills";
import { WhyGPowerHome } from "@/sections/WhyGPowerHome";
import { GPowerAdvantage } from "@/sections/GPowerAdvantage";
import { SleekDurable } from "@/sections/SleekDurable";
import { FeaturesCarousel } from "@/sections/FeaturesCarousel";
import { Footer } from "@/sections/Footer";
import { TurnkeyEnergySolutions } from "@/sections/TurnkeyEnergySolutions";
import { GlobalPresenceMap } from "@/sections/GlobalPresenceMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero3 />
      <BessHero />
      <ProductSlideshow />
      <SaveOnBills />
      <WhyGPowerHome />
      <GPowerAdvantage />
      <SleekDurable />
      <FeaturesCarousel />
      <GlobalPresenceMap />
      <TurnkeyEnergySolutions />
      <Footer />
    </main>
  );
}
