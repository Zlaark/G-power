import { FadeIn } from "@/components/FadeIn";
import { LegalBreadcrumbs } from "@/components/LegalBreadcrumbs";

export const PrivacyPolicyHero = () => {
    return (
        <section className="relative w-full h-[50vh] min-h-[360px] bg-[#01050A] overflow-hidden flex justify-center">
            {/* hero_bg - Professional Legal Image */}
            <div
                className="absolute left-0 right-0 top-0 bottom-0 animate-ken-burns"
                style={{
                    background: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1920')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <FadeIn delay={100} direction="up">
                    <LegalBreadcrumbs currentPage="Privacy Policy" />
                    <h1
                        className="text-white font-bold"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(36px, 5vw, 72px)',
                            lineHeight: '1.15',
                        }}
                    >
                        Privacy Policy
                    </h1>
                </FadeIn>
            </div>
        </section>
    );
};
