import { FadeIn } from "@/components/FadeIn";

export const DisclaimerHero = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] bg-[#01050A] overflow-hidden flex justify-center">
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
                    <h1
                        className="text-white font-bold"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(36px, 5vw, 72px)',
                            lineHeight: '1.15',
                        }}
                    >
                        Disclaimer
                    </h1>
                </FadeIn>
            </div>
        </section>
    );
};
