import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
    Layout, 
    BarChart3, 
    Settings2, 
    ShieldCheck, 
    Activity, 
    ArrowUpRight 
} from 'lucide-react';

export const EnergyManagement = () => {
    const services = [
        {
            title: "System Design & Customization",
            desc: "Tailored energy storage system architecture designed to meet specific project requirements and site conditions for optimal performance.",
            icon: Layout,
            color: "blue"
        },
        {
            title: "Project Planning & Execution",
            desc: "Comprehensive project management from initial feasibility assessment through final commissioning and handover.",
            icon: BarChart3,
            color: "sky"
        },
        {
            title: "System Integration & Installation",
            desc: "Seamless integration of battery, PCS, and EMS components with professional, code-compliant on-site installation.",
            icon: Settings2,
            color: "indigo"
        },
        {
            title: "Remote Monitoring & Maintenance",
            desc: "24/7 real-time system monitoring with proactive maintenance scheduling to ensure peak performance and longevity.",
            icon: Activity,
            color: "blue"
        },
        {
            title: "Grid Code Compliance & Certification",
            desc: "Full compliance with national grid codes, rigorous safety standards, and all necessary local certification requirements.",
            icon: ShieldCheck,
            color: "sky"
        },
    ];

    return (
        <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 md:py-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#0A5191]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-[#38BDF8]/5 blur-[100px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#0A5191 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Column: Title & Featured Content */}
                    <div className="lg:col-span-5">
                        <FadeIn delay={100} direction="right">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A5191]/10 border border-[#0A5191]/20 mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#0A5191] animate-pulse" />
                                <span className="text-[#0A5191] text-[13px] font-bold tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Full Lifecycle</span>
                            </div>
                            <h2
                                className="font-bold text-[#0F172A] mb-8"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(32px, 4vw, 52px)',
                                    lineHeight: '1.1',
                                }}
                            >
                                End-to-End <span className="text-[#0A5191]">Energy Storage</span> Solutions
                            </h2>
                            <p
                                className="text-[#64748B] mb-12 max-w-[500px]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(16px, 1.1vw, 20px)',
                                    lineHeight: '1.7',
                                }}
                            >
                                From initial concept and tailored design to professional installation and lifelong monitoring, G-Power delivers comprehensive energy management.
                            </p>
                            
                            {/* Featured Highlight Card */}
                            <div className="group relative rounded-[24px] bg-white border border-[#E2E8F0] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(10,81,145,0.08)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A5191]/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110" />
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-[16px] bg-[#0A5191] flex items-center justify-center mb-8 shadow-lg shadow-[#0A5191]/20">
                                            {(() => {
                                                const Icon = services[0].icon;
                                                return <Icon className="text-white w-7 h-7" />;
                                            })()}
                                        </div>
                                        <h3 className="text-[#0F172A] font-bold text-2xl mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                            {services[0].title}
                                        </h3>
                                    <p className="text-[#64748B] leading-relaxed mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {services[0].desc}
                                    </p>
                                    <Link href="/solutions">
                                        <Button variant="ghost" className="font-bold text-sm tracking-wide uppercase">
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Grid of Service Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {services.slice(1).map((service, i) => (
                            <FadeIn key={i} delay={200 + (i * 100)} direction="up">
                                <div className="group relative h-full p-8 rounded-[24px] border border-[#E2E8F0] bg-white/60 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0A5191]/20 flex flex-col">
                                    <div className="w-12 h-12 rounded-[14px] bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center mb-6 group-hover:bg-[#0A5191]/10 group-hover:border-[#0A5191]/20 transition-all duration-400">
                                        {(() => {
                                            const Icon = service.icon;
                                            return <Icon className="w-6 h-6 text-[#64748B] group-hover:text-[#0A5191] transition-colors" />;
                                        })()}
                                    </div>
                                    <h4
                                        className="font-bold text-[#0F172A] mb-4 group-hover:text-[#0A5191] transition-colors duration-300"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: '19px',
                                            lineHeight: '1.4',
                                        }}
                                    >
                                        {service.title}
                                    </h4>
                                    <p
                                        className="text-[#64748B] text-[15px] leading-relaxed"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                        }}
                                    >
                                        {service.desc}
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-transparent group-hover:border-[#F1F5F9] transition-all">
                                        <div className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                                            <ArrowUpRight className="w-4 h-4 text-[#0A5191]" />
                                        </div>
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
