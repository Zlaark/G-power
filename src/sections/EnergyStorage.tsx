import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyStorage = () => {
    return (
        <section className="relative w-full bg-white pt-[150px] md:pt-[180px] pb-8 md:pb-12 lg:pb-16 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

                {/* Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-semibold text-black mb-6"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(24px, 3vw, 40px)',
                            lineHeight: '1.22',
                        }}
                    >
                        Delivering Reliable Energy Storage Infrastructure for India
                    </h2>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={300} direction="up">
                    <p
                        className="text-center font-medium text-black max-w-[1570px] mx-auto px-6 md:px-12 lg:px-20 mb-6 md:mb-10"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(18px, 2vw, 32px)',
                            lineHeight: '1.4',
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
                    <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-6 md:mb-10 group">
                        <div className="relative w-full rounded-[23px] overflow-hidden aspect-[1540/500] shadow-lg transition-transform duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                            <Image
                                src="/wind-solar-energy.jpg"
                                alt="Wind turbines and solar panels in a renewable energy field at sunset"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1540px"
                                priority
                            />
                        </div>
                    </div>
                </FadeIn>

                {/* Bottom Text */}
                <FadeIn delay={600} direction="up">
                    <p
                        className="text-center font-medium text-black max-w-[1596px] mx-auto"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(16px, 1.8vw, 24px)',
                            lineHeight: '1.4',
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
