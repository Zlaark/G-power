import Image from 'next/image';

export const FutureStorage = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Text Content - sits on top of image */}
            <div className="relative z-10 max-w-[1391px] mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-6 md:pb-8 flex flex-col items-center gap-[12px]">
                {/* Title */}
                <h2
                    className="w-full text-center font-semibold text-black"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(24px, 2.5vw, 36px)',
                        lineHeight: '1.2',
                    }}
                >
                    The Future Is Storage-Led
                </h2>

                {/* Subtitle */}
                <p
                    className="w-full text-center font-medium text-black max-w-[1200px]"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(16px, 1.8vw, 24px)',
                        lineHeight: '1.4',
                    }}
                >
                    As renewable penetration increases, energy storage is becoming
                    the backbone of India&apos;s power infrastructure.
                </p>
            </div>

            {/* Solar Panel Image */}
            <div className="relative w-full aspect-[1933/600] mt-[-10px] md:mt-[-20px]">
                <Image
                    src="/solar-panel-future.jpg"
                    alt="Large scale solar panel installation under a blue sky with clouds"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />

                {/* Bottom white gradient fade-out */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[35%] z-[1]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
                    }}
                />
            </div>
        </section>
    );
};
