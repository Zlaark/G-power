"use client";
import { FadeIn } from "@/components/FadeIn";

const features = [
    {
        title: "Built for Real-World Performance",
        body: "G-power systems are designed to handle fluctuating loads, temperature variations, and continuous cycling without compromising stability. What you see on paper is what you get on site.",
    },
    {
        title: "Engineering That Scales",
        body: "From a single facility to multi-location deployments, our solutions are modular and future-ready. You can expand without redesigning your entire energy architecture.",
    },
    {
        title: "Intelligence at the Core",
        body: "Advanced BMS and EMS ensure every unit of energy is monitored, optimized, and used efficiently. Less guesswork. More control.",
    },
    {
        title: "Focused on Business Outcomes",
        body: "Lower peak demand charges, improved uptime, and better ROI. Every system is designed with clear operational and financial impact in mind.",
    },
    {
        title: "Safety, Not as a Feature but a Standard",
        body: "Integrated safety mechanisms, thermal management, and compliance with global standards ensure long-term, risk-free operation.",
    },
    {
        title: "Execution You Can Rely On",
        body: "From system design to commissioning and beyond, we stay involved. Clear timelines, structured delivery, and ongoing support.",
    },
];

export const WhyGPowerHome = () => {

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .wgp-img-wrap {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 24px 64px rgba(10,81,145,0.18);
                }
                .wgp-img-wrap img {
                    display: block;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    transition: opacity 1s ease-in-out;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .wgp-img-wrap img.active {
                    opacity: 1;
                }
                .wgp-img-wrap img:not(.active) {
                    opacity: 0;
                }
                .wgp-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #0A5191;
                    flex-shrink: 0;
                    margin-top: 5px;
                }
                @keyframes wgp-bar-in {
                    from { width: 0; }
                    to   { width: 52px; }
                }
                .wgp-accent-bar {
                    height: 4px;
                    width: 0;
                    border-radius: 4px;
                    background: #0A5191;
                    animation: wgp-bar-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
                }
                .wgp-indicator {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgba(10,81,145,0.3);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .wgp-indicator.active {
                    background: #0A5191;
                    transform: scale(1.2);
                }
            `,
                }}
            />

            {/* Subtle background tint on right side */}
            <div
                className="absolute top-0 right-0 h-full w-[45%] pointer-events-none"
                style={{ background: "linear-gradient(to left, #f0f6ff 0%, transparent 100%)" }}
            />

            <div className="mx-auto max-w-[1920px] px-[20px] md:px-[60px] lg:pl-[86px] lg:pr-[60px] py-[50px] md:py-[70px] lg:py-[90px] relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-[40px] md:gap-[60px] lg:gap-[80px]">

                    {/* ── Left: text content ── */}
                    <div className="flex-1 flex flex-col gap-[22px] max-w-[640px]">

                        {/* Accent bar */}
                        <div className="wgp-accent-bar" />

                        {/* Heading */}
                        <FadeIn delay={100} direction="right">
                            <h2
                                className="font-bold text-[#0e1117]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(22px, 2.5vw, 36px)",
                                    lineHeight: "1.2",
                                }}
                            >
                                Why{" "}
                                <span className="text-[#0A5191]">G-power?</span>
                            </h2>
                        </FadeIn>

                        {/* Intro sentence */}
                        <FadeIn delay={200} direction="right">
                            <p
                                className="text-[#3a3f47] font-medium"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(13px, 1.4vw, 16px)",
                                    lineHeight: "1.65",
                                }}
                            >
                                Energy storage isn&apos;t just about batteries. It&apos;s about how reliably your system performs when it actually matters.
                            </p>
                        </FadeIn>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-gradient-to-r from-[#0A5191]/25 to-transparent" />

                        {/* Feature list */}
                        <div className="flex flex-col gap-[18px] md:gap-[20px]">
                            {features.map((f, i) => (
                                <FadeIn key={i} delay={250 + i * 80} direction="right">
                                    <div className="flex items-start gap-[12px]">
                                        <div className="wgp-dot" />
                                        <p
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: "clamp(12px, 1.2vw, 14px)",
                                                lineHeight: "1.65",
                                                color: "#222",
                                            }}
                                        >
                                            <strong className="text-[#0e1117]">{f.title}. </strong>
                                            <span className="text-[#4a5060]">{f.body}</span>
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: image ── */}
                    <div className="flex-1 w-full max-w-[620px] flex items-start justify-center lg:justify-end lg:pt-[10px] relative">
                        {/* Glow blob */}
                        <div
                            className="absolute -inset-[30px] rounded-[40px] pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(10,81,145,0.10) 0%, transparent 70%)",
                            }}
                        />

                        <FadeIn delay={300} direction="left" className="w-full">
                            <div className="wgp-img-wrap">
                                <img
                                    src="/Why G-power (Home Page).webp"
                                    alt="G-power engineer at BESS facility"
                                />
                                {/* Branded gradient overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(to top, rgba(10,81,145,0.12) 0%, transparent 50%)",
                                    }}
                                />
                            </div>
                        </FadeIn>

                        {/* Corner accents */}
                        <div className="absolute -bottom-[10px] -right-[10px] w-[70px] h-[70px] border-b-[3px] border-r-[3px] border-[#0A5191]/25 rounded-br-[20px] hidden lg:block" />
                        <div className="absolute -top-[10px] -left-[10px] w-[70px] h-[70px] border-t-[3px] border-l-[3px] border-[#0A5191]/25 rounded-tl-[20px] hidden lg:block" />
                    </div>

                </div>
            </div>
        </section>
    );
};
