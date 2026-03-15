import { FadeIn } from "@/components/FadeIn";

export function WhatWeOffer() {
  const columns = [
    {
      title: "Compensation & Benefits",
      items: [
        "Competitive salary packages",
        "Performance-based bonuses",
        "Health & life insurance",
        "Provident fund & gratuity",
      ],
    },
    {
      title: "Learning & Development",
      items: [
        "Training & certifications",
        "Conference attendance",
        "Mentorship programs",
        "Skill development workshops",
      ],
    },
    {
      title: "Work Culture",
      items: [
        "Flexible working hours",
        "Modern office facilities",
        "Team building activities",
        "Inclusive environment",
      ],
    },
  ];

  return (
    <section className="py-[80px] lg:py-[100px] bg-white px-[20px] md:px-[60px] lg:px-[80px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <div className="max-w-[1560px] mx-auto rounded-[24px] bg-[#F3F4F6] px-[28px] md:px-[52px] lg:px-[72px] py-[48px] lg:py-[68px]">
            <h2
              className="text-center font-semibold text-[#121010] mb-[44px] lg:mb-[56px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              What We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[54px]">
              {columns.map((column) => (
                <div key={column.title} className="h-full">
                  <h3
                    className="font-bold text-[#121010] mb-[20px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 24px)" }}
                  >
                    {column.title}
                  </h3>
                  <ul className="space-y-[12px]">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-[10px]">
                        <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-[#EF3C38] flex-shrink-0" />
                        <span
                          className="text-[#334155] font-medium leading-[1.6]"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
