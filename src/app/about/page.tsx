import { Navbar } from "@/sections/navbar";
import { AboutHero } from "@/sections/AboutHero";
import { EnergyStorage } from "@/sections/EnergyStorage";
import { FutureStorage } from "@/sections/FutureStorage";
import { BessSolutions } from "@/sections/BessSolutions";
import { AboutBanner } from "@/sections/AboutBanner";
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
            <Footer />
        </main>
    );
}


