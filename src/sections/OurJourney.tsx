import { FadeIn } from '@/components/FadeIn';

export const OurJourney = () => {
    const milestones = [
        { year: "2019", text: "Formation of a dedicated design team for EV battery pack development." },
        { year: "2021", text: "Obtained ARAI certification for 2-wheeler and 3-wheeler EV battery packs." },
        { year: "2023", text: "Initiated feasibility and market assessment for Energy Storage Systems." },
        { year: "2024", text: "Commissioned a fully automated 500 MWh EV & ESS assembly line and launched telecom ESS solutions." },
        { year: "2025", text: "Delivered the first grid-connected 5 MWh BESS project and secured a 100 MWh BESS order." },
    ];

    return (
        <section className="relative w-full bg-[#F8FAFC] py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                <FadeIn delay={100} direction="up">
                    <div className="text-center max-w-[700px] mx-auto mb-14 md:mb-16">
                        <h2
                            className="font-bold text-[#0F172A] mb-4"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(24px, 3vw, 40px)',
                                lineHeight: '1.2',
                            }}
                        >
                            Our Journey
                        </h2>
                        <p
                            className="font-medium text-[#64748B]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(16px, 1.3vw, 20px)',
                                lineHeight: '1.6',
                            }}
                        >
                            A timeline of our milestones and achievements.
                        </p>
                    </div>
                </FadeIn>

                {/* Horizontal Timeline */}
                <div className="max-w-[1200px] mx-auto relative">
                    {/* Horizontal line (desktop) */}
                    <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0A5191]/25 to-transparent z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-6 relative z-10">
                        {milestones.map((m, i) => (
                            <FadeIn key={i} delay={200 + (i * 100)} direction="up">
                                <div className="group flex flex-col items-center cursor-default">
                                    {/* Dot on timeline */}
                                    <div className="w-11 h-11 rounded-full bg-white border-[3px] border-[#0A5191] flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(10,81,145,0.15)] group-hover:bg-[#0A5191] group-hover:scale-110 transition-all duration-400">
                                        <div className="w-3 h-3 rounded-full bg-[#0A5191] group-hover:bg-white transition-colors duration-400" />
                                    </div>

                                    {/* Year badge */}
                                    <span
                                        className="inline-block font-bold text-[#0A5191] mb-3 tracking-tight"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(22px, 2vw, 28px)',
                                        }}
                                    >
                                        {m.year}
                                    </span>

                                    {/* Card */}
                                    <div className="bg-white rounded-[16px] border border-[#E5EBF2] p-5 md:p-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] group-hover:shadow-[0_10px_28px_rgba(10,81,145,0.08)] group-hover:border-[#0A5191]/20 transition-all duration-500 w-full">
                                        <p
                                            className="font-medium text-[#475569] text-center group-hover:text-[#0F172A] transition-colors duration-300"
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: 'clamp(13px, 1vw, 15px)',
                                                lineHeight: '1.55',
                                            }}
                                        >
                                            {m.text}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
