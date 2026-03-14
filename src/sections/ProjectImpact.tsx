"use client";

import { FadeIn } from "@/components/FadeIn";
import { useEffect, useRef, useState } from "react";

type ImpactItem = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const AnimatedValue = ({
  value,
  prefix = "",
  suffix = "",
  start,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrameId = 0;
    const duration = 1400;
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      }
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, [start, value]);

  return (
    <>
      {prefix}
      {displayValue}
      {suffix}
    </>
  );
};

export function ProjectImpact() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const impacts: ImpactItem[] = [
    {
      value: 500,
      suffix: "+ MW",
      label: "Total Installed Capacity",
    },
    {
      value: 200,
      suffix: "+",
      label: "Completed Projects",
    },
    {
      value: 1,
      suffix: "M+ tons",
      label: "CO₂ Emissions Avoided",
    },
  ];

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-[44px] sm:py-[52px] lg:py-[64px] bg-[#F4F6F8] px-4 sm:px-6 md:px-[90px] lg:px-[120px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <div className="text-center mb-[40px] lg:mb-[52px]">
            <h2 
              className="font-semibold text-[#121010]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3.2vw, 34px)' }}
            >
              Project Impact
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[26px] lg:gap-[36px] max-w-[1120px] mx-auto">
          {impacts.map((impact, index) => (
            <FadeIn delay={200 + index * 100} direction="up" key={index} className="w-full max-w-[320px] min-h-[130px] mx-auto flex flex-col items-center justify-center text-center">
              <span 
                className="font-semibold text-[#EF3C38] mb-[6px] block leading-[1.05]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(34px, 4.2vw, 48px)' }}
              >
                <AnimatedValue
                  value={impact.value}
                  prefix={impact.prefix}
                  suffix={impact.suffix}
                  start={startCounting}
                />
              </span>
              <span 
                className="text-[#64748b] font-light leading-[1.2]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(11px, 0.9vw, 13px)' }}
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