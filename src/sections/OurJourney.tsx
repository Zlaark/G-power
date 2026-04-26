import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const OurJourney = () => {
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
                        Our Journey
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-[1200px] mx-auto mt-4">
                    <FadeIn delay={200} direction="right" className="h-full">
                        <div className="p-8 md:p-12 lg:p-16 rounded-[24px] bg-[#F8F9FA] border border-[#E5EBF2] h-full flex items-center justify-center text-center shadow-[0_10px_28px_rgba(15,23,42,0.03)] section-soft-hover">
                            <h3
                                className="font-semibold text-[#0F172A]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(22px, 2.5vw, 36px)',
                                    lineHeight: '1.3',
                                }}
                            >
                                A timeline of our milestones and achievements.
                            </h3>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} direction="left" className="h-full">
                        <div className="p-8 md:p-10 lg:p-12 rounded-[24px] bg-white border border-[#E5EBF2] shadow-[0_10px_28px_rgba(15,23,42,0.05)] h-full section-soft-hover flex flex-col justify-center">
                            <ul
                                className="font-medium text-[#475569] space-y-4"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                                    lineHeight: '1.5',
                                }}
                            >
                                <li className="flex items-start gap-4 group point-hover cursor-default">
                                    <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#0A5191] flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(10,81,145,0.6)]" />
                                    <span className="transition-colors duration-300 group-hover:text-[#0F172A] paragraph-hover-float"><strong>2019</strong> - Formation of a dedicated design team for EV battery pack development.</span>
                                </li>
                                <li className="flex items-start gap-4 group point-hover cursor-default">
                                    <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#0A5191] flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(10,81,145,0.6)]" />
                                    <span className="transition-colors duration-300 group-hover:text-[#0F172A] paragraph-hover-float"><strong>2021</strong> - Obtained ARAI certification for 2-wheeler and 3-wheeler EV battery packs.</span>
                                </li>
                                <li className="flex items-start gap-4 group point-hover cursor-default">
                                    <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#0A5191] flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(10,81,145,0.6)]" />
                                    <span className="transition-colors duration-300 group-hover:text-[#0F172A] paragraph-hover-float"><strong>2023</strong> - Initiated feasibility and market assessment for Energy Storage Systems.</span>
                                </li>
                                <li className="flex items-start gap-4 group point-hover cursor-default">
                                    <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#0A5191] flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(10,81,145,0.6)]" />
                                    <span className="transition-colors duration-300 group-hover:text-[#0F172A] paragraph-hover-float"><strong>2024</strong> - Commissioned a fully automated 500 MWh EV &amp; ESS assembly line and launched telecom ESS solutions.</span>
                                </li>
                                <li className="flex items-start gap-4 group point-hover cursor-default">
                                    <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#0A5191] flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(10,81,145,0.6)]" />
                                    <span className="transition-colors duration-300 group-hover:text-[#0F172A] paragraph-hover-float"><strong>2025</strong> - Delivered the first grid-connected 5 MWh BESS project and secured a 100 MWh BESS order.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
