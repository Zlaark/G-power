import { Navbar } from "@/sections/navbar";
import { AboutHero } from "@/sections/AboutHero";
import { EnergyStorage } from "@/sections/EnergyStorage";
import { FutureStorage } from "@/sections/FutureStorage";
import { BessSolutions } from "@/sections/BessSolutions";
import { AboutBanner } from "@/sections/AboutBanner";
import { HithiumHiner } from "@/sections/HithiumHiner";
import { CustomBatteryPacks } from "@/sections/CustomBatteryPacks";
import { EnergyManagement } from "@/sections/EnergyManagement";
import { AboutBanner2 } from "@/sections/AboutBanner2";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <AboutHero />
            <EnergyStorage />
            <FutureStorage />
            <BessSolutions />
            <AboutBanner />
            <HithiumHiner />
            <CustomBatteryPacks />
            <EnergyManagement />
            <AboutBanner2 />
            <Footer />
        </main>
    );
}


