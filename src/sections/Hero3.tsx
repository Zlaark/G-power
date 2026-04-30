import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const Hero3 = () => {
    return (
        <section className="relative w-full h-[90vh] md:h-screen min-h-[700px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Solar Panels (Home Page).webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
                    style={{ maxWidth: 'none' }}
                />
            </div>

            {/* Red accent bars on the right */}
            <div className="absolute z-[1] hidden lg:block" style={{ left: '88.12%', right: '4.11%', top: '0%', bottom: '85.22%', background: '#0A5191', opacity: 0.37 }} />
            <div className="absolute z-[1] hidden lg:block" style={{ left: '88.12%', right: '4.11%', top: '16.4%', bottom: '0%', background: '#0A5191', opacity: 0.37 }} />

            {/* Content */}
            <div className="absolute inset-0 z-10 w-full max-w-[1920px] mx-auto">
                {/* Title & Subtitle - vertically centered */}
                <div className="absolute left-[20px] md:left-[86px] top-1/2 -translate-y-1/2 w-[70%] md:w-[490px] flex flex-col items-start gap-4">
                    <h1
                        className="animate-hero-reveal text-white font-semibold leading-tight md:leading-[84px] w-full m-0 text-left"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 54px)' }}
                    >
                        Solar Panels
                    </h1>

                    <p
                        className="animate-hero-reveal-delay-1 text-white font-medium leading-normal md:leading-[34px] w-full m-0 text-left"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 3vw, 22px)' }}
                    >
                        Save on Energy, Power Your Home
                    </p>

                    {/* Decorative Arrow Icon */}
                    <div className="animate-hero-reveal-delay-2 w-[71px] h-[71px] relative mt-4 animate-float">
                        <svg width="62" height="39" viewBox="0 0 62 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-[20px]">
                            <path d="M21.7735 0.192L17.5802 4.589L43.9643 29.75L39.7709 34.147L44.1683 38.34L48.3616 33.943L52.759 38.136L56.9524 33.739L52.555 29.546L56.7484 25.148L52.351 20.955L48.1576 25.352L21.7735 0.192ZM52.147 12.364L56.5444 16.558L52.351 20.955L47.9537 16.762L52.147 12.364ZM52.147 12.364L47.7497 8.171L51.9431 3.774L56.3404 7.967L52.147 12.364ZM31.1802 34.351L35.5775 38.544L39.7709 34.147L35.3736 29.954L31.1802 34.351ZM31.1802 34.351L26.7828 30.158L22.5895 34.555L26.9868 38.748L31.1802 34.351Z" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="absolute left-[20px] md:left-[86px] bottom-[30px] md:bottom-[60px] flex flex-col md:flex-row items-center gap-4 sm:gap-6 animate-hero-reveal-delay-3 w-[calc(100%-40px)] md:w-auto">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-[24px] py-[14px] md:py-[16px] font-semibold text-white bg-[#0A5191] border border-[#0A5191] rounded-[14px] transition-all hover:bg-[#083D6E] hover:-translate-y-[2px] w-full md:w-auto shadow-lg shadow-[#0A5191]/20"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        Schedule consultation
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                    
                    <Link
                        href="/our-projects"
                        className="inline-flex items-center justify-center px-[24px] py-[14px] md:py-[16px] font-semibold text-[#121010] bg-white rounded-[14px] transition-all hover:bg-gray-100 hover:-translate-y-[2px] w-full md:w-auto shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        Order Now
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};
