export const GenerateEnergy = () => {
    return (
        <section className="relative w-full bg-[#FBFBFB] overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative min-h-[700px]">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes slideLeftEnter {
                        0% { opacity: 0; transform: translateX(-40px); }
                        100% { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes pulseWidth {
                        0%, 100% { width: 66.5px; opacity: 0.8; border-color: rgba(239, 60, 56, 0.8); box-shadow: 0 0 5px rgba(239, 60, 56, 0.2); }
                        50% { width: 90px; opacity: 1; border-color: rgba(239, 60, 56, 1); box-shadow: 0 0 15px rgba(239, 60, 56, 0.6); }
                    }
                    @keyframes floatImage {
                        0%, 100% { transform: translateY(0px); filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.1)); }
                        50% { transform: translateY(-15px); filter: drop-shadow(0px 20px 30px rgba(0,0,0,0.2)); }
                    }
                    @keyframes floatText {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-5px); }
                    }
                    .animate-pulse-line {
                        animation: pulseWidth 3s ease-in-out infinite;
                    }
                    .animate-slide-left {
                        animation: slideLeftEnter 1s ease-out forwards, floatText 6s ease-in-out infinite 1s;
                    }
                    .animate-float-img {
                        animation: slideLeftEnter 1.2s ease-out forwards, floatImage 7s ease-in-out infinite 1.2s;
                    }
                    .anim-delay-200 { animation-delay: 200ms; }
                    .anim-delay-400 { animation-delay: 400ms; }
                `}} />

                {/* Content Container (Flex on Mobile, Absolute on Desktop) */}
                <div className="w-full h-full flex flex-col lg:block px-[20px] md:px-[60px] lg:px-0 pt-[80px] pb-[60px] lg:pt-0 lg:pb-0 relative min-h-screen lg:min-h-[700px]">

                    {/* Left Side: Text Content */}
                    <div className="relative lg:absolute lg:left-[122px] lg:top-[237px] w-full lg:w-[635px] flex flex-col gap-[15px] md:gap-[23px] mb-[40px] lg:mb-0 z-10">
                        {/* Red Accent Line */}
                        <div className="h-0 border-[3.5px] border-[#EF3C38] rounded-full animate-pulse-line" />

                        {/* Text */}
                        <div className="flex flex-col gap-[15px] md:gap-[23px] opacity-0 animate-slide-left anim-delay-200 mt-[10px] lg:mt-0">
                            <h2
                                className="text-[#121010] font-semibold leading-tight md:leading-[49px] w-full"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(32px, 5vw, 40px)' }}
                            >
                                Generate Energy
                            </h2>
                            <p
                                className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(16px, 3vw, 28px)' }}
                            >
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="relative lg:absolute lg:right-[80px] lg:top-[107px] w-full lg:w-[580px] h-[300px] md:h-[400px] lg:h-[520px] opacity-0 animate-float-img anim-delay-400 mt-auto lg:mt-0">
                        <img
                            src="/home3.png"
                            alt="Solar Energy Generation"
                            className="w-full h-full object-cover"
                            style={{ borderRadius: '20px 20px 0px 0px' }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
