export const AboutHero = () => {
    return (
        <section className="relative w-full h-[834px] bg-white overflow-hidden flex justify-center">
            {/* The Outer Frame 2147225730 */}
            <div
                className="absolute overflow-hidden"
                style={{
                    left: '8px',
                    right: '8px',
                    height: '818px',
                    top: '8px',
                    borderRadius: '16px',
                    background: "linear-gradient(0deg, rgba(34, 79, 68, 0.3), rgba(34, 79, 68, 0.3)), url('/solar-hero-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Rectangle 8 (Dark Gradient overlay) */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        width: '2022px',
                        height: '818px',
                        left: '-86px',
                        top: '0px',
                        background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                        opacity: 0.54
                    }}
                />

                {/* Centered Content (Frame 6) */}
                <div
                    className="absolute flex flex-col items-center justify-center p-0"
                    style={{
                        width: '967px',
                        height: '302px',
                        left: 'calc(50% - 967px/2 + 0.5px)',
                        top: 'calc(50% - 302px/2 - 69.84px)',
                        gap: '20px'
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '64px',
                            lineHeight: '75px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            width: '967px',
                            height: '150px',
                            margin: 0
                        }}
                    >
                        Powering India’s Clean Energy Transition
                    </h1>

                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            width: '525px',
                            height: '60px',
                            margin: 0
                        }}
                    >
                        We Customise solar solutions to fit your unique energy requirements an budget
                    </p>

                    <button
                        className="flex flex-row items-center justify-center p-[8px_16px] gap-[14px] bg-white rounded-[94px] cursor-pointer"
                        style={{
                            width: '226px',
                            height: '52px'
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '140%',
                                color: '#13152C',
                                width: '144px',
                                height: '20px'
                            }}
                        >
                            Talk to a BESS Expert
                        </span>
                        <div
                            className="flex flex-row items-center justify-center p-[12px] gap-[10px] bg-[#13152C] rounded-[11111px] group-hover:bg-[#FF3131] transition-colors duration-300"
                            style={{
                                width: '36px',
                                height: '36px'
                            }}
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
