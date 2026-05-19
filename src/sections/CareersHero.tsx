import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative h-[65vh] md:h-[80vh] min-h-[400px] md:min-h-[550px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/Join Our Team(Career page Banner img).webp"
          alt="Careers Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center flex flex-col items-center justify-center h-full max-w-4xl">
        <FadeIn delay={100} direction="up">
          <h1
            className="text-white font-semibold leading-tight mb-6"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 6vw, 54px)" }}
          >
            Join Our Team
          </h1>
        </FadeIn>
        <FadeIn delay={300} direction="up">
          <p
            className="text-white/80 max-w-3xl mx-auto font-medium"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 2vw, 22px)" }}
          >
            Build your career while building India&apos;s clean energy future
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
