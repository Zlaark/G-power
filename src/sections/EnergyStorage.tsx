import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyStorage = () => {
    return (
        <section className="relative w-full bg-white pt-[60px] md:pt-[80px] lg:pt-[80px] pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-[20px] md:px-[60px] lg:px-[100px]">

                {/* Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-black mb-[32px] md:mb-[48px] lg:mb-[60px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(18px, 2.2vw, 26px)',
                            lineHeight: '1.22',
                        }}
                    >
                        Energy is changing.
                    </h2>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={300} direction="up">
                    <p
                        className="text-center font-medium text-black w-full mx-auto mb-[20px] md:mb-[28px] lg:mb-[36px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(13px, 1.2vw, 16px)',
                            lineHeight: '1.55',
                        }}
                    >
                        The world is moving toward cleaner, smarter, and more reliable power systems.
                        <br /><br />
                        At G-Power, we are building the technology that powers this transition. Our advanced battery and energy storage solutions support homes, businesses, industries, and mobility systems across a rapidly evolving energy landscape.
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(13px, 1.1vw, 16px)',
                            lineHeight: '1.6',
                        }}
                    >
                        Through innovation, engineering excellence, and strong partnerships, we deliver energy solutions that are efficient, scalable, and built for the future.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
