import { Navbar } from "@/sections/navbar";
import { AboutHero } from "@/sections/AboutHero";
import { StrategicPartnerships } from "@/sections/StrategicPartnerships";
import { BessSolutions } from "@/sections/BessSolutions";
import { HithiumHiner } from "@/sections/HithiumHiner";
import { CustomBatteryPacks } from "@/sections/CustomBatteryPacks";
import { EnergyManagement } from "@/sections/EnergyManagement";
import { OurJourney } from "@/sections/OurJourney";
import { AboutBanner2 } from "@/sections/AboutBanner2";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <AboutHero />
            <StrategicPartnerships />
            <BessSolutions />
            <HithiumHiner />
            <CustomBatteryPacks />
            <EnergyManagement />
            <OurJourney />
            <AboutBanner2 />
            <Footer />
        </main>
    );
}


