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
    <section className="py-[56px] sm:py-[64px] lg:py-[80px] bg-white overflow-hidden">
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
        <FadeIn delay={100} direction="up" className="px-4 sm:px-6 lg:px-[80px] xl:px-[120px]">
          <h2 
            className="font-semibold text-[#121010] mb-[30px] lg:mb-[44px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            Our Partner Network
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-[14px] md:gap-[20px] w-full">
          {/* Row 1 - scrolling left */}
          <div className="flex w-max animate-scroll-left">
            {row1.map((partner, index) => (
              <div key={index} className="w-[130px] sm:w-[150px] md:w-[200px] lg:w-[250px] px-[6px] md:px-[10px] flex-shrink-0">
                <div
                  className="partner-logo-breathe group relative h-[72px] sm:h-[80px] lg:h-[100px] flex items-center justify-center p-[10px] sm:p-[12px] bg-[#FBFBFB] rounded-[8px] border border-[#121010]/5 hover:border-[#EF3C38]/40 transition-colors"
                  style={{ animationDelay: `${(index % 8) * 0.14}s` }}
                  title={partner.name}
                >
                  <span 
                    className="text-[#121010]/40 font-bold tracking-wider uppercase group-hover:text-[#EF3C38]/80 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(9px, 1.1vw, 12px)' }}
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
              <div key={index} className="w-[130px] sm:w-[150px] md:w-[200px] lg:w-[250px] px-[6px] md:px-[10px] flex-shrink-0">
                <div
                  className="partner-logo-breathe group relative h-[72px] sm:h-[80px] lg:h-[100px] flex items-center justify-center p-[10px] sm:p-[12px] bg-[#FBFBFB] rounded-[8px] border border-[#121010]/5 hover:border-[#EF3C38]/40 transition-colors"
                  style={{ animationDelay: `${(index % 8) * 0.16}s` }}
                  title={partner.name}
                >
                  <span 
                    className="text-[#121010]/40 font-bold tracking-wider uppercase group-hover:text-[#EF3C38]/80 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(9px, 1.1vw, 12px)' }}
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