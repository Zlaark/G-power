import { FadeIn } from "@/components/FadeIn";
import { TrendingUp, Lightbulb, Users, HeartHandshake } from "lucide-react";

export function WhyWorkAtGPower() {
  const benefits = [
    {
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities",
      icon: <TrendingUp className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.3} />,
      bg: "#EFF6FF",
    },
    {
      title: "Challenging Work",
      description: "Work on innovative projects that make a real environmental impact",
      icon: <Lightbulb className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.3} />,
      bg: "#EFF6FF",
    },
    {
      title: "Great Team",
      description: "Collaborate with industry experts and passionate colleagues",
      icon: <Users className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.3} />,
      bg: "#FFF7ED",
    },
    {
      title: "Benefits",
      description: "Competitive compensation, health insurance, and work-life balance",
      icon: <HeartHandshake className="w-10 h-10 text-[#EF3C38]" strokeWidth={2.3} />,
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
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              Why Work at GPower?
            </h2>
            <p
              className="paragraph-hover-float text-[#121010]/80 font-medium leading-[1.7]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.7vw, 18px)" }}
            >
              Join a team of passionate professionals committed to transforming India&apos;s energy landscape.
              At GPower, you&apos;ll work on cutting-edge renewable energy projects while growing your career in a supportive, innovative environment.
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
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(16px, 1.5vw, 19px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="paragraph-hover-float text-[#121010]/75 font-medium leading-[1.6]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(11px, 0.95vw, 13px)" }}
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
