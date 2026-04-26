import { FadeIn } from '@/components/FadeIn';

export const EnergyManagement = () => {
    const services = [
        { num: "01", title: "System Design & Customization" },
        { num: "02", title: "Project Planning & Execution" },
        { num: "03", title: "System Integration & Installation" },
        { num: "04", title: "Remote Monitoring & Maintenance" },
        { num: "05", title: "Grid Code Compliance & Certification" },
    ];

    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                <FadeIn delay={100} direction="up">
                    <div className="text-center max-w-[800px] mx-auto mb-14 md:mb-20">
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
                                fontSize: 'clamp(16px, 1.3vw, 20px)',
                                lineHeight: '1.6',
                            }}
                        >
                            From design to deployment, G-Power provides complete energy storage solutions.
                        </p>
                    </div>
                </FadeIn>

                {/* Numbered Step Process */}
                <div className="max-w-[1100px] mx-auto relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-gradient-to-r from-[#0A5191]/10 via-[#0A5191]/30 to-[#0A5191]/10 z-0" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
                        {services.map((service, i) => (
                            <FadeIn key={i} delay={200 + (i * 100)} direction="up">
                                <div className="group flex flex-col items-center text-center cursor-default">
                                    {/* Number circle */}
                                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#0A5191]/20 flex items-center justify-center mb-5 group-hover:bg-[#0A5191] group-hover:border-[#0A5191] transition-all duration-400 shadow-[0_4px_12px_rgba(10,81,145,0.08)] group-hover:shadow-[0_8px_24px_rgba(10,81,145,0.25)]">
                                        <span
                                            className="font-bold text-[#0A5191] group-hover:text-white transition-colors duration-400"
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: '16px',
                                            }}
                                        >
                                            {service.num}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4
                                        className="font-semibold text-[#0F172A] group-hover:text-[#0A5191] transition-colors duration-300"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                                            lineHeight: '1.45',
                                        }}
                                    >
                                        {service.title}
                                    </h4>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
