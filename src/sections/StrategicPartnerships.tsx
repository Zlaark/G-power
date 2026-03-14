import { FadeIn } from "@/components/FadeIn";
import { Handshake, Award, Globe } from "lucide-react";

export function StrategicPartnerships() {
  const partnerships = [
    {
      title: "Technology Partners",
      desc: "Leading solar panel and battery storage manufacturers providing cutting-edge technology",
      icon: <Handshake className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.5} />,
    },
    {
      title: "Service Partners",
      desc: "Certified installation and maintenance partners ensuring quality service delivery",
      icon: <Award className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.5} />,
    },
    {
      title: "Global Alliances",
      desc: "International partnerships bringing world-class expertise to India",
      icon: <Globe className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.5} />,
    },
  ];

  return (
    <section className="py-[56px] sm:py-[64px] lg:py-[80px] bg-white px-4 sm:px-6 lg:px-[80px] xl:px-[120px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 
              className="font-semibold text-[#121010] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              Strategic Partnerships
            </h2>
            <p 
              className="paragraph-hover-float text-[#121010]/70 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 1.5vw, 16px)' }}
            >
              We collaborate with world-class technology providers, manufacturers,
              and service partners to deliver best-in-class renewable energy
              solutions to our customers.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] max-w-[1600px] mx-auto">
          {partnerships.map((item, index) => (
            <FadeIn delay={200 + index * 100} direction="up" key={item.title}>
              <div className="bg-[#f9f9f9] rounded-[24px] px-5 py-7 md:px-[36px] md:py-[48px] lg:px-[48px] lg:py-[56px] flex flex-col items-center text-center justify-center hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-[30px]">
                  {item.icon}
                </div>
                <h3 
                  className="font-bold text-[#121010] mb-[20px] tracking-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(18px, 2vw, 22px)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="paragraph-hover-float text-[#64748b] font-medium leading-[1.6] max-w-[400px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(13px, 1.2vw, 15px)' }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}