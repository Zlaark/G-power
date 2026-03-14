import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const MapMarker = ({ left, top, region, countries, position = 'top' }: { left: string, top: string, region: string, countries: string[], position?: 'top' | 'bottom' | 'left' | 'right' }) => {
    let tooltipClasses = "absolute w-64 md:w-[340px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30 pointer-events-none";
    
    if (position === 'top') {
        tooltipClasses += " bottom-full left-1/2 -translate-x-1/2 mb-4";
    } else if (position === 'bottom') {
        tooltipClasses += " top-full left-1/2 -translate-x-1/2 mt-4";
    } else if (position === 'left') {
        tooltipClasses += " right-full top-1/2 -translate-y-1/2 mr-4";
    } else if (position === 'right') {
        tooltipClasses += " left-full top-1/2 -translate-y-1/2 ml-4";
    }

    return (
        <div className="absolute z-20 group cursor-pointer" style={{ left, top }}>
            <span className="block w-3 h-3 bg-[#3B82F6] rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.3)] relative z-10 transition-transform group-hover:scale-125 duration-300" />
            <span className="absolute inset-0 w-3 h-3 bg-[#3B82F6] rounded-full animate-ping opacity-50" />
            
            <div className={tooltipClasses}>
                <h4 className="text-[#121010] text-lg font-medium mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>{region}</h4>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                    {countries.map(c => (
                        <span key={c} className="text-[13px] text-[#4A4A4A] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif" }}>{c}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const GlobalPresenceMap = () => {
    return (
        <section className="relative bg-[#EEF1FA] py-24 lg:py-32 px-6 lg:px-12 xl:px-16 overflow-hidden min-h-[700px] flex items-start">
            {/* Map image as background */}
            <div className="absolute inset-y-0 right-0 flex items-center justify-end opacity-90 pointer-events-none w-[58%]">
                <div className="relative w-full h-full">
                    <Image
                        src="/map-banner-pc.png"
                        alt="Global Presence Map"
                        fill
                        className="object-contain object-right"
                    />
                </div>
            </div>

            {/* Blue location dots */}
            {/* Americas */}
            <MapMarker 
                left="44%" 
                top="55%" 
                region="Americas" 
                countries={['United States', 'Panama', 'Chile', 'Brazil', 'Uruguay', 'Canada']} 
                position="top"
            />
            {/* Europe */}
            <MapMarker 
                left="67%" 
                top="33%" 
                region="Europe" 
                countries={['Spain', 'France', 'Switzerland', 'Germany', 'Austria', 'Italy', 'Hungary', 'Netherlands', 'Poland', 'Belgium', 'U.K.']} 
                position="top"
            />
            {/* Asia Pacific */}
            <MapMarker 
                left="85%" 
                top="55%" 
                region="Asia Pacific" 
                countries={['China', 'Korea', 'Japan', 'Australia']} 
                position="top"
            />
            {/* Middle East & Africa */}
            <MapMarker 
                left="68%" 
                top="72%" 
                region="Middle East & Africa" 
                countries={['Saudi Arabia', 'Senegal', 'Qatar', 'South Africa', 'D.R.C']} 
                position="top"
            />

            {/* Content overlay */}
            <div className="relative z-10 max-w-[640px] w-full" style={{ marginLeft: 'clamp(8px, 3vw, 48px)' }}>
                <FadeIn delay={100} direction="up">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#121010] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Global Presence
                    </h2>
                </FadeIn>

                <FadeIn delay={300} direction="up">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-semibold text-[#121010] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>6</h3>
                            <p className="text-[#4A4A4A] text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>Continents</p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-semibold text-[#121010] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>110+</h3>
                            <p className="text-[#4A4A4A] text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>Countries and Regions</p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-semibold text-[#121010] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>500+</h3>
                            <p className="text-[#4A4A4A] text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>Projects</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
