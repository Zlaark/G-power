"use client";
import { FadeIn } from '@/components/FadeIn';
import { useState, useEffect } from 'react';

export const SaveOnBills = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % 3);
        }, 3000); // Change active line every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative">


                {/* Background Image Container */}
                <div className="absolute top-0 right-0 w-full md:w-[85%] h-full z-0 hidden md:block">
                    <div className="absolute inset-0 w-[60%] bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                    <img
                        src="/home2.webp"
                        alt="Solar Panel Field"
                        className="w-full h-full object-cover object-right"
                    />
                </div>

                {/* Mobile Background Image (visible only on small screens) */}
                <div className="absolute top-0 right-0 w-full h-[50%] z-0 md:hidden opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
                    <img
                        src="/home2.webp"
                        alt="Solar Panel Field mobile"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Top Content: Title & Description */}
                <div className="w-full max-w-[800px] px-[20px] md:px-[60px] lg:ml-[86px] lg:px-0 pt-[40px] md:pt-[60px] lg:pt-[100px] flex flex-col gap-[15px] md:gap-[23px] relative z-10">
                    <FadeIn delay={100} direction="right">
                        <h2
                            className="font-semibold leading-tight md:leading-[49px] w-full text-[#121010]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}
                        >
                            Save On Electricity Bills
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="right">
                        <p
                            className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 1.8vw, 18px)' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </FadeIn>
                </div>

                {/* Solar Panel Image Area */}
                <div className="relative w-full h-auto min-h-[300px] md:h-[400px] mt-[40px] z-10">

                    {/* Monthly Bill Savings Card — IntersectionObserver triggers slide-in */}
                    <FadeIn delay={500} direction="up" className="relative md:absolute md:left-[66px] md:bottom-[20px] w-full md:w-[735px] max-w-[calc(100%-40px)] mx-auto md:mx-0 bg-white/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none rounded-[20px] md:rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:shadow-none border border-white/40 md:border-none mb-[40px] md:mb-0 group cursor-default">
                        <div className="px-[20px] md:px-[39px] py-[30px] md:py-[50px]">
                            <div className="flex flex-col gap-[15px] md:gap-[19px]">

                                {/* Decorative Lines */}
                                <div className="card-lines flex items-center gap-[15px] md:gap-[30px]">
                                    {[0, 1, 2].map((idx) => (
                                        <div
                                            key={idx}
                                            className={`w-[40px] md:w-[66.5px] h-0 rounded-full transition-all duration-500 ease-in-out ${activeIndex === idx
                                                ? 'border-[3px] md:border-[3.5px] border-[#EF3C38]'
                                                : 'border-[1.5px] border-[#B1B1B1] group-hover:border-[#EF3C38]/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Subtitle & Body Content */}
                                <div className="transition-opacity duration-500 ease-in-out">
                                    <h3
                                        className="card-title text-[#121010] font-medium leading-tight md:leading-[34px] w-full max-w-[656px] transition-colors duration-500 group-hover:text-[#EF3C38]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(17px, 3vw, 22px)' }}
                                    >
                                        {activeIndex === 0 && "Monthly Bill Savings"}
                                        {activeIndex === 1 && "Energy Independence"}
                                        {activeIndex === 2 && "Sustainable Future"}
                                    </h3>

                                    {/* Body Text */}
                                    <p
                                        className="card-body mt-[15px] md:mt-[19px] text-[#121010]/80 font-normal leading-normal md:leading-[22px] w-full max-w-[656px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 2vw, 15px)' }}
                                    >
                                        {activeIndex === 0 && "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                                        {activeIndex === 1 && "Generating your own solar power means you are less reliant on the traditional utility grid. You can protect yourself against unpredictable electricity rate increases and enjoy peace of mind."}
                                        {activeIndex === 2 && "By switching to solar panels, you reduce your carbon footprint and help contribute to a much cleaner, healthier environment for future generations by utilizing completely renewable clean energy."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
