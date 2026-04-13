'use client';

import { Zap, ShieldCheck, Clock } from 'lucide-react';

export const ServiceHighlight = () => {
    return (
        <div className="relative bg-[#0A5191] overflow-hidden py-[18px] border-t border-b border-[#0A5191]/20 flex items-center shadow-[0_0_40px_rgba(10, 81, 145,0.25)] z-20 w-full transform-gpu">
            {/* The scrolling container */}
            <div className="flex animate-marquee hover:animation-pause min-w-[200%] items-center select-none cursor-default">
                {/* We repeat the phrase 6 times to ensure continuous seamless scrolling across wide monitors */}
                {[...Array(8)].map((_, idx) => (
                    <div key={idx} className="flex items-center whitespace-nowrap px-8">
                        <span className="flex items-center text-[#121010] font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 20px)" }}>
                            <Clock className="w-5 h-5 mr-2 text-[#121010]" strokeWidth={2.5} />
                            24/7 Service
                        </span>
                        
                        <span className="text-[#121010]/50 font-bold mx-4" style={{ fontSize: "clamp(15px, 1.5vw, 20px)" }}>–</span>
                        
                        <span className="text-white font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 20px)" }}>
                            Instant Help<span className="text-[#121010] font-bold ml-1">,</span>
                        </span>
                        
                        <span className="text-white font-medium italic mx-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 20px)" }}>
                            Always On<span className="text-[#121010] font-bold not-italic ml-1">,</span>
                        </span>
                        
                        <span className="flex items-center text-white font-semibold mx-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 20px)" }}>
                            <ShieldCheck className="w-5 h-5 mr-2" />
                            Expert Care<span className="text-[#121010] font-bold ml-1">,</span>
                        </span>

                        <span className="flex items-center text-white font-black uppercase tracking-widest mx-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 20px)" }}>
                            <Zap className="w-6 h-6 mr-2 text-white animate-pulse" fill="currentColor" />
                            Energy Secure.
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
