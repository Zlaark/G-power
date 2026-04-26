import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const HithiumHiner = () => {
    return (
        <section className="relative w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="relative z-10 max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-[#0F172A] mb-10 md:mb-14 lg:mb-16"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(24px, 3vw, 36px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Built on Engineering Excellence
                    </h2>
                </FadeIn>

                {/* Unified Premium Card */}
                <FadeIn delay={200} direction="up" className="max-w-[1200px] mx-auto">
                    <div className="rounded-[24px] overflow-hidden border border-[#E5EBF2] shadow-[0_20px_40px_rgba(15,23,42,0.06)] flex flex-col md:flex-row items-stretch bg-white">
                        
                        {/* Left Side: High Contrast Dark Panel */}
                        <div className="md:w-[45%] bg-[#0F172A] p-8 md:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden group">
                            {/* Subtle background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A5191] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0A5191] rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
                            
                            <h3
                                className="font-semibold text-white relative z-10 leading-[1.35]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(24px, 2.5vw, 36px)',
                                }}
                            >
                                At G-Power, engineering innovation drives every solution we deliver.
                                <div className="mt-8 w-12 h-1.5 bg-[#0A5191] rounded-full" />
                            </h3>
                        </div>

                        {/* Right Side: Clean Capabilities List */}
                        <div
                            className="md:w-[55%] p-8 md:p-10 lg:p-14 font-medium text-[#475569] flex flex-col justify-center relative"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.1vw, 16px)',
                                lineHeight: '1.6',
                            }}
                        >
                            <h4 className="mb-8 text-[#0F172A] text-xl lg:text-2xl font-semibold tracking-tight">Our core capabilities:</h4>
                            <ul className="space-y-5">
                                {[
                                    "State-of-the-art lithium battery assembly facility in India",
                                    "Advanced expertise in Battery Energy Storage Systems (BESS)",
                                    "In-house developed Energy Management System (EMS)",
                                    "Integration with multiple battery, PCS, and EMS OEMs",
                                    "Specialized expertise in system software, troubleshooting, and optimization"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-5 group cursor-default">
                                        <div className="mt-[6px] flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#F1F5F9] border border-[#E2E8F0] group-hover:bg-[#0A5191] group-hover:border-[#0A5191] transition-colors duration-300 flex-shrink-0">
                                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0A5191] group-hover:text-white transition-colors duration-300">
                                                <path d="M1 7L4.5 10.5L13 1.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="transition-colors duration-300 group-hover:text-[#0F172A] pt-0.5">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
