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



                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-stretch">
                    <FadeIn delay={280} direction="right">
                        <div className="h-full rounded-[18px] sm:rounded-[20px] border border-[#E5EBF2] bg-white p-6 sm:p-7 md:p-8 shadow-[0_8px_18px_rgba(15,23,42,0.05)] flex items-center section-soft-hover">
                            <h3
                                className="font-semibold text-[#0F172A] text-center w-full"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(20px, 2.2vw, 32px)',
                                    lineHeight: '1.3',
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
