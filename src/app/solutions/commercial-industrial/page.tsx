import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solutions | GPower",
  description:
    "Energy storage solutions for businesses and industrial facilities.",
};

const products = [
  {
    title: "BYD Battery-Box Commercial",
    description:
      "Scalable energy storage solution for commercial and industrial applications",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "BYD MC Cube",
    description: "Medium-sized containerized solution for commercial applications",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export default function CommercialIndustrialSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[58vh] min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="C&I Energy Storage"
            fill
            priority
            className="object-cover opacity-50 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/65 to-[#121010]/35" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={120} direction="up">
            <h1
              className="text-white font-medium leading-tight mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(30px, 5.2vw, 54px)" }}
            >
              Commercial & Industrial Storage
            </h1>
          </FadeIn>
          <FadeIn delay={240} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.55vw, 18px)" }}
            >
              Energy storage solutions for businesses and industrial facilities
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[26px]">
          {products.map((product, index) => (
            <FadeIn delay={140 + index * 90} direction="up" key={product.title}>
              <article className="rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full flex flex-col">
                <div className="relative h-[250px] sm:h-[300px] lg:h-[340px] w-full">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                </div>
                <div className="p-[22px] lg:p-[26px] flex flex-col flex-1">
                  <h2
                    className="text-[#121010] font-medium mb-[10px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(19px, 2.2vw, 26px)" }}
                  >
                    {product.title}
                  </h2>
                  <p
                    className="text-[#475569] font-normal leading-[1.65] mb-[20px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)" }}
                  >
                    {product.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center justify-center w-fit px-[22px] py-[12px] rounded-[8px] bg-[#EF3C38] text-white font-normal hover:bg-[#d63532] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-[18px] sm:gap-[22px] lg:gap-[26px]">
          <FadeIn delay={100} direction="up" className="lg:col-span-4">
            <div className="rounded-[18px] border border-[#121010]/10 bg-white p-[22px] lg:p-[28px] h-full lg:min-h-[560px] flex flex-col justify-between">
              <div>
                <h2
                  className="text-[#121010] font-medium mb-[12px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}
                >
                  Commercial Deployment Excellence
                </h2>
                <p
                  className="text-[#475569] font-normal leading-[1.7]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                >
                  Purpose-built storage for malls, offices, campuses, and data-driven commercial operations.
                </p>
              </div>
              <div className="mt-[20px] border-t border-[#121010]/10 pt-[18px]">
                <p
                  className="text-[#EF3C38] font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
                >
                  Commercial Focus Areas
                </p>
                <p
                  className="text-[#475569] font-normal mt-[6px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                >
                  Peak shaving, critical-load backup, and tariff optimization.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-8 grid grid-cols-1 gap-[16px] sm:gap-[20px] lg:gap-[22px]">
            <FadeIn delay={180} direction="up">
              <article className="rounded-[18px] overflow-hidden border border-[#121010]/10 bg-white grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[240px] md:h-full min-h-[220px]">
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                    alt="Commercial business district"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-[22px] lg:p-[26px] flex flex-col justify-center">
                  <h3
                    className="text-[#121010] font-medium mb-[10px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(19px, 2vw, 26px)" }}
                  >
                    Peak Demand Optimization
                  </h3>
                  <p
                    className="text-[#475569] font-normal leading-[1.65]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.05vw, 15px)" }}
                  >
                    Store low-cost off-peak energy and discharge during high tariff windows to lower demand charges.
                  </p>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={260} direction="up">
              <article className="rounded-[18px] overflow-hidden border border-[#121010]/10 bg-white grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[240px] md:h-full min-h-[220px]">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                    alt="Commercial high-rise infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-[22px] lg:p-[26px] flex flex-col justify-center">
                  <h3
                    className="text-[#121010] font-medium mb-[10px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(19px, 2vw, 26px)" }}
                  >
                    Backup for Critical Loads
                  </h3>
                  <p
                    className="text-[#475569] font-normal leading-[1.65]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.05vw, 15px)" }}
                  >
                    Ensure continuity for elevators, lighting, HVAC, and essential IT systems during outages.
                  </p>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F4F5F7]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={100} direction="up">
            <div className="max-w-5xl mx-auto text-center mb-[34px] lg:mb-[48px]">
              <h2
                className="text-[#121010] font-medium mb-[12px]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3.2vw, 38px)" }}
              >
                Industrial Reliability Solutions
              </h2>
              <p
                className="text-[#475569] font-normal"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.25vw, 16px)" }}
              >
                Rugged storage systems designed for factories, process industries, and continuous production lines.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] sm:gap-[22px] lg:gap-[28px]">
            <FadeIn delay={160} direction="up">
              <article className="rounded-[18px] border border-[#121010]/10 bg-white p-[18px] sm:p-[22px] lg:p-[24px] h-full">
                <div className="relative h-[260px] sm:h-[320px] rounded-[14px] overflow-hidden mb-[18px]">
                  <Image
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                    alt="Industrial plant operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start gap-3 mb-[10px]">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EF3C38] text-white font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px" }}>
                    01
                  </span>
                  <h3
                    className="text-[#121010] font-medium leading-[1.3]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)" }}
                  >
                    Process Stability & Uptime
                  </h3>
                </div>
                <p
                  className="text-[#475569] font-normal leading-[1.65]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.05vw, 15px)" }}
                >
                  Smooth out voltage fluctuations and support uninterrupted industrial workflows with fast-response storage.
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={240} direction="up">
              <article className="rounded-[18px] border border-[#121010]/10 bg-white p-[18px] sm:p-[22px] lg:p-[24px] h-full">
                <div className="relative h-[260px] sm:h-[320px] rounded-[14px] overflow-hidden mb-[18px]">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                    alt="Industrial control and machinery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start gap-3 mb-[10px]">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EF3C38] text-white font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px" }}>
                    02
                  </span>
                  <h3
                    className="text-[#121010] font-medium leading-[1.3]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)" }}
                  >
                    Scalable Multi-MW Architecture
                  </h3>
                </div>
                <p
                  className="text-[#475569] font-normal leading-[1.65]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.05vw, 15px)" }}
                >
                  Expand from pilot to full-scale deployments with modular systems aligned to industrial growth.
                </p>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up">
            <h2
              className="text-white font-normal mb-[16px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(21px, 2.7vw, 34px)" }}
            >
              Ready to Optimize Your Energy Costs?
            </h2>
          </FadeIn>
          <FadeIn delay={260} direction="up">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-medium hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
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