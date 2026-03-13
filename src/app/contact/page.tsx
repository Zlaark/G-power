import { Navbar } from "@/sections/navbar";
import { ContactHero } from "@/sections/ContactHero";
import { ContactForm } from "@/sections/ContactForm";
import { GlobalPresenceMap } from "@/sections/GlobalPresenceMap";
import { Footer } from "@/sections/Footer";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <ContactHero />
            <ContactForm />
            <GlobalPresenceMap />
            <Footer />
        </main>
    );
}
