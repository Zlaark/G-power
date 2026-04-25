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
        <section className="relative w-full bg-white pt-[64px] sm:pt-[72px] md:pt-[92px] lg:pt-[112px] pb-[56px] sm:pb-[64px] md:pb-[84px] lg:pb-[104px] overflow-hidden">
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] xl:px-[160px]">
            <div className="max-w-[980px] mx-auto text-center mb-[36px] sm:mb-[42px] md:mb-[56px] lg:mb-[72px]">
                    <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                        Solutions
                    </span>
                    <h2
                        className="mt-6 font-bold text-[#0F172A]"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(26px, 3.2vw, 40px)',
                            lineHeight: '1.18',
                            letterSpacing: '-0.03em',
                        }}
                    >
                        What We Build
                    </h2>
                    <p
                        className="mt-4 text-[#475569] font-medium"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(14px, 1.2vw, 18px)',
                            lineHeight: '1.75',
                        }}
                    >
                        We design energy storage and power systems across residential, commercial, industrial, mobility, and grid-scale applications.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-[40px] sm:mb-[44px] md:mb-[56px] lg:mb-[44px]">
                    {solutions.map((item, index) => (
                        <div key={index} className="flex flex-col group relative rounded-[24px] sm:rounded-[28px] bg-white border border-[#E5EBF2] shadow-[0_10px_28px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0A5191]/0 to-[#0A5191]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0A5191] via-[#4CA5FF] to-[#0A5191] opacity-70" />

                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden max-h-[320px] lg:max-h-none">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-50" />
                            </div>

                            <div className="flex-1 flex flex-col p-6 sm:p-7 lg:p-8 relative z-20 -mt-5 sm:-mt-6">
                                <div className="w-10 sm:w-12 h-1 rounded-full bg-[#0A5191]/70 mb-4 sm:mb-5 group-hover:w-16 transition-all duration-500" />
                                <h3
                                    className="font-semibold text-[#0F172A] mb-3 group-hover:text-[#0A5191] transition-colors duration-300"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(16px, 1.35vw, 22px)',
                                        lineHeight: '1.3',
                                    }}
                                >
                                    {item.label}
                                </h3>
                                <p
                                    className="font-medium text-[#64748B] group-hover:text-[#475569] transition-colors duration-300"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 'clamp(12px, 0.95vw, 15px)',
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
