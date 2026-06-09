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
            <div className="mx-auto max-w-[1920px] relative py-12 md:py-20">
                {/* Background Pattern instead of image */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0A5191 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                {/* Top Content: Title & Description */}
                <div className="w-full max-w-[900px] px-[20px] md:px-[60px] lg:ml-[86px] lg:px-0 pt-[40px] md:pt-[60px] lg:pt-[100px] flex flex-col gap-[15px] md:gap-[23px] relative z-10">
                    <FadeIn delay={100} direction="right">
                        <h2
                            className="font-semibold leading-tight md:leading-[49px] w-full text-[#121010]"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}
                        >
                            Battery Energy Storage Systems (BESS)
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="right">
                        <p
                            className="text-[#121010] font-medium leading-normal md:leading-[28px] w-full"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.8vw, 18px)' }}
                        >
                            Battery Energy Storage Systems (BESS) help Commercial & Industrial businesses take control of rising energy costs and unpredictable power demand. By intelligently storing and delivering electricity when it&apos;s needed the most, BESS creates a more efficient, stable, and future-ready energy ecosystem.
                        </p>
                    </FadeIn>
                    <FadeIn delay={400} direction="right">
                        <p
                            className="text-[#121010] font-medium leading-normal md:leading-[28px] w-full"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.8vw, 18px)' }}
                        >
                            From manufacturing plants and warehouses to commercial buildings and large facilities, BESS enables businesses to maximize energy usage without compromising operations.
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
                                                ? 'border-[3px] md:border-[3.5px] border-[#0A5191]'
                                                : 'border-[1.5px] border-[#B1B1B1] group-hover:border-[#0A5191]/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Subtitle & Body Content */}
                                <div className="transition-opacity duration-500 ease-in-out">
                                    <h3
                                        className="card-title text-[#121010] font-medium leading-tight md:leading-[34px] w-full max-w-[656px] transition-colors duration-500 group-hover:text-[#0A5191]"
                                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(17px, 3vw, 22px)' }}
                                    >
                                        {activeIndex === 0 && "Reduce Peak Demand Costs"}
                                        {activeIndex === 1 && "Ensure Reliable & Uninterrupted Operations"}
                                        {activeIndex === 2 && "Maximize Renewable Energy Efficiency"}
                                    </h3>

                                    {/* Body Text */}
                                    <p
                                        className="card-body mt-[15px] md:mt-[19px] text-[#121010]/80 font-normal leading-normal md:leading-[22px] w-full max-w-[656px]"
                                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(12px, 2vw, 15px)' }}
                                    >
                                        {activeIndex === 0 && "Store energy during low-tariff hours and utilize it during peak demand periods to reduce maximum demand charges and optimize monthly electricity expenses."}
                                        {activeIndex === 1 && "BESS provides instant backup support during power outages and voltage fluctuations, helping industries maintain smooth operations without downtime or productivity loss."}
                                        {activeIndex === 2 && "Seamlessly integrate with solar power systems to store excess generated energy and utilize it when required, improving renewable energy consumption and reducing grid dependency."}
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
