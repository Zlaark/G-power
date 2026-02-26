import Image from 'next/image';

export const CustomBatteryPacks = () => {
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
                    Customized Battery Packs
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
                            Engineered to Your Application
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
                            We design and deliver customized battery packs tailored to
                            specific power, energy, and integration requirements. From cell
                            selection and thermal management to enclosure design and safety
                            systems, our solutions are optimized for performance, compliance,
                            and long-term operational reliability across diverse use cases.
                        </p>
                    </div>
                </div>

                {/* Custom Battery Image */}
                <div className="relative w-full aspect-[1562/500] rounded-[20px] overflow-hidden">
                    <Image
                        src="/about-custom-battery.png"
                        alt="Customized battery pack container with solar panels and orange battery modules"
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
