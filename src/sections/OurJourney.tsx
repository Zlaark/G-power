import { FadeIn } from '@/components/FadeIn';

export const OurJourney = () => {
    return (
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">
                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-black mb-8 md:mb-10 lg:mb-10"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(17px, 2vw, 26px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Our Journey
                    </h2>
                </FadeIn>

                {/* Two-Column: Left Heading + Right Description */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-5 md:mb-6">
                    {/* Left Heading */}
                    <FadeIn delay={200} direction="right" className="md:w-[35%] flex-shrink-0 md:pl-8 lg:pl-12">
                        <h3
                            className="font-semibold text-black"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(17px, 2vw, 26px)',
                                lineHeight: '1.2',
                            }}
                        >
                            A timeline of our milestones and achievements.
                        </h3>
                    </FadeIn>

                    {/* Right Description */}
                    <FadeIn delay={300} direction="left" className="md:w-[65%] max-w-[976px]">
                        <ul
                            className="font-medium text-black list-disc pl-5 space-y-3"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(13px, 1.1vw, 15px)',
                                lineHeight: '1.4',
                            }}
                        >
                            <li><strong>2019</strong> - Formation of a dedicated design team for EV battery pack development.</li>
                            <li><strong>2021</strong> - Obtained ARAI certification for 2-wheeler and 3-wheeler EV battery packs.</li>
                            <li><strong>2023</strong> - Initiated feasibility and market assessment for Energy Storage Systems.</li>
                            <li><strong>2024</strong> - Commissioned a fully automated 500 MWh EV &amp; ESS assembly line and launched telecom ESS solutions.</li>
                            <li><strong>2025</strong> - Delivered the first grid-connected 5 MWh BESS project and secured a 100 MWh BESS order.</li>
                        </ul>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
