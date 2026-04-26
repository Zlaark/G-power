import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const CustomBatteryPacks = () => {
    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-[#0F172A] mb-6 md:mb-8"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(28px, 3.5vw, 48px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Delivering Energy at Scale
                    </h2>
                </FadeIn>

                <div className="max-w-[1200px] mx-auto">
                    <FadeIn delay={200} direction="up">
                        <div className="text-center mb-12 md:mb-16 max-w-[800px] mx-auto">
                            <p
                                className="font-medium text-[#64748B]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                                    lineHeight: '1.5',
                                }}
                            >
                                Our technology is already powering energy infrastructure across India.
                            </p>
                            <div className="mt-6 w-16 h-1 bg-[#0A5191] rounded-full mx-auto" />
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5EBF2]">
                        {[
                            { value: "150+", unit: "MWh", text: "Batteries delivered nationwide" },
                            { value: "500", unit: "MWh", text: "Fully automated EV & ESS assembly line" },
                            { value: "5", unit: "MWh", text: "Grid-connected BESS project delivered" },
                            { value: "100", unit: "MWh", text: "Large-scale BESS project secured" }
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={300 + (i * 100)} direction="up" className="pt-6 sm:pt-0 sm:px-6 flex flex-col items-center text-center">
                                <div className="flex items-baseline justify-center gap-1.5 mb-3">
                                    <span 
                                        className="font-bold text-[#0F172A]"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(40px, 4.5vw, 64px)',
                                            lineHeight: '1',
                                        }}
                                    >
                                        {stat.value}
                                    </span>
                                    <span 
                                        className="font-semibold text-[#0A5191]"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(16px, 1.8vw, 22px)',
                                        }}
                                    >
                                        {stat.unit}
                                    </span>
                                </div>
                                <p 
                                    className="font-medium text-[#64748B] max-w-[220px] mx-auto"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(14px, 1.1vw, 16px)',
                                        lineHeight: '1.5',
                                    }}
                                >
                                    {stat.text}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
