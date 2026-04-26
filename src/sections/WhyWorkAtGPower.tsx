import { FadeIn } from "@/components/FadeIn";
import { TrendingUp, Lightbulb, Users, HeartHandshake } from "lucide-react";

export function WhyWorkAtGPower() {
  const benefits = [
    {
      title: "Professional Growth",
      description: "Advance your career with continuous learning, hands-on industry exposure, and opportunities to take ownership of impactful BESS projects.",
      icon: <TrendingUp className="w-10 h-10 text-[#0A5191]" strokeWidth={2.3} />,
      bg: "#EFF6FF",
    },
    {
      title: "Innovation-Driven Work",
      description: "Be part of solving real-world energy challenges through advanced Battery Energy Storage solutions designed for a smarter and more sustainable future.",
      icon: <Lightbulb className="w-10 h-10 text-[#0A5191]" strokeWidth={2.3} />,
      bg: "#EFF6FF",
    },
    {
      title: "Collaborative Culture",
      description: "Work alongside experienced professionals, engineers, and industry leaders in an environment built on trust, teamwork, and shared success.",
      icon: <Users className="w-10 h-10 text-[#0A5191]" strokeWidth={2.3} />,
      bg: "#FFF7ED",
    },
    {
      title: "Employee Wellbeing",
      description: "We value our people with competitive benefits, a supportive work environment, and a strong focus on work-life balance and long-term career satisfaction.",
      icon: <HeartHandshake className="w-10 h-10 text-[#0A5191]" strokeWidth={2.3} />,
      bg: "#FAF5FF",
    },
  ];

  return (
    <section className="py-[56px] sm:py-[64px] lg:py-[100px] bg-[#FBFBFB] px-4 sm:px-6 lg:px-[80px] xl:px-[120px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <div className="text-center max-w-4xl mx-auto mb-[32px] sm:mb-[40px] lg:mb-[64px]">
            <h2
              className="font-semibold text-[#121010] mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              Why Work at GPower?
            </h2>
            <p
              className="paragraph-hover-float text-[#121010]/80 font-medium leading-[1.7]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.7vw, 18px)" }}
            >
              Be part of a team shaping the future of energy storage in India. At GPower, we work on advanced Battery Energy Storage System (BESS) solutions that support cleaner, smarter, and more reliable power infrastructure. Here, your work creates real industry impact while helping you grow in a collaborative and forward-thinking environment.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[12px] lg:gap-[14px] max-w-[1240px] mx-auto">
          {benefits.map((item, index) => (
            <FadeIn delay={180 + index * 100} direction="up" key={item.title}>
              <div
                className="w-full max-w-[300px] sm:max-w-[285px] min-h-[220px] lg:min-h-[250px] mx-auto rounded-[14px] p-[14px] lg:p-[18px] flex flex-col items-center justify-center text-center border border-[#121010]/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-transform duration-300"
                style={{ backgroundColor: item.bg }}
              >
                <div className="mb-[12px]">{item.icon}</div>
                <h3
                  className="font-bold text-[#121010] mb-[8px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.5vw, 19px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="paragraph-hover-float text-[#121010]/75 font-medium leading-[1.6]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(11px, 0.95vw, 13px)" }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
