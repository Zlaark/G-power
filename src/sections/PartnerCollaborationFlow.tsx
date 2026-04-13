import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export function PartnerCollaborationFlow() {
  const collaborationPoints = [
    {
      title: "Discovery & Fit",
      description:
        "We align on market focus, technical fit, delivery expectations, and the long-term goals of the partnership.",
    },
    {
      title: "Technical Alignment",
      description:
        "Our teams review architecture, engineering standards, compliance requirements, and implementation pathways.",
    },
    {
      title: "Deployment & Scale",
      description:
        "Pilot delivery, rollout support, and lifecycle coordination help partnerships grow into repeat execution programs.",
    },
  ];

  return (
    <section className="bg-white py-[58px] sm:py-[70px] lg:py-[92px] px-4 sm:px-6 lg:px-[80px] xl:px-[120px] overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes collageFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .journey-photo-main {
              animation: collageFloat 7s ease-in-out infinite;
            }
            .journey-photo-secondary {
              animation: collageFloat 8.5s ease-in-out infinite;
              animation-delay: 0.7s;
            }
          `,
        }}
      />
      <div className="mx-auto max-w-[1920px]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-center">
          <FadeIn delay={100} direction="up">
            <div className="relative mx-auto w-full max-w-[680px] min-h-[320px] sm:min-h-[540px] lg:min-h-[620px]">
              <div className="journey-photo-main group absolute left-0 top-0 w-[78%] h-[360px] sm:h-[400px] lg:h-[450px] rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-[0_30px_80px_rgba(15,23,42,0.14)] transition-transform duration-700 hover:-translate-y-2 hover:rotate-[-1deg]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Partnership discussion"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                <div className="absolute top-0 left-0 h-[3px] w-[110px] bg-[#0A5191]" />
              </div>

              <div className="journey-photo-secondary group absolute right-0 bottom-0 w-[62%] h-[180px] sm:h-[280px] lg:h-[320px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-[#E2E8F0] shadow-[0_26px_60px_rgba(15,23,42,0.16)] transition-transform duration-700 hover:translate-y-2 hover:rotate-[1deg]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="absolute left-[7%] bottom-[2%] sm:bottom-[16%] w-[160px] sm:w-[220px] rounded-[18px] sm:rounded-[22px] border border-[#E2E8F0] bg-white/95 backdrop-blur px-4 sm:px-5 py-4 sm:py-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,23,42,0.16)] hidden sm:block">
                <p
                  className="text-[#0A5191] font-semibold uppercase tracking-[0.12em]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
                >
                  Partnership Journey
                </p>
                <p
                  className="text-[#121010] font-semibold mt-3 leading-[1.35]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px" }}
                >
                  Built for trust, technical clarity, and long-term execution.
                </p>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={140} direction="up">
              <div className="max-w-[650px]">
              <p
                className="text-[#0A5191] font-semibold uppercase tracking-[0.12em]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
              >
                Partnership Journey
              </p>
              <h2
                className="text-[#121010] font-semibold mt-5 leading-[1.08]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(30px, 4vw, 48px)" }}
              >
                How We Build Strong Partner Relationships
              </h2>
              <p
                className="text-[#475569] font-medium mt-5 leading-[1.8] max-w-[540px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)" }}
              >
                A structured collaboration model helps our partners move from first conversation to long-term execution with clarity and speed.
              </p>
              </div>
            </FadeIn>

            <div className="mt-8 space-y-6 max-w-[700px]">
              {collaborationPoints.map((point, index) => (
                <FadeIn key={point.title} delay={200 + index * 90} direction="up">
                  <div className="group pb-2 transition-transform duration-500 hover:translate-x-2">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full bg-[#0A5191] shrink-0 mt-3 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-[0_0_0_6px_rgba(10, 81, 145,0.08)]" />
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-[#121010] font-semibold transition-colors duration-500 group-hover:text-[#0A5191]"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 1.6vw, 24px)" }}
                        >
                          {point.title}
                        </h3>
                        <p
                          className="text-[#475569] font-medium mt-2 leading-[1.75] transition-transform duration-500 group-hover:translate-y-[1px]"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}