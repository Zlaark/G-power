"use client";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";
import { Compass, PackageCheck, HardHat, Check, ArrowRight, ArrowUpRight } from "lucide-react";

const cards = [
    {
        title: "Engineering",
        subtitle: "Precision Design",
        icon: Compass,
        color: "blue",
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
        color: "sky",
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
        color: "indigo",
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
        <section className="relative w-full bg-white py-20 sm:py-24 md:py-32 overflow-hidden">
            {/* Premium Technical Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0A5191 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#0A5191]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-[#38BDF8]/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Centered Header Section */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 max-w-4xl mx-auto">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A5191]/10 border border-[#0A5191]/20 mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#0A5191] animate-pulse" />
                            <span className="text-[#0A5191] text-[12px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>EPC Excellence</span>
                        </div>
                    </FadeIn>
                    <FadeIn delay={100} direction="up">
                        <h2
                            className="font-bold text-[#1B2236] mb-8"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(34px, 5vw, 54px)",
                                lineHeight: "1.1",
                            }}
                        >
                            Turnkey <span className="text-[#0A5191]">Energy Solutions</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={200} direction="up">
                        <p
                            className="text-[#64748B] font-medium leading-relaxed max-w-[700px]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(16px, 1.1vw, 19px)",
                            }}
                        >
                            Complete lifecycle support from concept to commissioning, ensuring high-performance battery energy storage systems worldwide.
                        </p>
                    </FadeIn>
                </div>

                {/* Asymmetric Premium Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Featured Large Card (Engineering) */}
                    <div className="lg:col-span-7">
                        <FadeIn delay={300} direction="right" className="h-full">
                            <div className="group relative h-full bg-white rounded-[40px] border border-[#F1F5F9] p-10 lg:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_80px_rgba(10,81,145,0.08)] hover:border-[#0A5191]/20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A5191]/5 rounded-bl-[200px] transition-transform duration-1000 group-hover:scale-110" />
                                
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-[24px] bg-[#0A5191] flex items-center justify-center mb-10 shadow-xl shadow-[#0A5191]/20 group-hover:scale-110 transition-transform duration-500">
                                        <Compass className="text-white w-10 h-10" />
                                    </div>
                                    
                                    <p className="text-[#0A5191] text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{cards[0].subtitle}</p>
                                    <h3 className="text-[#1B2236] font-bold text-4xl mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{cards[0].title}</h3>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                                        {cards[0].items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 group/item">
                                                <div className="w-6 h-6 shrink-0 rounded-full bg-[#F1F5F9] flex items-center justify-center group-hover/item:bg-[#0A5191] transition-colors">
                                                    <Check className="w-3.5 h-3.5 text-[#0A5191] group-hover/item:text-white transition-colors" />
                                                </div>
                                                <span className="text-[#64748B] text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <Button variant="primary" size="lg" className="rounded-[14px]">
                                        Engineering Capability
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Secondary Grid Column */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {cards.slice(1).map((card, i) => (
                            <FadeIn key={i} delay={450 + (i * 150)} direction="left" className="flex-1">
                                <div className="group relative h-full bg-[#F8FAFC]/50 backdrop-blur-sm rounded-[32px] border border-[#F1F5F9] p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0A5191]/20">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-14 h-14 rounded-[18px] bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm group-hover:bg-[#0A5191]/10 group-hover:border-[#0A5191]/20 transition-all">
                                            {(() => {
                                                const Icon = card.icon;
                                                return <Icon className="w-7 h-7 text-[#0A5191]" />;
                                            })()}
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#0A5191] group-hover:text-white group-hover:border-[#0A5191] transition-all duration-500">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    
                                    <p className="text-[#0A5191]/70 text-[12px] font-bold tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{card.subtitle}</p>
                                    <h4 className="text-[#1B2236] font-bold text-2xl mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>{card.title}</h4>
                                    
                                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                                        {card.items.slice(0, 2).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5191]" />
                                                <span className="text-[#64748B] text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{item}</span>
                                            </div>
                                        ))}
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
