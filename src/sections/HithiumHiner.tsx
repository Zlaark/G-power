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

                {/* Two-Column: Cards Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-[1200px] mx-auto">
                    <FadeIn delay={200} direction="right" className="h-full">
                        <div className="p-8 md:p-12 lg:p-16 rounded-[24px] bg-[#F8F9FA] border border-[#E5EBF2] h-full flex items-center justify-center text-center shadow-[0_10px_28px_rgba(15,23,42,0.03)] section-soft-hover">
                            <h3
                                className="font-semibold text-[#0F172A]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                                    lineHeight: '1.4',
                                }}
                            >
                                At G-Power, engineering innovation drives every solution we deliver.
                            </h3>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} direction="left" className="h-full">
                        <div
                            className="p-8 md:p-10 lg:p-12 rounded-[24px] bg-white border border-[#E5EBF2] shadow-[0_10px_28px_rgba(15,23,42,0.05)] font-medium text-[#475569] h-full section-soft-hover flex flex-col justify-center"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.2vw, 16px)',
                                lineHeight: '1.6',
                            }}
                        >
                            <p className="mb-6 text-[#0F172A] text-xl font-semibold">Our capabilities include:</p>
                            <ul className="space-y-4">
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
            </div>
        </section>
    );
};
