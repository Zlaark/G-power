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
        <section className="relative w-full bg-white py-6 md:py-8 lg:py-10 overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                .elegant-card {
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .elegant-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
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
                    height: 4px;
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
            <div className="max-w-[1391px] mx-auto px-6 md:px-10 lg:px-16">

                {/* Top Text */}
                <p
                    className="text-center font-medium text-black mb-8 md:mb-12"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(16px, 1.8vw, 28px)',
                        lineHeight: '34px',
                    }}
                >
                    At Joulecube Energy, we design and execute utility-scale and C&amp;I
                    Battery Energy Storage Solutions that enable:
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-14 mb-10 md:mb-14">
                    {solutions.map((item, index) => (
                        <div key={index} className="flex flex-col items-start elegant-card rounded-[20px] cursor-pointer">
                            {/* Image */}
                            <div className="relative w-full aspect-[605/410] rounded-[20px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover card-img"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Divider Line */}
                            <div className="elegant-line" style={{ height: index === 0 || index === 2 ? '9px' : '5px' }} />

                            {/* Label */}
                            <p
                                className="font-medium text-black transition-colors duration-300"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: 'clamp(18px, 2.2vw, 40px)',
                                    lineHeight: '49px',
                                }}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <p
                    className="text-center font-medium text-black mb-6 md:mb-8"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(16px, 1.8vw, 28px)',
                        lineHeight: '34px',
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
                            fontSize: '18px',
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
