import Image from 'next/image';

const solutions = [
    {
        image: '/about-renewable.png',
        alt: 'Smart residential energy storage',
        label: 'PowerPod',
        description: 'Smart residential energy storage systems designed to provide reliable home power. PowerPod integrates advanced lithium batteries with intelligent inverters to optimize energy usage and ensure uninterrupted power supply.'
    },
    {
        image: '/about-solar-field.png',
        alt: 'Commercial Energy Systems',
        label: 'Commercial Energy Systems',
        description: 'Energy storage solutions designed for offices, institutions, and commercial establishments. Our systems help businesses maintain operational continuity while improving energy efficiency.'
    },
    {
        image: '/about-solar-field.png',
        alt: 'Industrial Energy Systems',
        label: 'Industrial Energy Systems',
        description: 'High-capacity battery and inverter solutions designed for demanding industrial environments, ensuring operational reliability and energy stability for large-scale facilities.'
    },
    {
        image: '/about-solar-field.png',
        alt: 'EV Battery Packs',
        label: 'EV Battery Packs',
        description: 'Advanced lithium battery solutions designed for a wide range of mobility applications. From electric two-wheelers and three-wheelers to commercial vehicles, trucks, and marine vessels, our battery systems are engineered for high performance, safety, and long lifecycle.'
    },
    {
        image: '/about-solar-field.png',
        alt: 'Battery Energy Storage Systems (BESS)',
        label: 'Battery Energy Storage Systems (BESS)',
        description: 'Grid-scale battery energy storage solutions that support renewable energy integration, improve grid stability, and enable reliable power infrastructure for large-scale applications.'
    },
];

export const BessSolutions = () => {
    return (
        <section className="relative w-full bg-[#050505] pt-[60px] md:pt-[70px] lg:pt-[70px] pb-[40px] md:pb-[60px] lg:pb-[60px] overflow-hidden">
            {/* Background texture/glow */}
            <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#050505] via-[#0A5191]/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[20px] md:px-[60px] lg:px-[120px] xl:px-[240px]">
                {/* Title */}
                <h2
                    className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#80c0ff] mb-[44px] md:mb-[56px] lg:mb-[64px]"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 'clamp(24px, 3vw, 36px)',
                        lineHeight: '1.2',
                    }}
                >
                    What We Build
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-[44px] md:mb-[56px] lg:mb-[44px]">
                    {solutions.map((item, index) => (
                        <div key={index} className="flex flex-col group relative rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_rgba(10,81,145,0.15)] cursor-pointer">
                            
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A5191]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Glow Border Effect */}
                            <div className="absolute inset-0 border border-[#0A5191]/0 rounded-[24px] group-hover:border-[#0A5191]/50 transition-colors duration-500 pointer-events-none z-10" />

                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Bottom gradient on image to blend with card */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col p-6 lg:p-8 relative z-20 -mt-8">
                                {/* Divider Line (Glowy) */}
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5 group-hover:via-[#0A5191]/80 transition-all duration-500" />

                                {/* Label */}
                                <h3
                                    className="font-semibold text-white mb-3 group-hover:text-[#4ca5ff] transition-colors duration-300"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(17px, 1.4vw, 22px)',
                                        lineHeight: '1.3',
                                    }}
                                >
                                    {item.label}
                                </h3>
                                {/* Description */}
                                <p
                                    className="font-medium text-white/60 group-hover:text-white/80 transition-colors duration-300"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(13px, 1vw, 15px)',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
