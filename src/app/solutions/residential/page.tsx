import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential | GPower",
  description:
    "Explore residential energy storage solutions and products for your home.",
};

export default function ResidentialHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[52vh] min-h-[360px] sm:min-h-[430px] md:h-[65vh] md:min-h-[520px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1771479755134-9c1e3143c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Residential Solar Installation"
            fill
            priority
            className="object-cover opacity-50 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/65 to-[#121010]/35" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={120} direction="up">
            <p
              className="text-white/85 font-medium tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
            >
              Residential Energy Storage
            </p>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <h1
              className="text-white font-semibold leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 6vw, 64px)" }}
            >
              Power Your Home, Sustainably
            </h1>
          </FadeIn>
          <FadeIn delay={340} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.8vw, 22px)" }}
            >
              Choose how you&apos;d like to explore our residential energy storage offerings
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[80px] lg:py-[120px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn delay={100} direction="up">
            <div className="text-center mb-[48px] lg:mb-[64px]">
              <h2
                className="font-semibold text-[#121010] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 42px)" }}
              >
                What would you like to explore?
              </h2>
              <p
                className="text-[#475569] font-medium"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)" }}
              >
                Dive into our comprehensive solutions or browse individual products
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[28px]">
            <FadeIn delay={180} direction="up">
              <Link
                href="/solutions/residential/solution"
                className="group card-shimmer card-border-glow block rounded-[20px] border border-[#121010]/10 bg-white overflow-hidden h-full min-h-[340px] lg:min-h-[420px] flex flex-col"
              >
                <div className="relative h-[180px] lg:h-[220px] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1758957851828-5179f0e06985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Solutions"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#EF3C38] flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-[24px] lg:p-[28px] flex flex-col flex-1">
                  <h3
                    className="text-[#121010] font-semibold mb-[10px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 2.5vw, 30px)" }}
                  >
                    Solutions
                  </h3>
                  <p
                    className="text-[#475569] font-medium leading-[1.65] mb-[18px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 16px)" }}
                  >
                    Detailed solution overview, product merits, recommended products, project case studies, and expert consultation.
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-2 text-[#EF3C38] font-medium group-hover:gap-4 transition-all duration-300"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}
                  >
                    Explore Solutions <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={280} direction="up">
              <Link
                href="/solutions/residential/products"
                className="group card-shimmer card-border-glow block rounded-[20px] border border-[#121010]/10 bg-white overflow-hidden h-full min-h-[340px] lg:min-h-[420px] flex flex-col"
              >
                <div className="relative h-[180px] lg:h-[220px] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="More Products"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#EF3C38] flex items-center justify-center shadow-lg">
                    <Package className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-[24px] lg:p-[28px] flex flex-col flex-1">
                  <h3
                    className="text-[#121010] font-semibold mb-[10px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 2.5vw, 30px)" }}
                  >
                    More Products
                  </h3>
                  <p
                    className="text-[#475569] font-medium leading-[1.65] mb-[18px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 16px)" }}
                  >
                    Browse all residential battery products individually with specifications, technical parameters, and downloadable datasheets.
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-2 text-[#EF3C38] font-medium group-hover:gap-4 transition-all duration-300"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}
                  >
                    Browse Products <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}