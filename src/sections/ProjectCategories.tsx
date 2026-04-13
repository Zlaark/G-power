import { FadeIn } from "@/components/FadeIn";
import { Building2, Factory, Home, CarFront } from "lucide-react";

export function ProjectCategories() {
  const categories = [
    {
      title: "Utility Scale",
      description: "Large-scale renewable plants delivering high-capacity clean energy generation.",
      icon: <Building2 className="w-8 h-8 text-[#0A5191]" strokeWidth={2.3} />,
    },
    {
      title: "Commercial & Industrial",
      description: "Tailored energy systems for enterprises seeking lower costs and better efficiency.",
      icon: <Factory className="w-8 h-8 text-[#0A5191]" strokeWidth={2.3} />,
    },
    {
      title: "Residential",
      description: "Reliable rooftop and storage solutions for homes and modern communities.",
      icon: <Home className="w-8 h-8 text-[#0A5191]" strokeWidth={2.3} />,
    },
    {
      title: "EV Infrastructure",
      description: "Scalable EV charging deployments for tech parks, fleets, and urban hubs.",
      icon: <CarFront className="w-8 h-8 text-[#0A5191]" strokeWidth={2.3} />,
    },
  ];

  return (
    <section className="py-[56px] sm:py-[64px] lg:py-[90px] bg-white px-4 sm:px-6 md:px-[90px] lg:px-[120px]">
      <div className="mx-auto max-w-[1600px]">
        <FadeIn delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-[40px] lg:mb-[55px]">
            <h2
              className="font-semibold text-[#121010] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.8vw, 40px)" }}
            >
              Project Categories
            </h2>
            <p
              className="paragraph-hover-float text-[#121010]/75 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.6vw, 17px)" }}
            >
              Explore the key segments where GPower delivers measurable clean-energy outcomes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[16px] lg:gap-[24px]">
          {categories.map((item, index) => (
            <FadeIn delay={180 + index * 70} direction="up" key={item.title}>
              <div className="h-full min-h-[220px] lg:min-h-[250px] rounded-[16px] border border-[#121010]/10 bg-[#F9FAFB] px-[22px] py-[22px] lg:px-[24px] lg:py-[24px] flex flex-col">
                <div className="mb-[18px]">{item.icon}</div>
                <h3
                  className="text-[#121010] font-bold mb-[12px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2vw, 22px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="paragraph-hover-float text-[#475569] font-medium leading-[1.6]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
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
