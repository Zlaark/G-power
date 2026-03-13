import { Navbar } from "@/sections/navbar";
import { TermsHero } from "@/sections/TermsHero";
import { TermsContent } from "@/sections/TermsContent";
import { Footer } from "@/sections/Footer";

export default function TermsConditionsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <TermsHero />
            <TermsContent />
            <Footer />
        </main>
    );
}
