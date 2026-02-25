export const SolarHome = () => {
    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-[1920px]">
                <div className="w-full relative overflow-hidden">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes cinematicBreathing {
                            0%, 100% { transform: scale(1) translateY(0); filter: brightness(1); }
                            50% { transform: scale(1.05) translateY(-1%); filter: brightness(1.05); }
                        }
                        .animate-cinematic-breathing {
                            animation: cinematicBreathing 24s ease-in-out infinite;
                        }
                    `}} />
                    <img
                        src="/home8.png"
                        alt="Modern Home with Solar Panels and Electric Vehicle"
                        className="w-full h-auto object-cover animate-cinematic-breathing"
                    />

                    {/* Optional subtle gradient overlay for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
