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

                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-8 lg:gap-10 items-start">
                    <div className="space-y-5 sm:space-y-6">
                        <FadeIn delay={200} direction="right">
                            <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-white p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.05)] section-soft-hover">
                                <h3
                                    className="font-semibold text-[#0F172A]"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(20px, 2.1vw, 34px)',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    A timeline of our milestones and achievements.
                                </h3>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300} direction="up">
                            <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-[#FCFDFE] p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.05)] section-soft-hover">
                                <ul
                                    className="font-medium text-[#0F172A] list-disc pl-5 space-y-3"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(13px, 1.1vw, 15px)',
                                        lineHeight: '1.4',
                                    }}
                                >
                                    <li className="paragraph-hover-float cursor-default"><strong>2019</strong> - Formation of a dedicated design team for EV battery pack development.</li>
                                    <li className="paragraph-hover-float cursor-default"><strong>2021</strong> - Obtained ARAI certification for 2-wheeler and 3-wheeler EV battery packs.</li>
                                    <li className="paragraph-hover-float cursor-default"><strong>2023</strong> - Initiated feasibility and market assessment for Energy Storage Systems.</li>
                                    <li className="paragraph-hover-float cursor-default"><strong>2024</strong> - Commissioned a fully automated 500 MWh EV &amp; ESS assembly line and launched telecom ESS solutions.</li>
                                    <li className="paragraph-hover-float cursor-default"><strong>2025</strong> - Delivered the first grid-connected 5 MWh BESS project and secured a 100 MWh BESS order.</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={360} direction="left" className="relative w-full">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-[20px] sm:rounded-[24px] overflow-hidden group border border-[#E5EBF2] shadow-[0_14px_34px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                            <Image
                                src="/about-solar-field2.png"
                                alt="Solar field representing company milestones"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                sizes="(max-width: 1024px) 100vw, 46vw"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
