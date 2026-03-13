import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export const GlobalPresenceMap = () => {
    return (
        <section className="relative bg-[#EEF1FA] py-32 lg:py-44 px-6 lg:px-12 xl:px-16 overflow-hidden min-h-[700px] flex items-center">
            {/* Map image as background */}
            <div className="absolute inset-0 flex items-center justify-end opacity-90">
                <div className="relative w-[80%] h-full">
                    <Image
                        src="/map-banner-pc.png"
                        alt="Global Presence Map"
                        fill
                        className="object-contain object-right"
                    />
                </div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 max-w-[1200px] w-full" style={{ marginLeft: 'clamp(24px, 8vw, 120px)' }}>
                <FadeIn delay={100} direction="up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#121010] mb-16" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Global Presence
                    </h2>
                </FadeIn>

                <FadeIn delay={300} direction="up">
                    <div className="flex flex-wrap gap-16 mt-48 md:mt-72">
                        <div>
                            <h3 className="text-5xl lg:text-6xl font-bold text-[#121010] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>6</h3>
                            <p className="text-[#4A4A4A] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Continents</p>
                        </div>
                        <div>
                            <h3 className="text-5xl lg:text-6xl font-bold text-[#121010] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>110+</h3>
                            <p className="text-[#4A4A4A] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Countries and Regions</p>
                        </div>
                        <div>
                            <h3 className="text-5xl lg:text-6xl font-bold text-[#121010] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>500+</h3>
                            <p className="text-[#4A4A4A] text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Projects</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
