import { Navbar } from "@/sections/navbar";
import { ContactHero } from "@/sections/ContactHero";
import { ContactForm } from "@/sections/ContactForm";
import { Footer } from "@/sections/Footer";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <ContactHero />
            <ContactForm />
            <Footer />
        </main>
    );
}
