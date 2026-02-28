import Image from 'next/image';

const solutions = [
    {
        image: '/about-renewable.png',
        alt: 'Solar panels with power lines and wind turbines',
        label: 'Renewable energy integration',
    },
    {
        image: '/about-solar-field.png',
        alt: 'Solar panel installation in a field',
        label: 'Peak load shaving & demand response',
    },
    {
        image: '/about-solar-field.png',
        alt: 'Solar panel array providing backup power',
        label: 'Reliable backup and power continuity',
    },
    {
        image: '/about-solar-field.png',
        alt: 'Solar energy for grid balancing',
        label: 'Grid balancing & frequency regulation',
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
            <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[60px] lg:px-[240px]">

                {/* Top Text */}
                <p
                    className="text-center font-medium text-black mb-[44px] md:mb-[56px] lg:mb-[52px]"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(11px, 1.1vw, 18px)',
                        lineHeight: '1.55',
                    }}
                >
                    At Joulecube Energy, we design and execute utility-scale and C&amp;I
                    Battery Energy Storage Solutions that enable:
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] md:gap-x-[50px] lg:gap-x-[60px] gap-y-[48px] md:gap-y-[56px] lg:gap-y-[44px] mb-[44px] md:mb-[56px] lg:mb-[44px]">
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
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: 'clamp(13px, 1.3vw, 22px)',
                                    lineHeight: '1.3',
                                    marginTop: '10px',
                                }}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <p
                    className="text-center font-medium text-black mb-[48px] md:mb-[56px] lg:mb-[48px]"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(11px, 1.1vw, 18px)',
                        lineHeight: '1.55',
                    }}
                >
                    Our EPC-driven approach ensures projects are engineered for
                    performance, compliance, and long-term operational excellence.
                </p>

                {/* Explore Impact Button */}
                <div className="flex justify-center mt-6">
                    <button
                        className="btn-sweep flex items-center justify-center w-[273px] h-[57px] border-2 border-black rounded-[5px] text-black font-semibold shadow-sm cursor-pointer"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '15px',
                            lineHeight: '22px',
                        }}
                    >
                        Explore Impact
                    </button>
                </div>
            </div>
        </section>
    );
};
