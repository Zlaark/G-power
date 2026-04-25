import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const HithiumHiner = () => {
    return (
        <section className="relative w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="relative z-10 max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-[#0F172A] mb-10 md:mb-14 lg:mb-16"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(24px, 3vw, 36px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Built on Engineering Excellence
                    </h2>
                </FadeIn>

                {/* Two-Column: Content Left + Image Right */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-start">
                    <div className="space-y-6 md:space-y-8 lg:space-y-10">
                        <FadeIn delay={200} direction="right" className="md:pl-2 lg:pl-4">
                            <h3
                                className="font-semibold text-[#0F172A] relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:bg-[#0A5191] before:rounded-full"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(20px, 2.5vw, 30px)',
                                    lineHeight: '1.3',
                                }}
                            >
                                At G-Power, engineering innovation drives every solution we deliver.
                            </h3>
                        </FadeIn>

                        <FadeIn delay={300} direction="up">
                            <div
                                className="p-6 sm:p-7 md:p-8 lg:p-9 rounded-[20px] sm:rounded-[24px] bg-white border border-[#E5EBF2] shadow-[0_10px_28px_rgba(15,23,42,0.05)] font-medium text-[#475569] section-soft-hover"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                                    lineHeight: '1.6',
                                }}
                            >
                                <p className="mb-5 text-[#0F172A] text-[110%] font-semibold">Our capabilities include:</p>
                                <ul className="space-y-3 sm:space-y-4">
                                    {[
                                        "State-of-the-art lithium battery assembly facility in India",
                                        "Advanced expertise in Battery Energy Storage Systems (BESS)",
                                        "In-house developed Energy Management System (EMS)",
                                        "Integration with multiple battery, PCS, and EMS OEMs",
                                        "Specialized expertise in system software, troubleshooting, and optimization"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group point-hover cursor-default">
                                            <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#0A5191] flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(10,81,145,0.6)]" />
                                            <span className="transition-colors duration-300 group-hover:text-[#0F172A] paragraph-hover-float">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={400} direction="left" className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-[20px] sm:rounded-[24px] overflow-hidden group border border-[#E5EBF2] shadow-[0_14px_36px_rgba(15,23,42,0.07)] transition-all duration-700 hover:-translate-y-1">
                        <Image
                            src="/about-bess-facility.jpg"
                            alt="Aerial view of battery energy storage system facility with solar panels"
                            fill
                            className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 100vw, 52vw"
                            priority
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
