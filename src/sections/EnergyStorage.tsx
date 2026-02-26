import Image from 'next/image';

export const EnergyStorage = () => {
    return (
        <section className="relative w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

                {/* Title */}
                <h2
                    className="text-center font-semibold text-black mb-6"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(24px, 3vw, 40px)',
                        lineHeight: '1.22',
                    }}
                >
                    Delivering Reliable Energy Storage Infrastructure for India
                </h2>

                {/* Description */}
                <p
                    className="text-center font-medium text-black max-w-[1570px] mx-auto mb-10 md:mb-14"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(18px, 2.5vw, 40px)',
                        lineHeight: '1.22',
                    }}
                >
                    Joulecube Energy is a specialized EPC solutions and long-term service
                    provider for Battery Energy Storage Systems (BESS), supporting
                    India&apos;s transition to a resilient, flexible, and low-carbon power
                    ecosystem.
                </p>

                {/* Image */}
                <div className="relative w-full max-w-[1540px] mx-auto px-6 md:px-12 lg:px-20 mb-10 md:mb-14">
                    <div className="relative w-full rounded-[23px] overflow-hidden aspect-[1540/637]">
                        <Image
                            src="/wind-solar-energy.jpg"
                            alt="Wind turbines and solar panels in a renewable energy field at sunset"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1540px"
                            priority
                        />
                    </div>
                </div>

                {/* Bottom Text */}
                <p
                    className="text-center font-medium text-black max-w-[1596px] mx-auto"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(16px, 2vw, 32px)',
                        lineHeight: '1.22',
                    }}
                >
                    We deliver end-to-end battery energy storage projects—from engineering
                    and procurement to construction, commissioning, and life cycle
                    services—helping utilities, commercial, and industrial consumers
                    achieve grid stability, peak demand management, and energy security.
                </p>
            </div>
        </section>
    );
};
