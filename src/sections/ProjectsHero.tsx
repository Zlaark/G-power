import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export function ProjectsHero() {
  return (
    <section className="relative h-[50vh] min-h-[340px] md:h-[60vh] md:min-h-[500px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29sYXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcyMDAzNDU0fDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
          alt="Projects Background"
          fill
          className="object-cover opacity-40 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center flex flex-col items-center justify-center h-full max-w-4xl">
        <FadeIn delay={100} direction="up">
          <h1 
            className="text-white font-semibold leading-tight mb-6"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 54px)' }}
          >
            Our Projects
          </h1>
        </FadeIn>
        <FadeIn delay={300} direction="up">
          <p 
            className="text-white/80 max-w-2xl mx-auto font-medium"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 2vw, 22px)' }}
          >
            Delivering excellence across India's energy landscape
          </p>
        </FadeIn>
        <FadeIn delay={450} direction="up" className="mt-[28px]">
          <div className="flex flex-wrap items-center justify-center gap-[12px]">
            <a
              href="#featured-projects"
              className="inline-flex items-center justify-center px-[24px] py-[12px] rounded-[8px] bg-[#0A5191] text-white font-semibold hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Explore Projects
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[24px] py-[12px] rounded-[8px] border border-white/35 text-white font-semibold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Talk to Our Team
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}