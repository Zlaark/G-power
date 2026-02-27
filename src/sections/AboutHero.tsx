export const AboutHero = () => {
    return (
        <section className="relative w-full h-screen min-h-[500px] max-h-[900px] bg-white overflow-hidden flex justify-center">
            {/* The Outer Frame */}
            <div
                className="absolute inset-[8px] overflow-hidden"
                style={{
                    borderRadius: '16px',
                    background: "linear-gradient(0deg, rgba(34, 79, 68, 0.3), rgba(34, 79, 68, 0.3)), url('/solar-hero-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark Gradient overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                        opacity: 0.54
                    }}
                />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px] md:px-[40px]" style={{ gap: '20px' }}>
                    <h1
                        className="text-center text-white font-bold w-full max-w-[967px]"
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 'clamp(26px, 4vw, 52px)',
                            lineHeight: '1.18',
                        }}
                    >
                        Powering India’s Clean Energy Transition
                    </h1>

                    <p
                        className="text-center text-white w-full max-w-[525px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 400,
                            fontSize: 'clamp(12px, 1.3vw, 16px)',
                            lineHeight: '1.5',
                        }}
                    >
                        We Customise solar solutions to fit your unique energy requirements an budget
                    </p>

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
