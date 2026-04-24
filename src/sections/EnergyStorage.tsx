import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyStorage = () => {
    return (
        <section className="relative w-full bg-[#050505] pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0A5191]/20 blur-[120px] rounded-full pointer-events-none opacity-60" />
            
            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[20px] md:px-[60px] lg:px-[100px]">
                {/* Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#4ca5ff] mb-[32px] md:mb-[48px] lg:mb-[60px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(28px, 4vw, 46px)',
                            lineHeight: '1.22',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Energy is changing.
                    </h2>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={300} direction="up">
                    <p
                        className="text-center font-medium text-white/80 w-full max-w-[900px] mx-auto mb-[32px] md:mb-[48px] lg:mb-[56px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(14px, 1.4vw, 18px)',
                            lineHeight: '1.65',
                        }}
                    >
                        <span className="text-white block mb-4">The world is moving toward cleaner, smarter, and more reliable power systems.</span>
                        At G-Power, we are building the technology that powers this transition. Our advanced battery and energy storage solutions support homes, businesses, industries, and mobility systems across a rapidly evolving energy landscape.
                    </p>
                </FadeIn>

                {/* Image */}
                <FadeIn delay={400} direction="up">
                    <div className="w-full mb-[32px] md:mb-[48px] lg:mb-[56px] relative group">
                        {/* Soft glow behind image */}
                        <div className="absolute inset-0 bg-[#0A5191]/30 blur-[40px] rounded-[23px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative w-full rounded-[12px] md:rounded-[18px] lg:rounded-[23px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7]">
                            <Image
                                src="/wind-solar-energy.jpg"
                                alt="Wind turbines and solar panels in a renewable energy field at sunset"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1540px"
                                priority
                            />
                            {/* Glass overlay on bottom of image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                        </div>
                    </div>
                </FadeIn>

                {/* Bottom Text */}
                <FadeIn delay={600} direction="up">
                    <div className="mx-auto max-w-[800px] p-6 md:p-8 rounded-[20px] bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl">
                        <p
                            className="text-center font-medium text-white/90 w-full mx-auto"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.2vw, 17px)',
                                lineHeight: '1.6',
                            }}
                        >
                            Through innovation, engineering excellence, and strong partnerships, we deliver energy solutions that are efficient, scalable, and built for the future.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
