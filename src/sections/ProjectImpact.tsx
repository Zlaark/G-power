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
    <section ref={sectionRef} className="py-[100px] lg:py-[120px] bg-white px-[20px] md:px-[60px] lg:px-[80px] relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-[80px] lg:gap-[120px] max-w-[1400px] mx-auto">
          {impacts.map((impact, index) => (
            <FadeIn delay={200 + index * 100} direction="up" key={index} className="flex flex-col items-center text-center pt-[40px] md:pt-0 first:pt-0">
              <span 
                className="font-bold text-[#EF3C38] mb-[18px] tracking-[0.02em] block"
                style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: 'clamp(48px, 6vw, 76px)' }}
              >
                <AnimatedValue
                  value={impact.value}
                  prefix={impact.prefix}
                  suffix={impact.suffix}
                  start={startCounting}
                />
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