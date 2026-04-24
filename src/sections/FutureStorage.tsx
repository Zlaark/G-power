import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const FutureStorage = () => {
    return (
        <section className="relative w-full bg-[#050505] overflow-hidden pb-8 md:pb-10 lg:pb-0">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A5191]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none opacity-50" />

            {/* Text Content - sits on top of image */}
            <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-12 md:pb-20 flex flex-col md:flex-row gap-6 md:gap-10">
                
                {/* Mission Card */}
                <FadeIn delay={100} direction="up" className="flex-1">
                    <div className="h-full p-8 md:p-12 rounded-[24px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A5191]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <h2
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(22px, 2.5vw, 32px)',
                                lineHeight: '1.2',
                            }}
                        >
                            Our Mission
                        </h2>
                        <p
                            className="font-medium text-white/80"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.2vw, 18px)',
                                lineHeight: '1.7',
                            }}
                        >
                            <span className="text-white block mb-4 text-[110%]">Accelerate the transition toward smarter and more sustainable energy systems.</span>
                            By combining advanced battery technology with intelligent system integration, we enable industries, businesses, and communities to access reliable and efficient energy solutions.
                        </p>
                    </div>
                </FadeIn>

                {/* Vision Card */}
                <FadeIn delay={300} direction="up" className="flex-1">
                    <div className="h-full p-8 md:p-12 rounded-[24px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A5191]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <h2
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(22px, 2.5vw, 32px)',
                                lineHeight: '1.2',
                            }}
                        >
                            Our Vision
                        </h2>
                        <p
                            className="font-medium text-white/80"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.2vw, 18px)',
                                lineHeight: '1.7',
                            }}
                        >
                            <span className="text-white block mb-4 text-[110%]">To develop cutting-edge technology that delivers sustainable energy solutions for a better future.</span>
                            We envision a world where energy efficiency and environmental responsibility work together to power tomorrow.
                        </p>
                    </div>
                </FadeIn>
            </div>

            {/* Solar Panel Image */}
            <FadeIn delay={400} direction="up" className="relative w-full aspect-[1933/600] group">
                {/* Top fade from dark background into image */}
                <div className="absolute top-0 left-0 right-0 h-[20%] z-[1] bg-gradient-to-b from-[#050505] to-transparent" />
                
                <Image
                    src="/solar-panel-future.jpg"
                    alt="Large scale solar panel installation under a blue sky with clouds"
                    fill
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.02]"
                    sizes="100vw"
                    priority
                />

                {/* Bottom dark gradient fade-out to blend seamlessly into next section */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[40%] z-[1]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(5, 5, 5, 0) 0%, #050505 100%)',
                    }}
                />
            </FadeIn>
        </section>
    );
};
