import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const WhyGPower = () => {
    return (
        <section className="relative w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-[#0F172A] mb-8 md:mb-10 lg:mb-12"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(22px, 2.4vw, 36px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Why G-Power
                    </h2>
                </FadeIn>

                <div className="relative">
                    <FadeIn delay={220} direction="up" className="relative w-full">
                        <div className="relative w-full aspect-[16/7] min-h-[230px] sm:min-h-[280px] md:min-h-[360px] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#E5EBF2] shadow-[0_14px_34px_rgba(15,23,42,0.07)]">
                            <Image
                                src="/why-gpower.png"
                                alt="Why G-Power visual"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/45 via-white/5 to-transparent" />
                        </div>
                    </FadeIn>

                    <div className="relative -mt-8 sm:-mt-10 md:-mt-14 px-2 sm:px-4 md:px-8 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 md:gap-6 items-start">
                            <FadeIn delay={300} direction="right">
                                <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-white p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.06)] section-soft-hover">
                                    <div className="h-1 w-16 rounded-full bg-[#0A5191]/75 mb-5" />
                                    <h3
                                        className="font-semibold text-[#0F172A]"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(20px, 2.1vw, 34px)',
                                            lineHeight: '1.2',
                                        }}
                                    >
                                        Energy storage projects require precision, reliability, and expertise.
                                    </h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={360} direction="left">
                                <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-[#FCFDFE] p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.06)] section-soft-hover">
                                    <div
                                        className="font-medium text-[#0F172A]"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(13px, 1.1vw, 15px)',
                                            lineHeight: '1.4',
                                        }}
                                    >
                                        <p className="mb-2">G-Power delivers all three.</p>
                                        <ul className="list-disc pl-5 space-y-2 mt-4">
                                            <li className="paragraph-hover-float cursor-default">End-to-end project execution</li>
                                            <li className="paragraph-hover-float cursor-default">Proven system integration capabilities</li>
                                            <li className="paragraph-hover-float cursor-default">Strict vendor qualification and quality standards</li>
                                            <li className="paragraph-hover-float cursor-default">24/7 monitoring and technical support</li>
                                            <li className="paragraph-hover-float cursor-default">Trusted partner for scalable energy storage development</li>
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <a href="/contact" className="inline-flex px-8 py-3.5 bg-[#0A5191] text-white rounded-full font-medium btn-sweep-blue btn-glow items-center gap-3 group transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                            <span>Contact Us</span>
                                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
