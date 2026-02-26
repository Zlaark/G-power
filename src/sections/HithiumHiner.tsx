import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const HithiumHiner = () => {
    return (
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-semibold text-black mb-6 md:mb-8"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(20px, 2.5vw, 32px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Hithium Hiner – 125 kW / 261 kWh
                    </h2>
                </FadeIn>

                {/* Two-Column: Left Heading + Right Description */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10">
                    {/* Left Heading */}
                    <FadeIn delay={200} direction="right" className="md:w-[35%] flex-shrink-0">
                        <h3
                            className="font-semibold text-black"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(20px, 2.5vw, 32px)',
                                lineHeight: '1.2',
                            }}
                        >
                            Standardized, Grid-Ready Energy Storage
                        </h3>
                    </FadeIn>

                    {/* Right Description */}
                    <FadeIn delay={300} direction="left" className="md:w-[65%] max-w-[976px]">
                        <p
                            className="font-medium text-black"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(14px, 1.6vw, 22px)',
                                lineHeight: '1.4',
                            }}
                        >
                            Joulecube Energy offers the Hithium Hiner 125 kW / 261 kWh
                            Battery Energy Storage System, engineered for high performance,
                            safety, and reliability. Designed for commercial and industrial
                            applications, the system enables peak load management, backup
                            power, and renewable integration with a compact, scalable
                            architecture.
                        </p>
                    </FadeIn>
                </div>

                {/* BESS Facility Image */}
                <FadeIn delay={400} direction="up" className="relative w-full aspect-[1562/500] rounded-[20px] overflow-hidden group shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <Image
                        src="/about-bess-facility.jpg"
                        alt="Aerial view of battery energy storage system facility with solar panels"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 1562px"
                        priority
                    />
                </FadeIn>
            </div>
        </section>
    );
};
