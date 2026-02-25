export const AboutHero = () => {
    return (
        <section className="relative w-full h-[881px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/solar-hero-bg.png')" }}
            />

            {/* Dark gradient overlay */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'linear-gradient(180deg, rgba(1, 5, 10, 0) 20%, #01050A 100%)',
                    opacity: 0.7
                }}
            />

            {/* Top dark gradient for navbar readability */}
            <div
                className="absolute top-0 left-0 right-0 h-[300px] z-[2]"
                style={{
                    background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.79
                }}
            />

            {/* Centered Content */}
            <div className="absolute inset-x-0 z-[3] flex flex-col items-center" style={{ top: '150px' }}>
                <h1
                    className="text-white font-semibold text-center"
                    style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: '96px', lineHeight: '119px' }}
                >
                    About us
                </h1>
                <p
                    className="text-white font-medium text-center"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px', lineHeight: '34px' }}
                >
                    Powering India&apos;s Clean Energy Transition
                </p>
            </div>
        </section>
    );
};
