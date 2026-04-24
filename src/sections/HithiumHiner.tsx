import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const HithiumHiner = () => {
    return (
        <section className="relative w-full bg-[#050505] py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#0A5191]/10 blur-[150px] rounded-full pointer-events-none opacity-60" />
            
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4ca5ff] mb-12 md:mb-16 lg:mb-20"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(24px, 3vw, 36px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Built on Engineering Excellence
                    </h2>
                </FadeIn>

                {/* Two-Column: Left Heading + Right Description */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
                    {/* Left Heading */}
                    <FadeIn delay={200} direction="right" className="md:w-[40%] flex-shrink-0 md:pl-8 lg:pl-12">
                        <h3
                            className="font-semibold text-white relative pl-6 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-gradient-to-b before:from-[#4ca5ff] before:to-[#0A5191] before:rounded-full"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(20px, 2.5vw, 30px)',
                                lineHeight: '1.3',
                            }}
                        >
                            At G-Power, engineering innovation drives every solution we deliver.
                        </h3>
                    </FadeIn>

                    {/* Right Description */}
                    <FadeIn delay={300} direction="left" className="md:w-[60%] max-w-[976px]">
                        <div
                            className="p-8 rounded-[24px] bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] font-medium text-white/80"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.2vw, 16px)',
                                lineHeight: '1.6',
                            }}
                        >
                            <p className="mb-6 text-white text-[110%] font-semibold">Our capabilities include:</p>
                            <ul className="space-y-4">
                                {[
                                    "State-of-the-art lithium battery assembly facility in India",
                                    "Advanced expertise in Battery Energy Storage Systems (BESS)",
                                    "In-house developed Energy Management System (EMS)",
                                    "Integration with multiple battery, PCS, and EMS OEMs",
                                    "Specialized expertise in system software, troubleshooting, and optimization"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#4ca5ff] shadow-[0_0_12px_#4ca5ff] flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                                        <span className="transition-colors duration-300 group-hover:text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                </div>

                {/* BESS Facility Image */}
                <FadeIn delay={400} direction="up" className="relative w-full mt-8 md:mt-12 lg:mt-16 aspect-[1562/636] rounded-[24px] overflow-hidden group border border-white/10 shadow-[0_16px_60px_rgba(10,81,145,0.2)] hover:shadow-[0_16px_60px_rgba(10,81,145,0.4)] transition-all duration-700 hover:-translate-y-2">
                    {/* Inner glow on image container */}
                    <div className="absolute inset-0 bg-[#0A5191]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
                    
                    <Image
                        src="/about-bess-facility.jpg"
                        alt="Aerial view of battery energy storage system facility with solar panels"
                        fill
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 1562px"
                        priority
                    />
                    
                    {/* Bottom gradient on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-80" />
                </FadeIn>
            </div>
        </section>
    );
};
