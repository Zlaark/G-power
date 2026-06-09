"use client";
import { FadeIn } from "@/components/FadeIn";
import { Battery, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
    {
        icon: Battery,
        label: "Batteries Shipped",
        value: "1000+",
        description: "Industrial grade BESS units deployed."
    },
    {
        icon: Zap,
        label: "Capacity Deployed",
        value: "50MW+",
        description: "Total power storage delivered to clients."
    },
    {
        icon: ShieldCheck,
        label: "Safety Standard",
        value: "100%",
        description: "Rigorous quality and safety compliance."
    },
    {
        icon: TrendingUp,
        label: "Market Growth",
        value: "45%",
        description: "Year-over-year expansion in energy sector."
    }
];

export const AboutUsStats = () => {
    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-[10%] left-[-5%] w-[320px] h-[320px] bg-[#0A5191]/6 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[280px] h-[280px] bg-[#0A5191]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-[1920px] px-[20px] md:px-[60px] lg:px-[86px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left side: Narrative */}
                    <div className="flex-1 max-w-[640px]">
                        <FadeIn delay={100} direction="right">
                            <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-bold uppercase tracking-[0.2em] mb-6 text-[12px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                About Our Impact
                            </span>
                        </FadeIn>
                        <FadeIn delay={200} direction="right">
                            <h2
                                className="font-bold text-[#121010] mb-8"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(32px, 4.5vw, 56px)",
                                    lineHeight: "1.1",
                                }}
                            >
                                Powering Tomorrow, <span className="text-[#0A5191]">One Battery</span> at a Time.
                            </h2>
                        </FadeIn>
                        <FadeIn delay={300} direction="right">
                            <p
                                className="text-[#475569] font-medium leading-relaxed mb-10"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(16px, 1.3vw, 20px)",
                                    lineHeight: "1.7",
                                }}
                            >
                                G-Power is at the forefront of the energy transition. We don&apos;t just manufacture batteries; we build the infrastructure for a sustainable and resilient future. Our systems are engineered to provide reliable power when it&apos;s needed most.
                            </p>
                        </FadeIn>
                        <FadeIn delay={400} direction="up">
                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-4 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                                    <p className="text-[#0A5191] font-bold text-2xl mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>99.9%</p>
                                    <p className="text-[#475569] text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>System Uptime</p>
                                </div>
                                <div className="px-6 py-4 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                                    <p className="text-[#0A5191] font-bold text-2xl mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>24/7</p>
                                    <p className="text-[#475569] text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Support Available</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right side: Icon Stats */}
                    <div className="flex-1 w-full max-w-[600px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <FadeIn key={index} delay={500 + index * 100} direction="up">
                                        <div className="p-8 rounded-[32px] bg-white border border-[#f1f5f9] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(10,81,145,0.08)] transition-all duration-500 hover:-translate-y-2 group">
                                            <div className="w-14 h-14 rounded-2xl bg-[#0A5191]/10 flex items-center justify-center mb-6 group-hover:bg-[#0A5191] transition-colors duration-500">
                                                <Icon className="w-7 h-7 text-[#0A5191] group-hover:text-white transition-colors duration-500" />
                                            </div>
                                            <div className="text-[#121010] font-bold text-3xl mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                                <AnimatedCounter value={stat.value} duration={2000} />
                                            </div>
                                            <p className="text-[#121010] font-bold text-lg mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
                                            <p className="text-[#475569] text-sm font-medium leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.description}</p>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
