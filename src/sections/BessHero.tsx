"use client";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
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

export const BessHero = () => {
    return (
        <section className="relative w-full bg-[#f7f9fc] overflow-hidden">
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .bess-hero-btn {
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    transition: color 0.4s ease, border-color 0.4s ease;
                }
                .bess-hero-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    z-index: -1;
                    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .bess-hero-btn:hover::before {
                    width: 100%;
                }

                /* Primary button sweep */
                .bess-btn-primary::before {
                    background-color: #083d6e;
                }
                .bess-btn-primary:hover {
                    border-color: #083d6e;
                }

                /* Outline button sweep */
                .bess-btn-outline::before {
                    background-color: #0A5191;
                }
                .bess-btn-outline:hover {
                    color: #fff !important;
                    border-color: #0A5191;
                }

                /* Floating animation for image */
                @keyframes bess-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .bess-float-img {
                    animation: bess-float 5s ease-in-out infinite;
                }

                /* Subtle pulse glow behind image */
                @keyframes bess-glow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.05); }
                }
                .bess-glow {
                    animation: bess-glow 4s ease-in-out infinite;
                }

                /* Accent bar slide-in */
                @keyframes bess-slide-in {
                    0% { width: 0; }
                    100% { width: 80px; }
                }
                .bess-accent-bar {
                    animation: bess-slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    animation-delay: 0.4s;
                    width: 0;
                }
            `,
                }}
            />

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#0A5191]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A5191]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-[1920px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-[30px] md:gap-[50px] lg:gap-[80px] px-[20px] md:px-[60px] lg:pl-[86px] lg:pr-[60px] py-[50px] md:py-[70px] lg:py-[100px]">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col items-start gap-[20px] md:gap-[28px] max-w-[650px]">
                        {/* Accent bar */}
                        <FadeIn delay={100} direction="right">
                            <div className="bess-accent-bar h-[4px] bg-[#0A5191] rounded-full" />
                        </FadeIn>

                        {/* H1 */}
                        <FadeIn delay={200} direction="right">
                            <h2
                                className="font-bold leading-tight text-[#0e1117]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(22px, 2.5vw, 36px)",
                                    lineHeight: "1.2",
                                }}
                            >
                                We Provide Reliable{" "}
                                <span className="text-[#0A5191]">BESS Sustainability</span>{" "}
                                for Your Business.
                            </h2>
                        </FadeIn>

                        {/* Sub-text */}
                        <FadeIn delay={400} direction="right">
                            <p
                                className="text-[#0A5191]/80 font-medium leading-relaxed max-w-[540px]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(15px, 1.2vw, 18px)',
                                    lineHeight: '1.7',
                                }}
                            >
                                Experience high-performance, containerized battery energy storage systems (BESS) designed to stabilize the grid and maximize renewable integration.
                            </p>
                        </FadeIn>

                        {/* Separator line */}
                        <FadeIn delay={500} direction="right">
                            <div className="w-full max-w-[420px] h-[1px] bg-gradient-to-r from-[#0A5191]/30 to-transparent" />
                        </FadeIn>

                        {/* CTA Buttons */}
                        <FadeIn delay={600} direction="up" className="w-full">
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                <Link href="/solutions/utility/products" className="w-full sm:w-auto">
                                    <Button variant="primary" size="lg" className="w-full sm:w-[220px] !rounded-[14px] py-4">
                                        Explore Solution
                                    </Button>
                                </Link>
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button variant="outline" size="lg" className="w-full sm:w-[220px] !rounded-[14px] !text-[#0A5191] !border-[#0A5191] hover:!text-white py-4">
                                        Contact Us Now
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Image - larger and right-aligned */}
                    <div className="flex-1 relative w-full max-w-[720px] flex items-center justify-center lg:justify-end" style={{ minHeight: '500px' }}>
                        <FadeIn delay={400} direction="left" className="w-full lg:w-auto">
                            <div className="bess-float-img relative w-full lg:w-[620px] rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(10,81,145,0.2)]">
                                <img
                                    src="/We Provide Reliable BESS Solutions for Your Business (Home Page).webp"
                                    alt="Reliable BESS Sustainability"
                                    className="w-full h-auto object-cover"
                                    style={{ aspectRatio: '4 / 3' }}
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Milestones / Achievements Section */}
                <div className="mt-[40px] md:mt-[60px] px-[20px] md:px-[60px] lg:px-[86px] pb-[60px] md:pb-[80px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {achievements.map((item, index) => (
                            <FadeIn key={index} delay={700 + index * 100} direction="up">
                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-[0_15px_40px_rgba(10,81,145,0.04)] border border-white/50 hover:shadow-[0_25px_50px_rgba(10,81,145,0.08)] transition-all duration-500 hover:-translate-y-1 group">
                                    <div className="text-[#0A5191] font-bold mb-2 flex items-baseline gap-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 4vw, 42px)" }}>
                                        <AnimatedCounter value={`${item.value}${item.suffix}`} duration={2500} />
                                    </div>
                                    <h3 className="text-[#0A5191] font-bold text-lg mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {item.label}
                                    </h3>
                                    <p className="text-[#0A5191]/70 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {item.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
