import { FadeIn } from "@/components/FadeIn";
import { ArrowUpRight, ShieldCheck, Sparkles, TrendingUp, Wrench } from "lucide-react";

export function PartnerAdvantages() {
  const advantages = [
    {
      title: "Market Access",
      description:
        "Reach commercial, industrial, and utility-scale opportunities through a partner ecosystem built around renewable growth.",
      icon: TrendingUp,
      accent: "from-[#FFF2F1] to-[#FFE4E1]",
    },
    {
      title: "Technical Enablement",
      description:
        "Work with engineering-led teams for system sizing, integration planning, and deployment support across projects.",
      icon: Sparkles,
      accent: "from-[#F3F7FF] to-[#E6EEFF]",
    },
    {
      title: "Execution Confidence",
      description:
        "Rely on disciplined project delivery standards, quality controls, and transparent coordination at every stage.",
      icon: ShieldCheck,
      accent: "from-[#F5FFF8] to-[#E6F8EC]",
    },
    {
      title: "Lifecycle Support",
      description:
        "Extend value beyond commissioning with maintenance, optimization, and long-term operational collaboration.",
      icon: Wrench,
      accent: "from-[#FFF8EC] to-[#FFF1D6]",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-[56px] sm:py-[72px] lg:py-[96px] px-4 sm:px-6 lg:px-[80px] xl:px-[120px] overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes partnerPulseFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            .partner-stat-float {
              animation: partnerPulseFloat 6s ease-in-out infinite;
            }
            .partner-card-shine::before {
              content: "";
              position: absolute;
              inset: 0;
              background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.7) 45%, transparent 70%);
              transform: translateX(-140%);
              transition: transform 700ms ease;
              pointer-events: none;
            }
            .partner-card-shine:hover::before {
              transform: translateX(140%);
            }
          `,
        }}
      />
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-start max-w-[1500px] mx-auto">
          <FadeIn delay={100} direction="up">
            <div className="lg:sticky lg:top-24">
              <p
                className="inline-flex items-center gap-2 rounded-full border border-[#EF3C38]/15 bg-white px-4 py-2 text-[#EF3C38] font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Partner Value
              </p>
              <h2
                className="text-[#121010] font-semibold mt-5 leading-[1.1]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(30px, 4.2vw, 52px)" }}
              >
                Why Industry Leaders Choose to Build With GPower
              </h2>
              <p
                className="mt-5 text-[#475569] leading-[1.75] font-medium max-w-[620px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)" }}
              >
                Our partnership model is designed to create operational clarity, faster execution, and stronger customer outcomes across renewable energy programs.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-[430px]">
                <div className="partner-stat-float rounded-[22px] bg-white border border-[#E2E8F0] px-5 py-5 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-[#EF3C38] font-semibold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "28px" }}>
                    360°
                  </p>
                  <p className="text-[#475569] mt-2 font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", lineHeight: 1.6 }}>
                    Support from design through long-term service
                  </p>
                </div>
                <div className="partner-stat-float rounded-[22px] bg-[#EF3C38] px-5 py-5 text-white transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(239,60,56,0.25)]" style={{ animationDelay: "0.6s" }}>
                  <p className="font-semibold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "28px" }}>
                    EPC+
                  </p>
                  <p className="text-white/75 mt-2 font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", lineHeight: 1.6 }}>
                    Engineering-driven delivery for scalable partnerships
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <FadeIn key={advantage.title} delay={180 + index * 90} direction="up">
                  <div className={`partner-card-shine group relative h-full rounded-[28px] border border-[#E2E8F0] bg-gradient-to-br ${advantage.accent} p-[1px] overflow-hidden ${index % 2 === 1 ? "sm:translate-y-8" : ""}`}>
                    <div className="h-full rounded-[27px] bg-white/92 backdrop-blur px-5 py-6 sm:px-6 sm:py-7 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_55px_rgba(15,23,42,0.09)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-12 h-12 rounded-[16px] bg-[#EF3C38] text-white flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                          <Icon size={22} />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-[#CBD5E1] flex items-center justify-center text-[#121010] transition-all duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1 group-hover:border-[#EF3C38]/35 group-hover:text-[#EF3C38]">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <h3
                        className="mt-8 text-[#121010] font-semibold transition-colors duration-500 group-hover:text-[#EF3C38]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 1.7vw, 26px)" }}
                      >
                        {advantage.title}
                      </h3>
                      <p
                        className="mt-3 text-[#64748B] font-medium leading-[1.75] transition-transform duration-500 group-hover:translate-y-[2px]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
                      >
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}