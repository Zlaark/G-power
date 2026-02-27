export const AboutHero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] bg-[#01050A] overflow-hidden flex justify-center">
            {/* hero_bg */}
            <div
                className="absolute left-0 right-0 top-[0px] md:top-[-34px] bottom-0"
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

            {/* Rectangle 7 */}
            <div
                className="absolute pointer-events-none hidden lg:block"
                style={{
                    width: '1107px',
                    height: '1404px',
                    left: '-35px',
                    top: '0px',
                    background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.54,
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'top left'
                }}
            />

            {/* Rectangle 8 */}
            <div
                className="absolute pointer-events-none hidden lg:block"
                style={{
                    width: '2022.35px',
                    height: '300px',
                    left: '-60px',
                    top: '25px',
                    background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.54,
                    transform: 'rotate(0.33deg)',
                    transformOrigin: 'top left'
                }}
            />

            {/* Centered Content Container within 1920px max-width */}
            <div className="absolute inset-0 max-w-[1920px] mx-auto w-full">
                {/* Text Content Block (Frame 6) */}
                <div className="absolute left-[20px] lg:left-[86px] top-1/2 -translate-y-1/2 flex flex-col items-start gap-[20px] pr-4">
                    <h1
                        className="text-left text-white font-bold w-full max-w-[967px]"
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 'clamp(26px, 4vw, 52px)',
                            lineHeight: '1.18',
                        }}
                    >
                        Powering India’s Clean Energy Transition
                    </h1>

                    <p
                        className="text-left text-white w-full max-w-[525px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 400,
                            fontSize: 'clamp(12px, 1.3vw, 16px)',
                            lineHeight: '1.5',
                        }}
                    >
                        We Customise solar solutions to fit your unique energy requirements an budget
                    </p>
                </div>

                {/* Button Block (Frame 4) - Positioned at 872px top equivalent or bottom offset */}
                <div className="absolute left-[20px] lg:left-[86px] top-[872px] max-md:top-[auto] max-md:bottom-[100px]">
                    <button
                        className="flex flex-row items-center justify-center gap-[14px] bg-white rounded-[94px] cursor-pointer px-[16px]"
                        style={{ height: '52px', minWidth: '200px' }}
                    >
                        <span
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '140%',
                                color: '#13152C',
                            }}
                        >
                            Talk to a BESS Expert
                        </span>
                        <div
                            className="flex items-center justify-center bg-[#13152C] rounded-full flex-shrink-0"
                            style={{ width: '36px', height: '36px' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flex: 'none', order: 0, flexGrow: 0 }}>
                                <path d="M5.83334 14.1667L14.1667 5.83333M14.1667 5.83333H7.5M14.1667 5.83333V12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};
