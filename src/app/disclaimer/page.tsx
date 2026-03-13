import { Navbar } from "@/sections/navbar";
import { DisclaimerHero } from "@/sections/DisclaimerHero";
import { DisclaimerContent } from "@/sections/DisclaimerContent";
import { Footer } from "@/sections/Footer";

export default function DisclaimerPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <DisclaimerHero />
            <DisclaimerContent />
            <Footer />
        </main>
    );
}
