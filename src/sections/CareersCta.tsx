import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export function CareersCta() {
  return (
    <section className="py-[56px] sm:py-[64px] lg:py-[100px] bg-[#121010] relative overflow-hidden px-4 sm:px-6 lg:px-[80px] xl:px-[120px]">
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-[1100px] relative z-10 text-center">
        <FadeIn delay={100} direction="up">
          <h2
            className="font-semibold text-white mb-[16px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)" }}
          >
            Don&apos;t See the Right Role?
          </h2>
          <p
            className="text-white/80 font-medium mb-[30px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-[28px] py-[14px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}
          >
            Submit Your Resume
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
