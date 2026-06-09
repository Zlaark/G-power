import { Navbar } from "@/sections/navbar";
import { AboutHero } from "@/sections/AboutHero";
import { OurStory } from "@/sections/OurStory";
import { StrategicPartnerships } from "@/sections/StrategicPartnerships";
import { BessSolutions } from "@/sections/BessSolutions";
import { HithiumHiner } from "@/sections/HithiumHiner";
import { EnergyManagement } from "@/sections/EnergyManagement";
import { OurJourney } from "@/sections/OurJourney";
import { Leadership } from "@/sections/Leadership";
import { SleekDurable } from "@/sections/SleekDurable";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <AboutHero />
            <OurStory />
            <StrategicPartnerships />
            <BessSolutions />
            <HithiumHiner />
            <EnergyManagement />
            <OurJourney />
            <Leadership />
            {/* <SleekDurable showButton={false} /> */}
            <Footer />
        </main>
    );
}


