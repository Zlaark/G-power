export const SaveOnBills = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes slideRight {
                        0% { opacity: 0; transform: translateX(-50px); }
                        100% { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes floatCard {
                        0%, 100% { transform: translateY(0px) scale(1); }
                        50% { transform: translateY(-15px) scale(1.01); }
                    }
                    @keyframes pulseGlow {
                        0%, 100% { box-shadow: 0 0 5px rgba(239, 60, 56, 0.2); border-color: rgba(239, 60, 56, 0.8); width: 66.5px; }
                        50% { box-shadow: 0 0 20px rgba(239, 60, 56, 0.8); border-color: rgba(239, 60, 56, 1); width: 100px; }
                    }
                    @keyframes textShine {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 200% 50%; }
                    }
                    @keyframes subtleFloat {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-6px); }
                    }

                    .animate-slide-right { animation: slideRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                    .animate-float-card { animation: floatCard 8s max-height ease-in-out infinite; }
                    .animate-glow-line { animation: pulseGlow 4s ease-in-out infinite; }
                    
                    /* Continuous Title Animation */
                    .animate-continuous-title {
                        animation: slideRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, textShine 8s linear infinite 1.2s, subtleFloat 6s ease-in-out infinite 1.2s;
                        background: linear-gradient(90deg, #121010 0%, #EF3C38 30%, #121010 60%);
                        background-size: 200% auto;
                        color: transparent;
                        -webkit-background-clip: text;
                        background-clip: text;
                    }

                    /* Continuous Text Animation */
                    .animate-continuous-text {
                        animation: slideRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, subtleFloat 7s ease-in-out infinite 1.4s;
                    }

                    .anim-delay-200 { animation-delay: 200ms; }
                    .anim-delay-400 { animation-delay: 400ms; }
                `}} />

                {/* Top Content: Title & Description */}
                <div className="w-full max-w-[1125px] px-[20px] md:px-[60px] lg:ml-[86px] lg:px-0 pt-[80px] md:pt-[120px] lg:pt-[160px] flex flex-col gap-[15px] md:gap-[23px]">
                    <h2
                        className="font-semibold leading-tight md:leading-[49px] w-full opacity-0 animate-continuous-title anim-delay-200"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(32px, 5vw, 40px)' }}
                    >
                        Save On Electricity Bills
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full opacity-0 animate-continuous-text anim-delay-400"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(16px, 3vw, 28px)' }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Solar Panel Image Area */}
                <div className="relative w-full h-auto min-h-[300px] md:h-[500px] mt-[40px]">

                    {/* Monthly Bill Savings Card */}
                    <div className="relative md:absolute md:left-[66px] md:bottom-[20px] w-full md:w-[735px] max-w-[calc(100%-40px)] mx-auto md:mx-0 bg-white/90 backdrop-blur-md hover:backdrop-blur-xl rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 animate-float-card border border-white/40 mb-[40px] md:mb-0">
                        <div className="px-[20px] md:px-[39px] py-[30px] md:py-[50px]">
                            <div className="flex flex-col gap-[15px] md:gap-[19px]">
                                {/* Decorative Lines */}
                                <div className="flex items-center gap-[15px] md:gap-[30px]">
                                    <div className="w-[40px] md:w-[66.5px] h-0 border-[3px] md:border-[3.5px] rounded-full animate-glow-line" />
                                    <div className="w-[40px] md:w-[66.5px] h-0 border-[1.5px] border-[#B1B1B1] transition-colors hover:border-[#EF3C38]" />
                                    <div className="w-[40px] md:w-[66.5px] h-0 border-[1.5px] border-[#B1B1B1] transition-colors hover:border-[#EF3C38]" />
                                </div>

                                {/* Subtitle */}
                                <h3
                                    className="text-[#121010] font-medium leading-tight md:leading-[34px] w-full max-w-[656px]"
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 4vw, 28px)' }}
                                >
                                    Monthly Bill Savings
                                </h3>

                                {/* Body Text */}
                                <p
                                    className="text-[#121010]/80 font-normal leading-normal md:leading-[22px] w-full max-w-[656px]"
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 2.5vw, 18px)' }}
                                >
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
