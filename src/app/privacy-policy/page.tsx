import { Navbar } from "@/sections/navbar";
import { PrivacyPolicyHero } from "@/sections/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "@/sections/PrivacyPolicyContent";
import { Footer } from "@/sections/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <PrivacyPolicyHero />
            <PrivacyPolicyContent />
            <Footer />
        </main>
    );
}
