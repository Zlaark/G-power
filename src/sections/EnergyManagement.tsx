import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyManagement = () => {
    return (
        <section className="relative w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-[#0F172A] mb-6 md:mb-7 lg:mb-8"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(18px, 2vw, 30px)',
                            lineHeight: '1.2',
                        }}
                    >
                        End-to-End Energy Storage Solutions
                    </h2>
                </FadeIn>

                <FadeIn delay={200} direction="up" className="relative w-full mb-4 sm:mb-5 md:mb-6">
                    <div className="relative w-full aspect-[1562/636] max-h-[360px] sm:max-h-[420px] md:max-h-[500px] rounded-[18px] sm:rounded-[20px] overflow-hidden group border border-[#E5EBF2] shadow-[0_10px_24px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                        <Image
                            src="/about-ems.png"
                            alt="Modern home with rooftop solar panel system and energy management"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 100vw, 1562px"
                            priority
                        />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-stretch">
                    <FadeIn delay={280} direction="right">
                        <div className="h-full rounded-[18px] sm:rounded-[20px] border border-[#E5EBF2] bg-white p-6 sm:p-7 md:p-8 shadow-[0_8px_18px_rgba(15,23,42,0.05)] flex items-center section-soft-hover">
                            <h3
                                className="font-semibold text-[#0F172A]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(18px, 1.8vw, 30px)',
                                    lineHeight: '1.2',
                                }}
                            >
                                From design to deployment, G-Power provides complete energy storage solutions.
                            </h3>
                        </div>
                    </FadeIn>

                    <FadeIn delay={340} direction="left">
                        <div className="h-full rounded-[18px] sm:rounded-[20px] border border-[#E5EBF2] bg-[#FCFDFE] p-6 sm:p-7 md:p-8 shadow-[0_8px_18px_rgba(15,23,42,0.05)] section-soft-hover">
                            <div
                                className="font-medium text-[#0F172A]"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(13px, 1vw, 16px)',
                                    lineHeight: '1.45',
                                }}
                            >
                                <p className="mb-2">Our services include:</p>
                                <ul className="list-disc pl-5 space-y-1.5">
                                    <li className="paragraph-hover-float cursor-default">System design and customization</li>
                                    <li className="paragraph-hover-float cursor-default">Project planning and execution</li>
                                    <li className="paragraph-hover-float cursor-default">System integration and installation</li>
                                    <li className="paragraph-hover-float cursor-default">Remote monitoring and maintenance</li>
                                    <li className="paragraph-hover-float cursor-default">Compliance with national grid codes and certification standards</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
