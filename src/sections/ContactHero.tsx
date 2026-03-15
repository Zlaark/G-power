import { FadeIn } from "@/components/FadeIn";

export const ContactHero = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[450px] bg-[#01050A] overflow-hidden flex justify-center">
            {/* hero_bg */}
            <div
                className="absolute left-0 right-0 top-0 bottom-0 animate-ken-burns"
                style={{
                    background: "url('/solar-hero-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Header - bg_gradient */}
            <div
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, rgba(1, 5, 10, 0) 20%, #01050A 100%)',
                    opacity: 0.7
                }}
            />

            {/* Rectangle 8 - top gradient */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: '100%',
                    height: '300px',
                    left: '0px',
                    top: '0px',
                    background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.79,
                }}
            />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <FadeIn delay={100} direction="up">
                    <div className="mb-6 inline-block bg-[#EF3C38]/10 border border-[#EF3C38]/20 px-6 py-2 rounded-full">
                        <span className="text-[#EF3C38] text-sm md:text-base font-semibold uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            We're Here to Help
                        </span>
                    </div>
                </FadeIn>
                
                <FadeIn delay={200} direction="up">
                    <h1
                        className="text-white font-bold"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(36px, 5vw, 72px)',
                            lineHeight: '1.15',
                        }}
                    >
                        Get In Touch
                    </h1>
                </FadeIn>

                <FadeIn delay={300} direction="up">
                    <p
                        className="text-white mt-6 opacity-80 max-w-[700px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 400,
                            fontSize: 'clamp(14px, 1.4vw, 20px)',
                            lineHeight: '1.6',
                        }}
                    >
                        Have questions about our renewable energy solutions? Our expert team is ready to help you find the perfect solution for your needs.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
