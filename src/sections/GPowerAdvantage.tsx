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

export const GPowerAdvantage = () => {
    return (
        <section className="relative w-full overflow-hidden" style={{ background: "#f4f7fb" }}>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .gpa-img-wrap {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 28px 72px rgba(10,81,145,0.16);
                }
                .gpa-img-wrap img {
                    display: block;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
                }
                .gpa-img-wrap:hover img {
                    transform: scale(1.04);
                }
                .gpa-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #0A5191;
                    flex-shrink: 0;
                    margin-top: 6px;
                }
                @keyframes gpa-bar-in {
                    from { width: 0; }
                    to   { width: 52px; }
                }
                .gpa-accent-bar {
                    height: 4px;
                    width: 0;
                    border-radius: 4px;
                    background: linear-gradient(90deg, #0A5191, #3a7fc1);
                    animation: gpa-bar-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
                }
                .gpa-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 5px 14px;
                    border-radius: 100px;
                    background: rgba(10,81,145,0.08);
                    border: 1px solid rgba(10,81,145,0.18);
                    color: #0A5191;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    font-family: 'Poppins', sans-serif;
                }
            `,
                }}
            />

            {/* Background decorative shapes */}
            <div
                className="absolute top-0 left-0 h-full w-[45%] pointer-events-none"
                style={{ background: "linear-gradient(to right, rgba(10,81,145,0.04) 0%, transparent 100%)" }}
            />
            <div
                className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(10,81,145,0.08) 0%, transparent 70%)" }}
            />

            <div className="mx-auto max-w-[1920px] px-[20px] md:px-[60px] lg:pl-[86px] lg:pr-[60px] py-[50px] md:py-[70px] lg:py-[90px] relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-[40px] md:gap-[60px] lg:gap-[80px]">

                    {/* ── Left: text content ── */}
                    <div className="flex-1 flex flex-col gap-[20px] max-w-[640px]">

                        {/* Accent bar */}
                        <div className="gpa-accent-bar" />

                        {/* Badge */}
                        <FadeIn delay={80} direction="right">
                            <span className="gpa-badge">
                                <span
                                    style={{
                                        width: 7,
                                        height: 7,
                                        borderRadius: "50%",
                                        background: "#0A5191",
                                        display: "inline-block",
                                    }}
                                />
                                Our Advantage
                            </span>
                        </FadeIn>

                        {/* Heading */}
                        <FadeIn delay={150} direction="right">
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
                        <FadeIn delay={250} direction="right">
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
                        <div className="flex flex-col gap-[16px] md:gap-[18px]">
                            {features.map((f, i) => (
                                <FadeIn key={i} delay={300 + i * 75} direction="right">
                                    <div className="flex items-start gap-[12px]">
                                        <div className="gpa-dot" />
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
                            className="absolute -inset-[40px] rounded-[50px] pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(10,81,145,0.10) 0%, transparent 65%)",
                            }}
                        />

                        <FadeIn delay={350} direction="left" className="w-full">
                            <div className="gpa-img-wrap">
                                <img
                                    src="/gpower-advantage.png"
                                    alt="G-power BESS control room monitoring"
                                />
                                {/* Brand overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(to top, rgba(10,81,145,0.14) 0%, transparent 55%)",
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
