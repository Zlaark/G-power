"use client";
import { FadeIn } from "@/components/FadeIn";
import { Compass, PackageCheck, HardHat, Check } from "lucide-react";

const cards = [
    {
        title: "Engineering",
        subtitle: "Precision Design",
        icon: Compass,
        items: [
            "System sizing and configuration",
            "Electrical design and SLD",
            "Load profile and energy analysis",
            "Safety and compliance design",
        ],
    },
    {
        title: "Procurement",
        subtitle: "Global Sourcing",
        icon: PackageCheck,
        items: [
            "Battery, PCS, and BOS sourcing",
            "Vendor selection and qualification",
            "Quality assurance and testing",
            "Logistics and supply chain management",
        ],
    },
    {
        title: "Construction",
        subtitle: "On-Site Excellence",
        icon: HardHat,
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
        <section className="relative w-full bg-gradient-to-b from-white to-[#F8FAFC] py-20 sm:py-24 md:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0A5191 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A5191]/10 border border-[#0A5191]/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#0A5191] animate-pulse" />
                            <span className="text-[#0A5191] text-[11px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>EPC Excellence</span>
                        </div>
                    </FadeIn>
                    <FadeIn delay={100} direction="up">
                        <h2
                            className="font-bold text-[#1B2236] mb-6"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(32px, 4.5vw, 48px)",
                                lineHeight: "1.15",
                            }}
                        >
                            Turnkey <span className="text-[#0A5191]">Energy Solutions</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={200} direction="up">
                        <p
                            className="text-[#64748B] font-medium leading-relaxed"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(15px, 1.2vw, 18px)",
                            }}
                        >
                            Complete lifecycle support from concept to commissioning, ensuring high-performance battery energy storage systems worldwide.
                        </p>
                    </FadeIn>
                </div>

                {/* Cards Grid - Equal 3 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <FadeIn key={index} delay={300 + (index * 150)} direction="up">
                                <div className="group relative h-full bg-white rounded-[28px] border border-[#E5EBF2] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(10,81,145,0.12)] hover:border-[#0A5191]/30 hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0A5191] to-[#0A5191]/80 flex items-center justify-center mb-6 shadow-lg shadow-[#0A5191]/20 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="text-white w-8 h-8" strokeWidth={2} />
                                    </div>
                                    
                                    {/* Subtitle */}
                                    <p className="text-[#0A5191] text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {card.subtitle}
                                    </p>
                                    
                                    {/* Title */}
                                    <h3 className="text-[#1B2236] font-bold text-[28px] mb-6 group-hover:text-[#0A5191] transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {card.title}
                                    </h3>
                                    
                                    {/* Items List */}
                                    <div className="space-y-4">
                                        {card.items.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-5 h-5 shrink-0 rounded-full bg-[#F1F5F9] flex items-center justify-center mt-0.5 group-hover:bg-[#0A5191]/10 transition-colors">
                                                    <Check className="w-3 h-3 text-[#0A5191]" strokeWidth={3} />
                                                </div>
                                                <span className="text-[#64748B] text-[15px] font-medium leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
