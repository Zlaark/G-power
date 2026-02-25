export const Hero3 = () => {
    return (
        <section className="relative w-full h-screen min-h-[900px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
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

                {/* Title & Subtitle - vertically centered */}
                <div className="absolute left-[86px] top-1/2 -translate-y-1/2 w-[490px] flex flex-col items-start">
                    <h1
                        className="text-white font-semibold leading-[84px] w-full m-0"
                        style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: '68px' }}
                    >
                        Solar Panels
                    </h1>

                    <p
                        className="text-white font-medium leading-[34px] w-full m-0"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                    >
                        Save on Energy, Power Your Home
                    </p>

                    {/* Decorative Arrow Icon */}
                    <div className="w-[71px] h-[71px] relative mt-0">
                        <svg width="62" height="39" viewBox="0 0 62 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-[20px]">
                            <path d="M21.7735 0.192L17.5802 4.589L43.9643 29.75L39.7709 34.147L44.1683 38.34L48.3616 33.943L52.759 38.136L56.9524 33.739L52.555 29.546L56.7484 25.148L52.351 20.955L48.1576 25.352L21.7735 0.192ZM52.147 12.364L56.5444 16.558L52.351 20.955L47.9537 16.762L52.147 12.364ZM52.147 12.364L47.7497 8.171L51.9431 3.774L56.3404 7.967L52.147 12.364ZM31.1802 34.351L35.5775 38.544L39.7709 34.147L35.3736 29.954L31.1802 34.351ZM31.1802 34.351L26.7828 30.158L22.5895 34.555L26.9868 38.748L31.1802 34.351Z" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* Buttons - bottom area */}
                <div className="absolute left-[86px] bottom-[120px] flex flex-row items-center gap-[27px]">
                    <button
                        className="flex items-center justify-center w-[273px] h-[57px] border-2 border-white rounded-[5px] text-white font-semibold transition-all hover:bg-white/10"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px', backgroundColor: 'rgba(0, 0, 0, 0.004)' }}
                    >
                        Schedule consultation
                    </button>

                    <button
                        className="flex items-center justify-center w-[190px] h-[57px] rounded-[5px] text-[#121010] bg-white font-semibold transition-all hover:bg-gray-100"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px' }}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};
