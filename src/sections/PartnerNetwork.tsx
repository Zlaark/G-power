import { FadeIn } from "@/components/FadeIn";

export function PartnerNetwork() {
  const row1Partners = Array.from({ length: 8 }).map((_, i) => ({
    id: `r1-${i + 1}`,
    name: `Partner Logo ${i + 1}`,
  }));
  
  const row2Partners = Array.from({ length: 8 }).map((_, i) => ({
    id: `r2-${i + 1}`,
    name: `Partner Logo ${i + 9}`,
  }));

  // Duplicate the arrays to create a seamless scrolling loop
  const row1 = [...row1Partners, ...row1Partners];
  const row2 = [...row2Partners, ...row2Partners];

  return (
    <section className="py-[80px] lg:py-[100px] bg-white overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right {
          animation-play-state: paused;
        }
        `
      }} />
      <div className="mx-auto max-w-[1920px] text-center pause-on-hover">
        <FadeIn delay={100} direction="up" className="px-[20px] md:px-[60px] lg:px-[80px]">
          <h2 
            className="font-semibold text-[#121010] mb-[40px] lg:mb-[60px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            Our Partner Network
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-[20px] md:gap-[30px] w-full">
          {/* Row 1 - scrolling left */}
          <div className="flex w-max animate-scroll-left">
            {row1.map((partner, index) => (
              <div key={index} className="w-[200px] md:w-[280px] lg:w-[350px] px-[10px] md:px-[15px] flex-shrink-0">
                <div
                  className="group relative h-[120px] lg:h-[150px] flex items-center justify-center p-[20px] bg-[#FBFBFB] rounded-[8px] border border-[#121010]/5 hover:border-[#EF3C38]/40 transition-colors"
                  title={partner.name}
                >
                  <span 
                    className="text-[#121010]/40 font-bold tracking-wider uppercase group-hover:text-[#EF3C38]/80 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(10px, 1.5vw, 14px)' }}
                  >
                    {partner.name}
                  </span>
                  <div className="absolute inset-0 rounded-[8px] ring-1 ring-inset ring-black/5 group-hover:ring-[#EF3C38]/10 pointer-events-none transition-all"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - scrolling right */}
          <div className="flex w-max animate-scroll-right">
            {row2.map((partner, index) => (
              <div key={index} className="w-[200px] md:w-[280px] lg:w-[350px] px-[10px] md:px-[15px] flex-shrink-0">
                <div
                  className="group relative h-[120px] lg:h-[150px] flex items-center justify-center p-[20px] bg-[#FBFBFB] rounded-[8px] border border-[#121010]/5 hover:border-[#EF3C38]/40 transition-colors"
                  title={partner.name}
                >
                  <span 
                    className="text-[#121010]/40 font-bold tracking-wider uppercase group-hover:text-[#EF3C38]/80 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(10px, 1.5vw, 14px)' }}
                  >
                    {partner.name}
                  </span>
                  <div className="absolute inset-0 rounded-[8px] ring-1 ring-inset ring-black/5 group-hover:ring-[#EF3C38]/10 pointer-events-none transition-all"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}