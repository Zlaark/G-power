import { FadeIn } from '@/components/FadeIn';

export const EnergyManagement = () => {
    const services = [
        {
            title: "System Design & Customization",
            desc: "Tailored energy storage system architecture designed to meet specific project requirements and site conditions for optimal performance.",
        },
        {
            title: "Project Planning & Execution",
            desc: "Comprehensive project management from initial feasibility assessment through final commissioning and handover.",
        },
        {
            title: "System Integration & Installation",
            desc: "Seamless integration of battery, PCS, and EMS components with professional, code-compliant on-site installation.",
        },
        {
            title: "Remote Monitoring & Maintenance",
            desc: "24/7 real-time system monitoring with proactive maintenance scheduling to ensure peak performance and longevity.",
        },
        {
            title: "Grid Code Compliance & Certification",
            desc: "Full compliance with national grid codes, rigorous safety standards, and all necessary local certification requirements.",
        },
    ];

    return (
        <section className="relative w-full bg-white py-10 sm:py-12 md:py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                <FadeIn delay={100} direction="up">
                    <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-10">
                        <h2
                            className="font-bold text-[#0F172A] mb-5"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(24px, 3vw, 40px)',
                                lineHeight: '1.2',
                            }}
                        >
                            End-to-End Energy Storage Solutions
                        </h2>
                        <p
                            className="font-medium text-[#64748B]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(16px, 1.2vw, 19px)',
                                lineHeight: '1.6',
                            }}
                        >
                            From design to deployment, G-Power provides complete energy storage solutions.
                        </p>
                    </div>
                </FadeIn>

                {/* 1 Large + 4 Small Grid */}
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
                    
                    {/* Featured Large Card (Left - Spans 1 column on LG, but we'll make it span 1 and the other grid span 2) */}
                    <FadeIn delay={200} direction="right" className="lg:col-span-1 h-full">
                        <div className="group relative rounded-[20px] bg-[#0A5191] p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,81,145,0.2)] hover:-translate-y-1">
                            {/* Decorative background pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-bl-full transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#38BDF8] opacity-20 blur-2xl rounded-full" />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-[12px] bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 md:mb-8">
                                    <span className="font-bold text-white text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>01</span>
                                </div>
                                <h3
                                    className="font-bold text-white mb-4"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(22px, 2vw, 28px)',
                                        lineHeight: '1.3',
                                    }}
                                >
                                    {services[0].title}
                                </h3>
                                <p
                                    className="font-medium text-white/80"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(14px, 1vw, 16px)',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    {services[0].desc}
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* 2x2 Grid for remaining services (Right - Spans 2 columns on LG) */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        {services.slice(1).map((service, i) => (
                            <FadeIn key={i} delay={300 + (i * 100)} direction="up" className="h-full">
                                <div className="group h-full p-5 md:p-6 rounded-[20px] border border-[#E5EBF2] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.02)] transition-all duration-500 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:border-[#0A5191]/30 flex flex-col cursor-default">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#0A5191] group-hover:border-[#0A5191] transition-all duration-400">
                                            <span
                                                className="font-bold text-[#64748B] group-hover:text-white transition-colors duration-400"
                                                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px' }}
                                            >
                                                0{i + 2}
                                            </span>
                                        </div>
                                    </div>
                                    <h4
                                        className="font-semibold text-[#0F172A] mb-3 group-hover:text-[#0A5191] transition-colors duration-300"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(16px, 1.2vw, 18px)',
                                            lineHeight: '1.4',
                                        }}
                                    >
                                        {service.title}
                                    </h4>
                                    <p
                                        className="font-medium text-[#64748B] mt-auto"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(13px, 1vw, 15px)',
                                            lineHeight: '1.6',
                                        }}
                                    >
                                        {service.desc}
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
