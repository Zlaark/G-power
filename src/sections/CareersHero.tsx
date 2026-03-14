import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative h-[72vh] min-h-[620px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcyMDAzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
          alt="Careers Background"
          fill
          className="object-cover opacity-40 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-[20px] md:px-[60px] lg:px-[80px] mx-auto text-center flex flex-col items-center justify-center h-full max-w-4xl">
        <FadeIn delay={100} direction="up">
          <h1
            className="text-white font-semibold leading-tight mb-6"
            style={{ fontFamily: "'Kumbh Sans', sans-serif", fontSize: "clamp(36px, 6vw, 54px)" }}
          >
            Join Our Team
          </h1>
        </FadeIn>
        <FadeIn delay={300} direction="up">
          <p
            className="text-white/80 max-w-3xl mx-auto font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 2vw, 22px)" }}
          >
            Build your career while building India&apos;s clean energy future
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
