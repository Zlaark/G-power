import Image from 'next/image';

export const HithiumHiner = () => {
    return (
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">

                {/* Centered Top Title */}
                <h2
                    className="text-center font-semibold text-black mb-6 md:mb-8"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(20px, 2.5vw, 32px)',
                        lineHeight: '1.2',
                    }}
                >
                    Hithium Hiner – 125 kW / 261 kWh
                </h2>

                {/* Two-Column: Left Heading + Right Description */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10">
                    {/* Left Heading */}
                    <div className="md:w-[35%] flex-shrink-0">
                        <h3
                            className="font-semibold text-black"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(20px, 2.5vw, 32px)',
                                lineHeight: '1.2',
                            }}
                        >
                            Standardized, Grid-Ready Energy Storage
                        </h3>
                    </div>

                    {/* Right Description */}
                    <div className="md:w-[65%] max-w-[976px]">
                        <p
                            className="font-medium text-black"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(14px, 1.6vw, 22px)',
                                lineHeight: '1.4',
                            }}
                        >
                            Joulecube Energy offers the Hithium Hiner 125 kW / 261 kWh
                            Battery Energy Storage System, engineered for high performance,
                            safety, and reliability. Designed for commercial and industrial
                            applications, the system enables peak load management, backup
                            power, and renewable integration with a compact, scalable
                            architecture.
                        </p>
                    </div>
                </div>

                {/* BESS Facility Image */}
                <div className="relative w-full aspect-[1562/500] rounded-[20px] overflow-hidden">
                    <Image
                        src="/about-bess-facility.jpg"
                        alt="Aerial view of battery energy storage system facility with solar panels"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1562px"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
