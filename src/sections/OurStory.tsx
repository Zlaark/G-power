import { FadeIn } from '@/components/FadeIn';

export const OurStory = () => {
    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <FadeIn delay={100} direction="right">
                        <div className="relative">
                            <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em] mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                Our Story
                            </span>
                            <h2
                                className="font-bold text-[#121010] mb-8"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(32px, 4vw, 52px)',
                                    lineHeight: '1.1',
                                }}
                            >
                                Empowering a <span className="text-[#0A5191]">Sustainable Future</span> Through Innovation
                            </h2>
                            <div className="space-y-6">
                                <p
                                    className="text-[#475569] font-medium leading-relaxed"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: '16px',
                                    }}
                                >
                                    G-Power was founded with a singular vision: to accelerate the global transition to renewable energy by delivering high-performance, reliable energy storage solutions. We recognized early on that the key to a sustainable future lies not just in generating clean energy, but in storing and managing it effectively.
                                </p>
                                <p
                                    className="text-[#475569] font-medium leading-relaxed"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: '16px',
                                    }}
                                >
                                    What started as a dedicated design team focused on EV battery packs has evolved into a comprehensive energy solutions provider. Today, we stand at the forefront of the industry, combining state-of-the-art manufacturing with advanced engineering to power homes, businesses, and cities worldwide.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} direction="left">
                        <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(10,81,145,0.12)] border border-[#E5EBF2]">
                            <img 
                                src="/Full Load 5.0 (About Us Page).webp" 
                                alt="Our Story" 
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A5191]/20 to-transparent" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
