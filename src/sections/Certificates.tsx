import { FadeIn } from '@/components/FadeIn';
import { Award, FileCheck, Shield } from 'lucide-react';

export const Certificates = () => {
    const certificates = [
        {
            title: "ISO 9001:2015",
            issuer: "Quality Management System",
            icon: Award,
            desc: "Certified for maintaining international standards in manufacturing and service quality."
        },
        {
            title: "ARAI Certified",
            issuer: "Automotive Research Association of India",
            icon: FileCheck,
            desc: "Approved for high-performance EV battery packs for 2-wheeler and 3-wheeler applications."
        },
        {
            title: "CE & IEC Standards",
            issuer: "Global Safety Compliance",
            icon: Shield,
            desc: "Compliance with European and international safety and performance standards for BESS."
        }
    ];

    return (
        <section className="relative w-full bg-[#F8FAFC] py-16 sm:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <FadeIn delay={100} direction="up">
                    <div className="text-center max-w-[700px] mx-auto mb-16">
                        <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em] mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                            Quality Assurance
                        </span>
                        <h2 className="text-[#121010] font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}>
                            Certified for Excellence
                        </h2>
                        <p className="text-[#64748B] font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>
                            We adhere to the highest industry standards to ensure safety, reliability, and performance.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {certificates.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <FadeIn key={index} delay={200 + index * 100} direction="up">
                                <div className="bg-white p-8 rounded-[32px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(10,81,145,0.04)] hover:shadow-[0_20px_50px_rgba(10,81,145,0.1)] transition-all duration-500 hover:-translate-y-2 group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0A5191]/5 flex items-center justify-center mb-8 group-hover:bg-[#0A5191] transition-colors duration-500">
                                        <Icon className="w-8 h-8 text-[#0A5191] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-[#121010] font-bold text-xl mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {cert.title}
                                    </h3>
                                    <p className="text-[#0A5191] font-bold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {cert.issuer}
                                    </p>
                                    <p className="text-[#64748B] text-[15px] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {cert.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
