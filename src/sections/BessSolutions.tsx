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
        <section className="relative w-full bg-white pt-[60px] md:pt-[70px] lg:pt-[70px] pb-[40px] md:pb-[60px] lg:pb-[60px] overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                .elegant-card {
                    transition: none;
                }
                .elegant-card:hover {
                    transform: none;
                    box-shadow: none;
                }
                .elegant-card .card-img {
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .elegant-card:hover .card-img {
                    transform: scale(1.05);
                }
                .elegant-line {
                    position: relative;
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    overflow: hidden;
                    margin-top: 8px;
                    margin-bottom: 4px;
                }
                .elegant-line::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #EF3C38, transparent);
                    transform: translateX(-100%);
                    transition: transform 0.6s ease;
                }
                .elegant-card:hover .elegant-line::after {
                    transform: translateX(100%);
                }
                .btn-sweep {
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    transition: color 0.4s ease;
                }
                .btn-sweep::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background-color: #000;
                    z-index: -1;
                    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .btn-sweep:hover::before {
                    width: 100%;
                }
                .btn-sweep:hover {
                    color: #fff;
                    border-color: #000;
                }
            `}} />
            <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[60px] lg:px-[120px] xl:px-[240px]">

                {/* Title */}
                <h2
                    className="text-center font-bold text-black mb-[44px] md:mb-[56px] lg:mb-[52px]"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 'clamp(18px, 2vw, 28px)',
                        lineHeight: '1.2',
                    }}
                >
                    What We Build
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] md:gap-x-[50px] lg:gap-x-[60px] gap-y-[48px] md:gap-y-[56px] lg:gap-y-[44px] mb-[44px] md:mb-[56px] lg:mb-[44px]">
                    {solutions.map((item, index) => (
                        <div key={index} className="flex flex-col items-start elegant-card rounded-[20px] cursor-pointer">
                            {/* Image */}
                            <div className="relative w-full aspect-square lg:aspect-square lg:h-auto rounded-[20px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover card-img"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Divider Line */}
                            <div className="elegant-line" style={{ height: '1px' }} />

                            {/* Label */}
                            <p
                                className="font-semibold text-black transition-colors duration-300"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(15px, 1.3vw, 22px)',
                                    lineHeight: '1.3',
                                    marginTop: '10px',
                                }}
                            >
                                {item.label}
                            </p>
                            {/* Description */}
                            <p
                                className="font-medium text-black mt-2"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 'clamp(13px, 1vw, 15px)',
                                    lineHeight: '1.5',
                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
