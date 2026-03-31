import { FadeIn } from '@/components/FadeIn';

export const WhyGPower = () => {
    return (
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">
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
                        Why G-Power
                    </h2>
                </FadeIn>

                {/* Two-Column: Left Heading + Right Description */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-5 md:mb-6">
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
                            Energy storage projects require precision, reliability, and expertise.
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
                            <p className="mb-2">G-Power delivers all three.</p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>End-to-end project execution</li>
                                <li>Proven system integration capabilities</li>
                                <li>Strict vendor qualification and quality standards</li>
                                <li>24/7 monitoring and technical support</li>
                                <li>Trusted partner for scalable energy storage development</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
