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
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-10 md:px-16 lg:px-24">

                {/* Top Text */}
                <p
                    className="text-center font-medium text-black mb-6 md:mb-8"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(18px, 2vw, 28px)',
                        lineHeight: '34px',
                    }}
                >
                    At Joulecube Energy, we design and execute utility-scale and C&amp;I
                    Battery Energy Storage Solutions that enable:
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-6 lg:gap-y-8 mb-6 md:mb-8">
                    {solutions.map((item, index) => (
                        <div key={index} className="flex flex-col items-start">
                            {/* Image */}
                            <div className="relative w-full aspect-[605/320] rounded-[16px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Divider Line */}
                            <div
                                className="w-full mt-2 mb-1"
                                style={{ borderTop: '4px solid #000000' }}
                            />

                            {/* Label */}
                            <p
                                className="font-medium text-black"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: 'clamp(16px, 1.8vw, 26px)',
                                    lineHeight: '32px',
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
                        fontSize: 'clamp(18px, 2vw, 28px)',
                        lineHeight: '34px',
                    }}
                >
                    Our EPC-driven approach ensures projects are engineered for
                    performance, compliance, and long-term operational excellence.
                </p>

                {/* Explore Impact Button */}
                <div className="flex justify-center">
                    <button
                        className="flex items-center justify-center w-[273px] h-[57px] border-2 border-black rounded-[5px] text-black font-semibold transition-all hover:bg-black hover:text-white"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '18px',
                            lineHeight: '22px',
                            backgroundColor: 'rgba(0, 0, 0, 0.004)',
                        }}
                    >
                        Explore Impact
                    </button>
                </div>
            </div>
        </section>
    );
};
