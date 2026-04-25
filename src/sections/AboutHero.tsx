export const AboutHero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] bg-[#01050A] overflow-hidden flex justify-center">
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

            {/* Red decorative bars - right side */}
            <div
                className="absolute pointer-events-none hidden lg:block"
                style={{
                    left: '88.12%',
                    right: '4.11%',
                    top: '0%',
                    bottom: '0%',
                    opacity: 0.37,
                }}
            >
                {/* Top red bar */}
                <div
                    className="absolute"
                    style={{
                        left: '0%',
                        right: '0%',
                        top: '0%',
                        bottom: '85.22%',
                        background: '#0A5191',
                    }}
                />
                {/* Bottom red bar */}
                <div
                    className="absolute"
                    style={{
                        left: '0%',
                        right: '0%',
                        top: '16.4%',
                        bottom: '0%',
                        background: '#0A5191',
                    }}
                />
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1
                    className="animate-hero-reveal text-white font-bold"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 'clamp(36px, 5vw, 72px)',
                        lineHeight: '1.15',
                    }}
                >
                    About G-Power
                </h1>

                <p
                    className="animate-hero-reveal-delay-1 text-white mt-4"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.4vw, 20px)',
                        lineHeight: '1.5',
                    }}
                >
                    Powering the Next Generation of Energy
                </p>
                <div className="animate-hero-reveal-delay-2 mt-8 sm:mt-10">
                    <a href="#energy-storage" className="px-8 py-3.5 sm:px-10 sm:py-4 bg-[#0A5191] text-white rounded-full font-medium btn-sweep-blue btn-glow flex items-center gap-3 group transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <span>Discover Our Vision</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
