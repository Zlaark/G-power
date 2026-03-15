import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Activity, ShieldCheck, Zap, Gauge } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Utility Solutions | GPower",
  description:
    "Grid-scale energy storage systems for renewable integration, stability, and utility-grade performance.",
};

const keyFeatures = [
  {
    title: "Ultra-Safe Design",
    description: "Multi-layer safety systems with thermal management",
    icon: ShieldCheck,
  },
  {
    title: "High Efficiency",
    description: "Up to 87% round-trip efficiency",
    icon: Zap,
  },
  {
    title: "Long Life Cycle",
    description: "20+ year design life with minimal degradation",
    icon: Activity,
  },
  {
    title: "Grid Services",
    description: "Frequency regulation, peak shaving, and more",
    icon: Gauge,
  },
];

const products = [
  {
    title: "BYD Cube Pro C&C",
    capacity: "2.76 MWh",
    description:
      "Large-scale containerized energy storage system for utility applications",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/contact",
  },
  {
    title: "BYD Cube T28",
    capacity: "3.44 MWh",
    description:
      "Next-generation utility-scale energy storage with enhanced safety",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/contact",
  },
];

export default function UtilitySolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[58vh] min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1725308659447-bf1b10f6635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Utility Scale Energy Storage"
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
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
            >
              Utility Scale Energy Storage Solutions
            </p>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <h1
              className="text-white font-semibold leading-tight mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(34px, 6vw, 64px)" }}
            >
              Grid-Scale Energy Storage
            </h1>
          </FadeIn>
          <FadeIn delay={340} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.8vw, 22px)" }}
            >
              Large-scale battery storage systems for grid stabilization, renewable
              integration, and energy management
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[44px] lg:mb-[58px]">
              <h2
                className="font-semibold text-[#121010] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Complete Utility-Scale Solution
              </h2>
              <p
                className="text-[#121010]/75 font-medium leading-[1.75]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.6vw, 18px)" }}
              >
                Our utility-scale energy storage systems provide grid operators with flexible,
                reliable, and cost-effective solutions for managing renewable energy integration
                and grid stability
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] sm:gap-[18px] lg:gap-[24px]">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn delay={180 + index * 70} direction="up" key={feature.title}>
                  <div className="h-full min-h-[205px] lg:min-h-[224px] rounded-[16px] border border-[#121010]/10 bg-[#F9FAFB] p-[22px] flex flex-col">
                    <Icon className="w-8 h-8 text-[#EF3C38] mb-[18px]" strokeWidth={2.2} />
                    <h3
                      className="text-[#121010] font-bold mb-[10px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(18px, 2vw, 22px)" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[#475569] font-medium leading-[1.6]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[40px] lg:mb-[52px]">
              <h2
                className="font-semibold text-[#121010]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Recommended Products
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[26px]">
            {products.map((product, index) => (
              <FadeIn delay={180 + index * 90} direction="up" key={product.title}>
                <article className="rounded-[18px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col">
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[340px] w-full">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>
                  <div className="p-[22px] lg:p-[26px] flex flex-col flex-1">
                    <p
                      className="text-[#EF3C38] font-bold mb-[8px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.4vw, 16px)" }}
                    >
                      {product.capacity}
                    </p>
                    <h3
                      className="text-[#121010] font-bold mb-[10px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 2.8vw, 30px)" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-[#475569] font-medium leading-[1.65] mb-[20px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)" }}
                    >
                      {product.description}
                    </p>
                    <Link
                      href={product.href}
                      className="mt-auto inline-flex items-center justify-center w-fit px-[22px] py-[12px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up">
            <h2
              className="text-white font-semibold mb-[16px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Ready to Deploy Utility-Scale Storage?
            </h2>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <p
              className="text-white/80 font-medium mx-auto mb-[30px] max-w-3xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}
            >
              Contact our experts to design the perfect utility-scale energy storage solution
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up">
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