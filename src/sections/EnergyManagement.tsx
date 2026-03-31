import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyManagement = () => {
    return (
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">

                {/* Centered Top Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="text-center font-bold text-black mb-8 md:mb-10 lg:mb-10"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(17px, 2vw, 26px)',
                            lineHeight: '1.2',
                        }}
                    >
                        End-to-End Energy Storage Solutions
                    </h2>
                </FadeIn>

                {/* Two-Column: Left Heading + Right Description */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10">
                    {/* Left Heading */}
                    <FadeIn delay={200} direction="right" className="md:w-[35%] flex-shrink-0 md:pl-8 lg:pl-12">
                        <h3
                            className="font-semibold text-black"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(17px, 2vw, 26px)',
                                lineHeight: '1.2',
                            }}
                        >
                            From design to deployment, G-Power provides complete energy storage solutions.
                        </h3>
                    </FadeIn>

                    {/* Right Description */}
                    <FadeIn delay={300} direction="left" className="md:w-[65%] max-w-[976px]">
                        <div
                            className="font-medium text-black"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(13px, 1.1vw, 15px)',
                                lineHeight: '1.4',
                            }}
                        >
                            <p className="mb-2">Our services include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>System design and customization</li>
                                <li>Project planning and execution</li>
                                <li>System integration and installation</li>
                                <li>Remote monitoring and maintenance</li>
                                <li>Compliance with national grid codes and certification standards</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>

                {/* EMS Image */}
                <FadeIn delay={400} direction="up" className="relative w-full mt-8 md:mt-10 lg:mt-10 aspect-[1562/636] rounded-[20px] overflow-hidden group shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <Image
                        src="/about-ems.png"
                        alt="Modern home with rooftop solar panel system and energy management"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 1562px"
                        priority
                    />
                </FadeIn>
            </div>
        </section>
    );
};
