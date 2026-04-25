import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const CustomBatteryPacks = () => {
    return (
        <section className="relative w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-[#0F172A] mb-8 md:mb-10 lg:mb-12"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(20px, 2.3vw, 34px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Delivering Energy at Scale
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-6 md:gap-8 lg:gap-10 items-start">
                    {/* Left: Image-first panel */}
                    <FadeIn delay={200} direction="up" className="relative">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-[20px] sm:rounded-[24px] overflow-hidden group border border-[#E5EBF2] shadow-[0_14px_34px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                            <Image
                                src="/about-custom-battery.png"
                                alt="Customized battery pack container with solar panels and orange battery modules"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                priority
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-white/55 via-white/10 to-transparent" />
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                        <FadeIn delay={280} direction="left">
                            <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-white p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.05)] section-soft-hover">
                                <h3
                                    className="font-semibold text-[#0F172A]"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(20px, 2.1vw, 36px)',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Our technology is already powering energy infrastructure across India.
                                </h3>
                            </div>
                        </FadeIn>

                        <FadeIn delay={340} direction="left">
                            <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-[#FCFDFE] p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.05)] section-soft-hover">
                                <ul
                                    className="font-medium text-[#0F172A] list-disc pl-5 space-y-2 sm:space-y-2.5"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(14px, 1.15vw, 18px)',
                                        lineHeight: '1.45',
                                    }}
                                >
                                    <li className="paragraph-hover-float cursor-default">150+ MWh batteries delivered nationwide</li>
                                    <li className="paragraph-hover-float cursor-default">500 MWh fully automated EV &amp; ESS assembly line</li>
                                    <li className="paragraph-hover-float cursor-default">5 MWh grid-connected BESS project successfully delivered</li>
                                    <li className="paragraph-hover-float cursor-default">100 MWh large-scale BESS project secured</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
