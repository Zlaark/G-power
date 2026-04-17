"use client";
import { FadeIn } from "@/components/FadeIn";
import { Compass, PackageCheck, HardHat, Check } from "lucide-react";

const cards = [
    {
        title: "Engineering",
        icon: <Compass className="w-6 h-6 text-[#2E3545]" strokeWidth={1.5} />,
        items: [
            "System sizing and configuration",
            "Electrical design and SLD",
            "Load profile and energy analysis",
            "Safety and compliance design",
        ],
    },
    {
        title: "Procurement",
        icon: <PackageCheck className="w-6 h-6 text-[#2E3545]" strokeWidth={1.5} />,
        items: [
            "Battery, PCS, and BOS sourcing",
            "Vendor selection and qualification",
            "Quality assurance and testing",
            "Logistics and supply chain management",
        ],
    },
    {
        title: "Construction",
        icon: <HardHat className="w-6 h-6 text-[#2E3545]" strokeWidth={1.5} />,
        items: [
            "Installation and commissioning",
            "Site execution and supervision",
            "Testing and performance validation",
            "Handover and documentation",
        ],
    },
];

export const TurnkeyEnergySolutions = () => {
    return (
        <section className="w-full bg-[#FAFAFC] py-[80px] md:py-[100px] lg:py-[120px]">
            <div className="mx-auto max-w-[1280px] px-6">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <FadeIn direction="up">
                        <h2
                            className="font-bold text-[#6D7787] tracking-tight"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(32px, 4vw, 48px)",
                                lineHeight: "1.2",
                            }}
                        >
                            Turnkey <span className="text-[#1B2236]">Energy Solutions</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={100} direction="up">
                        <p
                            className="mt-6 text-[#8B93A0] max-w-[700px] font-light"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(16px, 1.5vw, 18px)",
                                lineHeight: "1.6",
                            }}
                        >
                            Engineering, Procurement, and Construction tailored for highly resilient battery energy storage systems globally.
                        </p>
                    </FadeIn>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <FadeIn key={index} delay={200 + index * 100} direction="up" className="h-full">
                            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.03)] h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center mb-8 border border-[#F1F3F5]">
                                    {card.icon}
                                </div>

                                {/* Card Title */}
                                <h3
                                    className="font-bold text-[#1B2236] mb-8"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "24px",
                                    }}
                                >
                                    {card.title}
                                </h3>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-[#F1F3F5] mb-8" />

                                {/* List Items */}
                                <ul className="flex flex-col gap-5 mt-auto">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-[2px] flex-shrink-0 w-5 h-5 rounded-full bg-[#F8F9FA] border border-[#F1F3F5] flex items-center justify-center">
                                                <Check className="w-3 h-3 text-[#6D7787]" strokeWidth={2.5} />
                                            </div>
                                            <span
                                                className="text-[#4A5060]"
                                                style={{
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontSize: "15px",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
