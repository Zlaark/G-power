import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ShieldCheck, Zap, Activity, Cpu, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Application Business | GPower",
  description:
    "Advanced energy storage and power solutions for cutting-edge business applications.",
};

const businessBenefits = [
  {
    title: "Scalability",
    description: "Start small and grow your energy storage seamlessly as your business expands",
  },
  {
    title: "Uncompromising Reliability",
    description: "Ensure zero downtime for mission-critical operations with redundant backup systems",
  },
  {
    title: "Cost Optimization",
    description: "Intelligently manage peak loads and off-peak charging to minimize operational costs",
  },
  {
    title: "Smart Integration",
    description: "Effortlessly integrate with existing enterprise management systems via robust APIs",
  },
];

const productMerits = [
  {
    title: "Enterprise Safety",
    description: "Industry-leading thermal management systems with certified fire-suppression built-in",
    icon: ShieldCheck,
  },
  {
    title: "Maximum Yield",
    description: "Sophisticated inverter technology ensuring minimal energy loss during conversions",
    icon: Zap,
  },
  {
    title: "Continuous Operation",
    description: "Designed for 24/7 demanding environments with hot-swappable modular components",
    icon: Activity,
  },
  {
    title: "Predictive Analytics",
    description: "AI-driven diagnostics predict maintenance needs before they impact your business",
    icon: Cpu,
  },
];

const recommendedProducts = [
  {
    title: "Core Business Station",
    tagline: "50 kWh",
    description: "Compact and powerful standardized unit perfect for growing commercial spaces",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solutions/new-application-business/core-station",
    specs: [
      { label: "Capacity", value: "50 kWh" },
      { label: "Footprint", value: "1.2 sq meters" },
      { label: "Efficiency", value: "97.5%" },
      { label: "Lifespan", value: "15 Years" },
    ],
  },
  {
    title: "Enterprise Power Hub",
    tagline: "250 kWh",
    description: "High-density modular storage designed for large-scale operations and data centers",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solutions/new-application-business/enterprise-hub",
    specs: [
      { label: "Capacity", value: "250 kWh" },
      { label: "Footprint", value: "3.5 sq meters" },
      { label: "Efficiency", value: "98%" },
      { label: "Lifespan", value: "15 Years" },
    ],
  },
];

const caseStudies = [
  {
    title: "Corporate Tech Park in Pune",
    image:
      "https://images.unsplash.com/photo-1765272087971-2cfac8bc6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "500 kWh Total",
    result: "Eliminated peak-hour grid dependency",
  },
  {
    title: "Data Center in Chennai",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "2 MWh Redundant",
    result: "99.999% uptime during frequent grid outages",
  },
  {
    title: "Logistics Hub in Noida",
    image:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "150 kWh Custom",
    result: "Self-sufficient operation synced with rooftop solar",
  },
];

export default function NewApplicationBusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[52vh] min-h-[360px] sm:min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1558981420-c532902e58b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern Business Infrastructure Background"
            fill
            priority
            className="object-cover opacity-50 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/65 to-[#121010]/35" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={200} direction="up" duration={900}>
            <p
              className="text-white/85 font-normal tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
            >
              Business Energy Solutions
            </p>
          </FadeIn>
          <FadeIn delay={400} direction="up" duration={900}>
            <h1
              className="text-white font-medium leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              Power Your Enterprise, Effortlessly
            </h1>
          </FadeIn>
          <FadeIn delay={600} direction="up" duration={900}>
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.5vw, 18px)" }}
            >
              Intelligent energy architectures tailored for new-age businesses and cutting-edge industrial applications.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[56px] lg:mb-[72px]">
              <h2
                className="font-medium text-[#121010] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Built for the Future
              </h2>
              <p
                className="text-[#121010]/75 font-normal leading-[1.75]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
              >
                Our commercial storage systems provide enterprises with energy certainty, transforming grid volatility into a non-issue while optimizing daily operational costs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[88px]">
            <FadeIn delay={300} direction="left" duration={900}>
              <div className="relative w-full h-[300px] md:h-[420px] lg:h-[560px] rounded-[18px] overflow-hidden border border-[#121010]/10">
                <Image
                  src="https://images.unsplash.com/photo-1758957851828-5179f0e06985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Modern business technology lab"
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out hover:scale-110"
                />
              </div>
            </FadeIn>

            <FadeIn delay={400} direction="right" duration={900}>
              <div className="w-full">
                <h3
                  className="font-normal text-[#111827] mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.8vw, 28px)" }}
                >
                  Why Partner With Us?
                </h3>
                <p
                  className="text-[#475569] font-normal leading-[1.75] mb-[24px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.35vw, 16px)" }}
                >
                  We understand that your business applications cannot afford power interruptions. Our battery storage platforms are explicitly designed to be silent, smart, and profoundly reliable.
                </p>

                <div className="space-y-[22px]">
                  {businessBenefits.map((item, index) => (
                    <FadeIn delay={220 + index * 60} direction="up" key={item.title}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-[19px] h-[19px] mt-[4px] text-[#EF3C38]" strokeWidth={2.2} />
                        <div>
                          <h4
                            className="text-[#111827] font-normal leading-[1.35]"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.3vw, 20px)" }}
                          >
                            {item.title}
                          </h4>
                          <p
                            className="text-[#475569] font-normal leading-[1.65]"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.1vw, 16px)" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[40px] lg:mb-[52px]">
              <h2
                className="font-medium text-[#121010]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Key Product Merits
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] sm:gap-[18px] lg:gap-[24px]">
            {productMerits.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn delay={180 + index * 70} direction="up" key={item.title}>
                  <div className="group card-shimmer h-full min-h-[250px] lg:min-h-[290px] rounded-[16px] border border-[#121010]/10 bg-white p-[22px] flex flex-col transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:border-[#EF3C38]/20">
                    <Icon className="w-8 h-8 text-[#EF3C38] mb-[18px] transition-transform duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-6" strokeWidth={2.2} />
                    <h3
                      className="text-[#121010] font-normal mb-[10px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#475569] font-normal leading-[1.6]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[18px] lg:mb-[22px]">
              <h2
                className="font-medium text-[#121010]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Recommended Products
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={250} direction="up" duration={900}>
            <p
              className="text-[#121010]/75 font-normal text-center mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
            >
              Enterprise-grade storage systems precisely scaled for your operational needs
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {recommendedProducts.map((product, index) => (
              <FadeIn delay={180 + index * 90} direction="up" key={product.title}>
                <article className="group card-shimmer card-border-glow rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full min-h-0 lg:min-h-[610px] flex flex-col transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:-translate-x-1 hover:border-[#EF3C38]/10">
                  <div className="img-zoom relative h-[240px] sm:h-[290px] lg:h-[340px] w-full">
                    <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-[1.08]" />
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#EF3C38] text-white font-medium"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.1vw, 16px)" }}>
                      {product.tagline}
                    </div>
                  </div>
                  <div className="p-[22px] lg:p-[24px] flex flex-col flex-1">
                    <h3
                      className="text-[#121010] font-normal mb-[16px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.6vw, 26px)" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-[#475569] font-normal leading-[1.65] mb-[22px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.05vw, 16px)" }}
                    >
                      {product.description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[26px]">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="border-l-2 border-[#EF3C38] pl-3">
                          <p
                            className="text-[#64748B] font-normal leading-[1.1]"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
                          >
                            {spec.label}
                          </p>
                          <p
                            className="text-[#121010] font-normal leading-[1.2] mt-1"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.1vw, 16px)" }}
                          >
                            {spec.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={product.href}
                      className="mt-auto inline-flex items-center gap-2 w-fit text-[#EF3C38] font-medium hover:text-[#d63532] transition-all duration-500 ease-in-out group-hover:gap-4"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.15vw, 16px)" }}
                    >
                      View Details <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[16px] lg:mb-[22px]">
              <h2
                className="font-medium text-[#121010]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Project Case Studies
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={250} direction="up" duration={900}>
            <p
              className="text-[#121010]/75 font-normal text-center mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
            >
              Real-world implementations empowering modern commercial infrastructure
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {caseStudies.map((item, index) => (
              <FadeIn delay={180 + index * 80} direction="up" key={item.title}>
                <article className="group card-shimmer card-border-glow rounded-[16px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] hover:border-[#EF3C38]/10">
                  <div className="img-zoom relative h-[220px] w-full">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-[1.08]" />
                  </div>
                  <div className="p-[20px] lg:p-[22px] flex-1 flex flex-col gap-[8px]">
                    <h3
                      className="text-[#121010] font-normal mb-[4px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2vw, 22px)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#475569] font-normal leading-[1.65]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
                    >
                      Capacity: {item.capacity}
                    </p>
                    <p
                      className="text-[#475569] font-normal leading-[1.65]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
                    >
                      Result: {item.result}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={200} direction="up" duration={900}>
            <h2
              className="text-white font-medium mb-[16px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2.8vw, 32px)" }}
            >
              Ready to Upgrade Your Infrastructure?
            </h2>
          </FadeIn>
          <FadeIn delay={400} direction="up" duration={900}>
            <p
              className="text-white/80 font-normal mx-auto mb-[30px] max-w-3xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.5vw, 18px)" }}
            >
              Get in touch with our commercial application experts to architect the perfect resilient power solution for your business.
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up" className="flex flex-wrap items-center justify-center gap-[12px]">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-medium transition-all duration-500 ease-in-out hover:bg-[#d63532] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Contact Us
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] border border-white/35 text-white font-medium transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Call: +91 123 456 7890
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
