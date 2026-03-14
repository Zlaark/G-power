import { FadeIn } from "@/components/FadeIn";

export function ProjectImpact() {
  const impacts = [
    {
      value: "500+ MW",
      label: "Total Installed Capacity",
    },
    {
      value: "200+",
      label: "Completed Projects",
    },
    {
      value: "1M+ tons",
      label: "CO₂ Emissions Avoided",
    },
  ];

  return (
    <section className="py-[100px] lg:py-[120px] bg-white px-[20px] md:px-[60px] lg:px-[80px] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #121010 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="mx-auto max-w-[1920px] relative z-10">
        <FadeIn delay={100} direction="up">
          <div className="text-center mb-[60px] lg:mb-[80px]">
            <h2 
              className="font-semibold text-[#121010] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              Project Impact
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[30px] lg:gap-[40px] max-w-[1200px] mx-auto divide-y md:divide-y-0 md:divide-x divide-[#121010]/20">
          {impacts.map((impact, index) => (
            <FadeIn delay={200 + index * 100} direction="up" key={index} className="flex flex-col items-center text-center pt-[40px] md:pt-0 first:pt-0">
              <span 
                className="font-bold text-[#EF3C38] mb-[15px] tracking-tight block"
                style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: 'clamp(40px, 5vw, 64px)' }}
              >
                {impact.value}
              </span>
              <span 
                className="text-[#121010]/90 font-medium uppercase tracking-[2px]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 1.2vw, 14px)' }}
              >
                {impact.label}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}