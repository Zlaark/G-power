import { Navbar } from "@/sections/navbar";
import { ContactHero } from "@/sections/ContactHero";
import { ContactForm } from "@/sections/ContactForm";
import { ServiceCenters } from "@/sections/ServiceCenters";
import { GlobalPresenceMap } from "@/sections/GlobalPresenceMap";
import { Footer } from "@/sections/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export default function ContactPage() {
    return (
        <main className={`${poppins.className} contact-page-font flex min-h-screen flex-col`}>
            <style>{`
                .contact-page-font,
                .contact-page-font * {
                    font-family: ${poppins.style.fontFamily}, sans-serif !important;
                }
            `}</style>
            <Navbar />
            <ContactHero />
            <ContactForm />
            <ServiceCenters />
            <GlobalPresenceMap />
            <Footer />
        </main>
    );
}
