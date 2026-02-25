export const GettingToPowerOn = () => {
    return (
        <section className="relative w-full bg-white pt-[60px] md:pt-[100px] lg:pt-[140px] pb-[80px] md:pb-[140px] lg:pb-[200px]">
            <div className="mx-auto max-w-[1920px] relative px-[20px] md:px-[40px] lg:px-[86px]">

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes splitReveal {
                        0% { opacity: 0; transform: perspective(400px) rotateX(90deg) scale(0.9); }
                        100% { opacity: 1; transform: perspective(400px) rotateX(0deg) scale(1); }
                    }
                    @keyframes slideFadeBlur {
                        0% { opacity: 0; transform: translateX(50px); filter: blur(10px); }
                        100% { opacity: 1; transform: translateX(0); filter: blur(0px); }
                    }
                    @keyframes popIn {
                        0% { opacity: 0; transform: scale(0.5) translateY(20px); filter: blur(5px); }
                        70% { transform: scale(1.05) translateY(-5px); filter: blur(0px); }
                        100% { opacity: 1; transform: scale(1) translateY(0); }
                    }
                    @keyframes elegantFloat {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-8px); }
                    }
                    @keyframes pulseGlowRed {
                        0%, 100% { filter: drop-shadow(0 0 5px rgba(239, 60, 56, 0.4)); }
                        50% { filter: drop-shadow(0 0 15px rgba(239, 60, 56, 0.9)); }
                    }
                    @keyframes pulseTextShadow {
                        0%, 100% { text-shadow: 0 0 0px rgba(239,60,56,0); }
                        50% { text-shadow: 0 0 10px rgba(239,60,56,0.3); }
                    }
                    .animate-title-reveal {
                        animation: splitReveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    }
                    .animate-desc-reveal {
                        animation: slideFadeBlur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s;
                    }
                    .animate-pop-in-column {
                        opacity: 0;
                        animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    }
                    .animate-continuous-elegant {
                        animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, elegantFloat 6s ease-in-out infinite 0.8s;
                        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                        padding: 20px;
                        border-radius: 16px;
                    }
                    .animate-continuous-elegant:hover {
                        transform: translateY(-15px) scale(1.03) !important;
                        background: rgba(239, 60, 56, 0.03);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                        animation-play-state: paused;
                    }
                    .animate-continuous-elegant:hover h3 {
                        color: #EF3C38;
                        animation: pulseTextShadow 2s ease-in-out infinite;
                    }
                    .animate-red-node {
                        animation: pulseGlowRed 3s ease-in-out infinite;
                    }
                    .delay-node { animation-delay: 0.8s; }
                    .delay-col-1 { animation-delay: 0.4s; }
                    .delay-col-2 { animation-delay: 0.6s; }
                    .delay-col-3 { animation-delay: 0.8s; }
                `}} />

                {/* Header Row: Title left + Description right */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-[16px] lg:gap-[23px] mb-[40px] md:mb-[60px] lg:mb-[140px]">
                    <h2
                        className="text-[#121010] font-semibold leading-tight md:leading-[49px] flex-shrink-0 w-full lg:w-[512px] opacity-0 animate-title-reveal"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(32px, 6vw, 40px)', transformOrigin: 'left center' }}
                    >
                        Getting to Power On
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full lg:max-w-[1240px] opacity-0 animate-desc-reveal"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(16px, 3.5vw, 28px)' }}
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more
                    </p>
                </div>

                {/* Centered Card with Image */}
                <div className="flex justify-center mb-[40px] lg:mb-[60px] px-0 lg:px-[200px]">
                    <div
                        className="relative w-full h-[300px] md:h-[450px] lg:h-[582px] rounded-[16px] lg:rounded-[20px] overflow-hidden"
                        style={{ background: '#3E2727' }}
                    >
                        <img
                            src="/home9.png"
                            alt="Solar Panel Installation"
                            className="absolute left-0 top-0 lg:top-[-67px] w-full h-full lg:h-[700px] object-cover"
                        />
                    </div>
                </div>

                {/* Progress Line */}
                <div className="relative w-full max-w-[1460px] mx-auto hidden lg:block mt-[100px] mb-[28px]">
                    {/* Thin black base line */}
                    <div className="w-full h-0 border-[1px] border-[#121010]" />
                    {/* Red accent line on the left */}
                    <div
                        className="absolute left-[74px] top-1/2 -translate-y-1/2 w-[193.5px] h-0"
                        style={{ borderWidth: '5px', borderStyle: 'solid', borderColor: '#EF3C38' }}
                    />
                    {/* Red circle at end of red accent line */}
                    <svg
                        className="absolute top-1/2 -translate-y-1/2 animate-red-node delay-node"
                        style={{ left: `${74 + 193.5 - 22.5}px` }}
                        width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="22.5" cy="22.5" r="22.5" fill="#EF3C38" />
                    </svg>
                </div>

                {/* Three Columns */}
                <div className="flex flex-col lg:flex-row justify-between gap-[32px] lg:gap-[40px] max-w-[1460px] mx-auto">

                    {/* Column 1 */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[443px] opacity-0 animate-continuous-elegant delay-col-1 cursor-pointer">
                        <h3
                            className="text-[#121010] font-medium leading-tight lg:leading-[34px] mb-[15px] lg:mb-[80px] transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 5vw, 28px)' }}
                        >
                            From Order to Design
                        </h3>
                        <p
                            className="text-[#121010]/90 font-normal leading-snug lg:leading-[22px] text-center lg:text-left transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 3vw, 18px)' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[432px] opacity-0 animate-continuous-elegant delay-col-2 cursor-pointer">
                        <h3
                            className="text-[#121010] font-medium leading-tight lg:leading-[34px] mb-[15px] lg:mb-[80px] transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 5vw, 28px)' }}
                        >
                            From Install to Power On
                        </h3>
                        <p
                            className="text-[#121010]/90 font-normal leading-snug lg:leading-[22px] text-center lg:text-left transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 3vw, 18px)' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[428px] opacity-0 animate-continuous-elegant delay-col-3 cursor-pointer">
                        <h3
                            className="text-[#121010] font-medium leading-tight lg:leading-[34px] mb-[15px] lg:mb-[80px] transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 5vw, 28px)' }}
                        >
                            From Day One to Onward
                        </h3>
                        <p
                            className="text-[#121010]/90 font-normal leading-snug lg:leading-[22px] text-center lg:text-left transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 3vw, 18px)' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
