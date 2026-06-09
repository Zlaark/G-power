"use client";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const achievements = [
    {
        label: "Batteries Delivered",
        value: 1000,
        suffix: "+",
        description: "Reliable energy storage units shipped worldwide."
    },
    {
        label: "Projects Completed",
        value: 500,
        suffix: "+",
        description: "Successful installations across various industries."
    },
    {
        label: "Years in Business",
        value: 10,
        suffix: "+",
        description: "Decades of expertise in energy solutions."
    },
    {
        label: "Megawatts Installed",
        value: 50,
        suffix: "+",
        description: "Total power capacity deployed globally."
    }
];

export const Milestones = () => {
    return (
        <section className="relative w-full bg-[#f7f9fc] py-20 md:py-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#0A5191]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A5191]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-[1920px] px-[20px] md:px-[60px] lg:px-[86px] relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <FadeIn delay={100} direction="up">
                        <div className="h-[4px] w-20 bg-[#0A5191] rounded-full mb-8 mx-auto" />
                    </FadeIn>
                    <FadeIn delay={200} direction="up">
                        <h2
                            className="font-bold text-[#0e1117] mb-6"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(28px, 4vw, 48px)",
                                lineHeight: "1.2",
                            }}
                        >
                            Our <span className="text-[#0A5191]">Milestones</span> & Achievements
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="up">
                        <p
                            className="text-[#3a3f47] font-medium max-w-2xl mx-auto"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(15px, 1.2vw, 18px)",
                                lineHeight: "1.6",
                            }}
                        >
                            Driven by innovation and excellence, we have consistently delivered high-performance energy solutions that empower businesses.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {achievements.map((item, index) => (
                        <FadeIn key={index} delay={400 + index * 100} direction="up">
                            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(10,81,145,0.05)] border border-white/50 hover:shadow-[0_30px_60px_rgba(10,81,145,0.1)] transition-all duration-500 hover:-translate-y-2 group">
                                <div className="text-[#0A5191] font-bold mb-4 flex items-baseline gap-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(40px, 5vw, 56px)" }}>
                                    <AnimatedCounter value={`${item.value}${item.suffix}`} duration={2500} />
                                </div>
                                <h3 className="text-[#0e1117] font-bold text-xl mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    {item.label}
                                </h3>
                                <p className="text-[#64748B] text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
