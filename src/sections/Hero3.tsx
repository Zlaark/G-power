import Link from 'next/link';

export const Hero3 = () => {
    return (
        <section className="relative w-full h-[90vh] md:h-screen min-h-[700px] overflow-hidden">
            {/* Background Image - BESS facility instead of solar panels */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bess-hero-bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
                    style={{ maxWidth: 'none' }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/70 via-[#020817]/40 to-transparent" />
            </div>

            {/* Blue accent bars on the right - REMOVED */}

            {/* Content */}
            <div className="absolute inset-0 z-10 w-full max-w-[1920px] mx-auto">
                {/* Title & Subtitle - vertically centered */}
                <div className="absolute left-[20px] md:left-[86px] top-1/2 -translate-y-1/2 w-[70%] md:w-[590px] flex flex-col items-start gap-4">
                    <h1
                        className="animate-hero-reveal text-white font-bold leading-tight md:leading-[64px] w-full m-0 text-left"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 5vw, 48px)', textShadow: '0 4px 12px rgba(0, 0, 0, 0.9)' }}
                    >
                        Storing Energy. Powering Growth. The Future of Industrial Resilience.
                    </h1>
                </div>

                {/* Bottom Buttons */}
                <div className="absolute left-[20px] md:left-[86px] bottom-[30px] md:bottom-[60px] flex flex-col md:flex-row items-center gap-4 sm:gap-6 animate-hero-reveal-delay-3 w-[calc(100%-40px)] md:w-auto">
                    <Link
                        href="/solutions/utility/products"
                        className="inline-flex items-center justify-center px-[32px] py-[14px] md:py-[16px] font-semibold text-[#121010] bg-white rounded-[14px] transition-all hover:bg-gray-100 hover:-translate-y-[2px] w-full md:w-auto shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        Explore Solution
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};
