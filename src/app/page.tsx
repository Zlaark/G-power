import { Navbar } from "@/sections/navbar";
import { Hero3 } from "@/sections/Hero3";
import { BessHero } from "@/sections/BessHero";
import { AboutUsStats } from "../sections/AboutUsStats";
import { BessSolutions } from "@/sections/BessSolutions";
import { ProductSlideshow } from "@/sections/ProductSlideshow";
import { WhyGPower } from "@/sections/WhyGPower";
import { Footer } from "@/sections/Footer";
import { TurnkeyEnergySolutions } from "@/sections/TurnkeyEnergySolutions";
import { GlobalPresenceMap } from "@/sections/GlobalPresenceMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero3 />
      <BessHero />
      <AboutUsStats />
      <BessSolutions />
      <WhyGPower />
      <ProductSlideshow />
      <GlobalPresenceMap />
      <TurnkeyEnergySolutions />
      <Footer />
    </main>
  );
}
