import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const FutureStorage = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden pb-8 md:pb-10 lg:pb-0">
            {/* Text Content - sits on top of image */}
            <div className="relative z-10 max-w-[1391px] mx-auto px-6 md:px-10 pt-2 md:pt-3 pb-6 md:pb-8 flex flex-col items-center gap-[12px]">
                {/* Title */}
                <FadeIn delay={100} direction="up">
                    <h2
                        className="w-full text-center font-bold text-black"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(18px, 2vw, 28px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Our Mission
                    </h2>
                </FadeIn>

                {/* Mission Text */}
                <FadeIn delay={200} direction="up">
                    <p
                        className="w-full text-center font-medium text-black max-w-[1391px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(11px, 1.1vw, 18px)',
                            lineHeight: '34px',
                        }}
                    >
                        Accelerate the transition toward smarter and more sustainable energy systems.
                        <br />
                        By combining advanced battery technology with intelligent system integration, we enable industries, businesses, and communities to access reliable and efficient energy solutions.
                    </p>
                </FadeIn>

                {/* Vision Title */}
                <FadeIn delay={300} direction="up" className="mt-6 md:mt-8">
                    <h2
                        className="w-full text-center font-bold text-black"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(18px, 2vw, 28px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Our Vision
                    </h2>
                </FadeIn>

                {/* Vision Text */}
                <FadeIn delay={400} direction="up">
                    <p
                        className="w-full text-center font-medium text-black max-w-[1391px]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(11px, 1.1vw, 18px)',
                            lineHeight: '34px',
                        }}
                    >
                        To develop cutting-edge technology that delivers sustainable energy solutions for a better future.
                        <br />
                        We envision a world where energy efficiency and environmental responsibility work together to power tomorrow.
                    </p>
                </FadeIn>
            </div>

            {/* Solar Panel Image */}
            <FadeIn delay={400} direction="up" className="relative w-full aspect-[1933/600] mt-[10px] md:mt-[16px] group">
                <Image
                    src="/solar-panel-future.jpg"
                    alt="Large scale solar panel installation under a blue sky with clouds"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="100vw"
                    priority
                />

                {/* Bottom white gradient fade-out */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[35%] z-[1]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
                    }}
                />
            </FadeIn>
        </section>
    );
};
