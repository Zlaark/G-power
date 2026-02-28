export const AboutHero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] bg-[#01050A] overflow-hidden flex justify-center">
            {/* hero_bg */}
            <div
                className="absolute left-0 right-0 top-0 bottom-0"
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
                        background: '#EF3C38',
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
                        background: '#EF3C38',
                    }}
                />
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1
                    className="text-white font-bold"
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(36px, 5vw, 72px)',
                        lineHeight: '1.15',
                    }}
                >
                    About us
                </h1>

                <p
                    className="text-white mt-4"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.4vw, 20px)',
                        lineHeight: '1.5',
                    }}
                >
                    Powering India's Clean Energy Transition
                </p>
            </div>
        </section>
    );
};
