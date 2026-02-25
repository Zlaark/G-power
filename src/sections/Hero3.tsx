export const Hero3 = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-top lg:bg-[center_top_-50px] bg-no-repeat"
                style={{ backgroundImage: "url('/solar-hero-bg.png')" }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#01050A] via-[#01050A]/20 to-transparent opacity-70" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/40 to-transparent opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[400px] z-[1] bg-gradient-to-b from-black to-transparent opacity-50" />

            {/* Red accent bars on the right */}
            <div className="absolute right-[2.71%] top-[-3.61%] h-[17%] w-[7.76%] bg-[#EF3C38] opacity-[0.37] z-[1]" />
            <div className="absolute right-[2.71%] top-[15.19%] h-[26%] w-[7.76%] bg-[#EF3C38] opacity-[0.37] z-[1]" />

            {/* Content */}
            <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(40px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes blurReveal {
                        0% { opacity: 0; filter: blur(20px); transform: translateY(30px) scale(1.05); }
                        100% { opacity: 1; filter: blur(0px); transform: translateY(0) scale(1); }
                    }
                    @keyframes bounceGlow {
                        0%, 100% { transform: translateY(0); filter: drop-shadow(0 0 5px rgba(255,255,255,0.4)); }
                        50% { transform: translateY(-15px); filter: drop-shadow(0 0 25px rgba(255,255,255,1)); }
                    }
                    .animate-fade-up {
                        animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    .animate-blur-reveal {
                        animation: blurReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    .animate-bounce-glow {
                        animation: bounceGlow 3s ease-in-out infinite;
                        opacity: 0; /* start hidden until reveal animation hits */
                    }
                    /* Combine entrance with continuous glow */
                    .animate-compound-icon {
                        animation: blurReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, bounceGlow 3s ease-in-out infinite 1.2s;
                    }
                    .delay-100 { animation-delay: 100ms; }
                    .delay-200 { animation-delay: 200ms; }
                    .delay-300 { animation-delay: 300ms; }
                    .delay-400 { animation-delay: 400ms; }
                `}} />

                {/* Title & Subtitle - vertically centered */}
                <div className="absolute left-[20px] md:left-[86px] top-1/2 -translate-y-1/2 w-[calc(100%-40px)] md:w-[490px] flex flex-col items-start gap-4">
                    <h1
                        className="text-white font-semibold leading-tight md:leading-[84px] w-full m-0 opacity-0 animate-blur-reveal delay-100 text-left"
                        style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: 'clamp(48px, 8vw, 68px)' }}
                    >
                        Solar Panels
                    </h1>

                    <p
                        className="text-white font-medium leading-normal md:leading-[34px] w-full m-0 opacity-0 animate-blur-reveal delay-200 text-left"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(18px, 4vw, 28px)' }}
                    >
                        Save on Energy, Power Your Home
                    </p>

                    {/* Decorative Arrow Icon */}
                    <div className="w-[71px] h-[71px] relative mt-4 opacity-0 animate-compound-icon delay-300">
                        <svg width="62" height="39" viewBox="0 0 62 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-[20px]">
                            <path d="M21.7735 0.192L17.5802 4.589L43.9643 29.75L39.7709 34.147L44.1683 38.34L48.3616 33.943L52.759 38.136L56.9524 33.739L52.555 29.546L56.7484 25.148L52.351 20.955L48.1576 25.352L21.7735 0.192ZM52.147 12.364L56.5444 16.558L52.351 20.955L47.9537 16.762L52.147 12.364ZM52.147 12.364L47.7497 8.171L51.9431 3.774L56.3404 7.967L52.147 12.364ZM31.1802 34.351L35.5775 38.544L39.7709 34.147L35.3736 29.954L31.1802 34.351ZM31.1802 34.351L26.7828 30.158L22.5895 34.555L26.9868 38.748L31.1802 34.351Z" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* Buttons - bottom area */}
                <div className="absolute left-[20px] md:left-[86px] right-[20px] md:right-auto bottom-[40px] md:bottom-[10vh] lg:bottom-[120px] flex flex-col md:flex-row items-stretch md:items-center gap-[15px] md:gap-[27px] opacity-0 animate-fade-up delay-400">
                    <button
                        className="flex items-center justify-center w-full md:w-[273px] h-[50px] md:h-[57px] border-2 border-white rounded-[5px] text-white font-semibold transition-all hover:bg-white hover:text-[#121010]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 3vw, 18px)', backgroundColor: 'rgba(0, 0, 0, 0.004)' }}
                    >
                        Schedule consultation
                    </button>

                    <button
                        className="flex items-center justify-center w-full md:w-[190px] h-[50px] md:h-[57px] rounded-[5px] text-[#121010] bg-white font-semibold transition-all hover:bg-white/80"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 3vw, 18px)' }}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};
