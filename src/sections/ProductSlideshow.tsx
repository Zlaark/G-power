"use client";
import { useState, useEffect, useCallback } from "react";
import { FadeIn } from "@/components/FadeIn";

const products = [
    {
        name: "Full Load 5.0",
        tagline: "Industrial-Grade Energy Storage",
        description:
            "High-capacity 5 kWh battery energy storage system designed for demanding commercial and industrial applications. Delivers consistent power with advanced thermal management and intelligent BMS.",
        image: "/full-load-5.png",
    },
    {
        name: "Jumbo 0.25",
        tagline: "Compact. Powerful. Reliable.",
        description:
            "A versatile 0.25 kWh lithium battery module built for modular deployments. Ideal for small-scale energy storage, telecom towers, and distributed power applications.",
        image: "/jumbo-025.png",
    },
    {
        name: "PowerPod",
        tagline: "Home Energy, Reimagined",
        description:
            "Smart residential energy storage system that pairs seamlessly with your home energy setup. Intelligent inverter integration, real-time monitoring, and whisper-quiet operation.",
        image: "/powerpod.png",
    },
    {
        name: "EVgo",
        tagline: "Powering the Future of Mobility",
        description:
            "High-performance lithium battery packs engineered for electric vehicles. From 2-wheelers to commercial fleets — built for range, safety, and longevity.",
        image: "/evgo.png",
    },
];

export const ProductSlideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning || index === activeIndex) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex(index);
                setTimeout(() => setIsTransitioning(false), 50);
            }, 300);
        },
        [isTransitioning, activeIndex]
    );

    const goNext = useCallback(() => {
        goTo((activeIndex + 1) % products.length);
    }, [activeIndex, goTo]);

    const goPrev = useCallback(() => {
        goTo((activeIndex - 1 + products.length) % products.length);
    }, [activeIndex, goTo]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(goNext, 5000);
        return () => clearInterval(timer);
    }, [goNext]);

    const product = products[activeIndex];

    return (
        <section className="relative w-full bg-gradient-to-b from-[#f7f9fc] to-white overflow-hidden">
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes ps-slide-up {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .ps-animate-in {
                    animation: ps-slide-up 0.55s cubic-bezier(0.22,0.61,0.36,1) forwards;
                }
                .ps-fade-out {
                    opacity: 0;
                    transform: translateY(-12px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                @keyframes ps-progress {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
                .ps-progress-active {
                    animation: ps-progress 5s linear forwards;
                }
                .ps-img-float {
                    animation: bess-float 5s ease-in-out infinite;
                }
                @keyframes bess-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `,
                }}
            />

            {/* Decorative blurs */}
            <div className="absolute top-[10%] left-[-5%] w-[320px] h-[320px] bg-[#0A5191]/6 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[280px] h-[280px] bg-[#0A5191]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-[1920px] px-[20px] md:px-[60px] lg:px-[86px] py-[60px] md:py-[80px] lg:py-[100px] relative z-10">
                {/* Section heading */}
                <FadeIn delay={100} direction="up">
                    <div className="text-center mb-[40px] md:mb-[56px]">
                        <span
                            className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em] mb-4"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "12px",
                            }}
                        >
                            Our Products
                        </span>
                        <h2
                            className="font-bold text-[#0e1117]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(24px, 3vw, 40px)",
                                lineHeight: "1.2",
                            }}
                        >
                            Built to{" "}
                            <span className="text-[#0A5191]">Perform</span>,
                            Designed to{" "}
                            <span className="text-[#0A5191]">Last</span>
                        </h2>
                    </div>
                </FadeIn>

                {/* Main slideshow area */}
                <div className="flex flex-col lg:flex-row items-center gap-[30px] md:gap-[50px] lg:gap-[70px]">
                    {/* Left: Product info */}
                    <div className="flex-1 flex flex-col items-start gap-[18px] md:gap-[24px] max-w-[560px] w-full">
                        <div
                            key={activeIndex}
                            className={
                                isTransitioning ? "ps-fade-out" : "ps-animate-in"
                            }
                        >
                            {/* Product name */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-[4px] h-[36px] rounded-full bg-[#0A5191]" />
                                <h3
                                    className="font-bold text-[#0e1117]"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "clamp(24px, 2.8vw, 38px)",
                                        lineHeight: "1.15",
                                    }}
                                >
                                    {product.name}
                                </h3>
                            </div>

                            {/* Tagline */}
                            <p
                                className="text-[#0A5191] font-semibold mb-2"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(14px, 1.3vw, 18px)",
                                }}
                            >
                                {product.tagline}
                            </p>

                            {/* Description */}
                            <p
                                className="text-[#4a5060] font-medium leading-relaxed"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "clamp(13px, 1.1vw, 15px)",
                                    lineHeight: "1.7",
                                }}
                            >
                                {product.description}
                            </p>
                        </div>

                        {/* Progress dots / indicators */}
                        <div className="flex items-center gap-3 mt-2">
                            {products.map((p, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="group flex flex-col items-start gap-1.5"
                                    aria-label={`Go to ${p.name}`}
                                >
                                    <span
                                        className={`block text-[11px] font-semibold tracking-wide transition-colors duration-300 ${
                                            i === activeIndex
                                                ? "text-[#0A5191]"
                                                : "text-[#94a3b8] group-hover:text-[#64748b]"
                                        }`}
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="w-[48px] h-[3px] rounded-full bg-[#e2e8f0] overflow-hidden">
                                        <div
                                            className={`h-full rounded-full bg-[#0A5191] ${
                                                i === activeIndex
                                                    ? "ps-progress-active"
                                                    : i < activeIndex
                                                    ? "w-full"
                                                    : "w-0"
                                            }`}
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Arrow nav */}
                        <div className="flex items-center gap-3 mt-4">
                            <button
                                onClick={goPrev}
                                className="w-[44px] h-[44px] rounded-full border border-[#d1d5db] flex items-center justify-center hover:bg-[#0A5191] hover:border-[#0A5191] hover:text-white text-[#334155] transition-all duration-300"
                                aria-label="Previous product"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 12H5" />
                                    <path d="m12 19-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={goNext}
                                className="w-[44px] h-[44px] rounded-full border border-[#d1d5db] flex items-center justify-center hover:bg-[#0A5191] hover:border-[#0A5191] hover:text-white text-[#334155] transition-all duration-300"
                                aria-label="Next product"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right: Product image */}
                    <div className="flex-1 relative w-full max-w-[620px] flex items-center justify-center lg:justify-end">
                        <div className="ps-img-float relative w-full lg:w-[520px] bg-white">
                            <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(10,81,145,0.15)]">
                                <img
                                    key={activeIndex}
                                    src={product.image}
                                    alt={product.name}
                                    className={`w-full h-auto object-cover ${
                                        isTransitioning ? "ps-fade-out" : "ps-animate-in"
                                    }`}
                                    style={{ aspectRatio: "4 / 3" }}
                                />
                            </div>

                            {/* Decorative corner accents (positioned relative to image container) */}
                            <div className="absolute -bottom-[8px] -right-[8px] w-[60px] h-[60px] border-b-[3px] border-r-[3px] border-[#0A5191]/20 rounded-br-[16px] hidden lg:block" />
                            <div className="absolute -top-[8px] -left-[8px] w-[60px] h-[60px] border-t-[3px] border-l-[3px] border-[#0A5191]/20 rounded-tl-[16px] hidden lg:block" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
