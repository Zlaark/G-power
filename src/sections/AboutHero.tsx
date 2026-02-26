export const AboutHero = () => {
    return (
        <section className="relative w-full h-[881px] overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes blurReveal {
                    0% { opacity: 0; filter: blur(20px); transform: translateY(30px) scale(1.05); }
                    100% { opacity: 1; filter: blur(0px); transform: translateY(0) scale(1); }
                }
                @keyframes subtlePan {
                    0% { transform: scale(1) translate(0, 0); }
                    50% { transform: scale(1.08) translate(-1%, -1%); }
                    100% { transform: scale(1) translate(0, 0); }
                }
                @keyframes continuousShine {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                .bg-pan-animate {
                    animation: subtlePan 35s ease-in-out infinite;
                }
                .elegant-title {
                    background: linear-gradient(120deg, #ffffff 40%, rgba(255,255,255,0.4) 50%, #ffffff 60%);
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    opacity: 0;
                    animation: blurReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, 
                               continuousShine 8s linear infinite 1.5s,
                               gentleFloat 6s ease-in-out infinite;
                }
                .elegant-subtitle {
                    opacity: 0;
                    animation: blurReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards,
                               gentleFloat 6s ease-in-out infinite 0.6s;
                }
            `}} />

            {/* Background Image Container with Overflow Hidden for Zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-pan-animate"
                    style={{ backgroundImage: "url('/solar-hero-bg.png')" }}
                />
            </div>

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
            <div className="absolute inset-x-0 z-[3] flex flex-col items-center" style={{ top: '250px' }}>
                <h1
                    className="font-semibold text-center elegant-title mb-[20px]"
                    style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: 'clamp(60px, 8vw, 96px)', lineHeight: '1.2' }}
                >
                    About us
                </h1>
                <p
                    className="text-white font-medium text-center elegant-subtitle"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(18px, 3vw, 28px)', lineHeight: '1.4' }}
                >
                    Powering India&apos;s Clean Energy Transition
                </p>
            </div>
        </section>
    );
};
