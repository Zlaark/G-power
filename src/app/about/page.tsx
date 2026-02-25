import { Navbar } from "@/sections/navbar";
import { AboutHero } from "@/sections/AboutHero";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <AboutHero />
            <Footer />
        </main>
    );
}
