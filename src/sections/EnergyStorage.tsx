import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyStorage = () => {
    return (
        <section className="relative w-full bg-white pt-[40px] md:pt-[60px] lg:pt-[10px] pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-[20px] md:px-[60px] lg:px-[100px]">

                {/* Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-semibold text-black mb-[20px] md:mb-[28px] lg:mb-[36px]"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(17px, 2.8vw, 32px)',
                            lineHeight: '1.22',
                        }}
                    >
                        Delivering Reliable Energy Storage Infrastructure for India
                    </h2>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={300} direction="up">
                    <p
                        className="text-center font-medium text-black w-full mx-auto mb-[20px] md:mb-[28px] lg:mb-[36px]"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(12px, 1.6vw, 19px)',
                            lineHeight: '1.55',
                        }}
                    >
                        Joulecube Energy is a specialized EPC solutions and long-term service
                        provider for Battery Energy Storage Systems (BESS), supporting
                        India&apos;s transition to a resilient, flexible, and low-carbon power
                        ecosystem.
                    </p>
                </FadeIn>

                {/* Image */}
                <FadeIn delay={400} direction="up">
                    <div className="w-full mb-[20px] md:mb-[28px] lg:mb-[36px]">
                        <div className="relative w-full rounded-[12px] md:rounded-[18px] lg:rounded-[23px] overflow-hidden shadow-lg
                            aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7]">
                            <Image
                                src="/wind-solar-energy.jpg"
                                alt="Wind turbines and solar panels in a renewable energy field at sunset"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1540px"
                                priority
                            />
                        </div>
                    </div>
                </FadeIn>

                {/* Bottom Text */}
                <FadeIn delay={600} direction="up">
                    <p
                        className="text-center font-medium text-black w-full mx-auto"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(12px, 1.4vw, 19px)',
                            lineHeight: '1.6',
                        }}
                    >
                        We deliver end-to-end battery energy storage projects—from engineering
                        and procurement to construction, commissioning, and life cycle
                        services—helping utilities, commercial, and industrial consumers
                        achieve grid stability, peak demand management, and energy security.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
