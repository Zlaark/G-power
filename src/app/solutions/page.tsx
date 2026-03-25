import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | GPower",
  description: "Explore utility, residential, commercial, and industry energy storage solutions.",
};

const solutionLinks = [
  { title: "Utility", href: "/solutions/utility" },
  { title: "Residential", href: "/solutions/residential" },
  { title: "Commercial & Industrial", href: "/solutions/commercial-industrial" },
  { title: "2 & 3 Wheeler Application", href: "/solutions/2-3-wheeler" },
  { title: "New Application Business", href: "/solutions/new-application-business" },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-[170px] pb-[84px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up">
            <h1
              className="text-white font-semibold mb-[16px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 6vw, 62px)" }}
            >
              Energy Storage Solutions
            </h1>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <p
              className="text-white/80 font-medium mx-auto max-w-3xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}
            >
              Choose the right solution for your application: Utility, Residential, and Commercial & Industrial.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 gap-[14px] sm:gap-[18px] lg:gap-[24px]">
          {solutionLinks.map((item, index) => (
            <FadeIn delay={140 + index * 70} direction="up" key={item.title}>
              <Link
                href={item.href}
                className="block rounded-[16px] border border-[#121010]/10 bg-[#F9FAFB] px-[24px] py-[26px] hover:border-[#EF3C38]/50 transition-colors"
              >
                <h2
                  className="text-[#121010] font-bold"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 3vw, 30px)" }}
                >
                  {item.title}
                </h2>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}