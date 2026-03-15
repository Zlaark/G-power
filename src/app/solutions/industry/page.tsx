import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry Solutions | GPower",
  description: "Industrial energy storage solutions for heavy-duty operations.",
};

export default function IndustrySolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-[170px] pb-[90px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1100px] text-center">
          <FadeIn delay={120} direction="up">
            <h1
              className="text-white font-semibold mb-[16px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(34px, 6vw, 62px)" }}
            >
              Industry Energy Storage
            </h1>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <p
              className="text-white/80 font-medium mx-auto max-w-3xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}
            >
              Reliable and scalable storage for industrial power continuity and efficiency.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[900px] text-center">
          <FadeIn delay={120} direction="up">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px" }}
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}