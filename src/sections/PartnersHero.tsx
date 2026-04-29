import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export function PartnersHero() {
  return (
    <section className="relative h-[50vh] min-h-[340px] md:min-h-[440px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/Banner (Our Partners Page).webp"
          alt="Corporate Partners Background"
          fill
          className="object-cover opacity-40 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto text-center flex flex-col items-center justify-center h-full max-w-4xl">
        <FadeIn delay={100} direction="up">
          <h1 
            className="text-white font-semibold leading-tight mb-6"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 54px)' }}
          >
            Our Partners
          </h1>
        </FadeIn>
        <FadeIn delay={300} direction="up">
          <p 
            className="text-white/80 max-w-2xl mx-auto font-medium"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 2vw, 22px)' }}
          >
            Collaborating with industry leaders to drive innovation
          </p>
        </FadeIn>
      </div>
    </section>
  );
}