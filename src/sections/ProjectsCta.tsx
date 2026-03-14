import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export function ProjectsCta() {
  return (
    <section className="py-[80px] lg:py-[100px] bg-[#121010] px-[20px] md:px-[60px] lg:px-[80px] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="mx-auto max-w-[1150px] text-center relative z-10">
        <FadeIn delay={100} direction="up">
          <h2
            className="text-white font-semibold mb-[14px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)" }}
          >
            Have a Project in Mind?
          </h2>
          <p
            className="text-white/80 font-medium mb-[28px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.7vw, 18px)" }}
          >
            Let&apos;s design a clean-energy solution tailored to your site, scale, and business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-[28px] py-[14px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px" }}
          >
            Start Your Project
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
