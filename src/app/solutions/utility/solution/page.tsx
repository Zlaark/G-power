import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ShieldCheck, Zap, Activity, Gauge, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Utility Solutions | GPower",
  description:
    "Grid-scale energy storage systems for renewable integration, stability, and utility-grade performance.",
};

const utilityBenefits = [
  {
    title: "Grid Stabilization",
    description: "Provide crucial frequency and voltage support to maintain grid balance",
  },
  {
    title: "Renewable Integration",
    description: "Store excess renewable energy and dispatch it when demand peaks",
  },
  {
    title: "Peak Shaving",
    description: "Reduce peak demand charges and delay expensive infrastructure upgrades",
  },
  {
    title: "Black Start Capability",
    description: "Restore power to the grid independently after a widespread outage",
  },
];

const productMerits = [
  {
    title: "Ultra-Safe Design",
    description: "Multi-layer safety systems with advanced thermal management",
    icon: ShieldCheck,
  },
  {
    title: "High Efficiency",
    description: "Up to 87%+ round-trip efficiency for optimal economic return",
    icon: Zap,
  },
  {
    title: "Long Life Cycle",
    description: "20+ year design life engineered for minimal degradation over time",
    icon: Activity,
  },
  {
    title: "Grid Services",
    description: "Native support for frequency regulation, capacity firming, and more",
    icon: Gauge,
  },
];

const recommendedProducts = [
  {
    title: "BYD Cube Pro C&C",
    tagline: "2.76 MWh",
    description: "Large-scale containerized energy storage system for utility applications",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solutions/utility/products/utility-battery-1",
    specs: [
      { label: "Capacity", value: "2.76 MWh" },
      { label: "Power", value: "1.38 MW" },
      { label: "Voltage Range", value: "950-1312 VDC" },
      { label: "Protection", value: "IP54" },
    ],
  },
  {
    title: "BYD Cube T28",
    tagline: "3.44 MWh",
    description: "Next-generation utility-scale energy storage with enhanced energy density",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solutions/utility/products/utility-battery-2",
    specs: [
      { label: "Capacity", value: "3.44 MWh" },
      { label: "Power", value: "1.72 MW" },
      { label: "Voltage Range", value: "1000-1500 V" },
      { label: "Protection", value: "IP55" },
    ],
  },
];

const caseStudies = [
  {
    title: "Wind Farm Integration Project",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "50 MWh",
    result: "Enabled 100% dispatchability of curtailed wind power",
  },
  {
    title: "Island Microgrid Stabilization",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "15 MWh",
    result: "Replaced diesel spinning reserves entirely",
  },
  {
    title: "Frequency Regulation Plant",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "100 MW / 50 MWh",
    result: "Achieved sub-second response times for grid stability",
  },
];

export default function UtilitySolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-auto min-h-[380px] sm:min-h-[430px] md:h-[65vh] md:min-h-[520px] flex items-center justify-center bg-[#121010] overflow-hidden pt-[140px] pb-[50px] sm:pt-[150px] sm:pb-[60px] md:pt-20 md:pb-0">
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

        <div className="container relative z-10 px-5 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={200} direction="up" duration={900}>
            <p
              className="text-white/85 font-normal tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
            >
              Utility Solutions
            </p>
          </FadeIn>
          <FadeIn delay={400} direction="up" duration={900}>
            <h1
              className="text-white font-medium leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              Grid-Scale Energy Storage
            </h1>
          </FadeIn>
          <FadeIn delay={600} direction="up" duration={900}>
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.5vw, 18px)" }}
            >
              Large-scale battery storage systems for grid stabilization, renewable integration, and energy management
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[32px] sm:mb-[48px] lg:mb-[72px]">
              <h2
                className="font-medium text-[#121010] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Complete Utility-Scale Solution
              </h2>
              <p
                className="text-[#121010]/75 font-normal leading-[1.75]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
              >
                Our utility-scale energy storage systems provide operators with flexible, reliable, and cost-effective solutions for managing grid stability.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[28px] sm:gap-[40px] lg:gap-[88px]">
            <FadeIn delay={300} direction="left" duration={900}>
              <div className="relative w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[560px] rounded-[14px] sm:rounded-[18px] overflow-hidden border border-[#121010]/10">
                <Image
                  src="https://images.unsplash.com/photo-1548337138-e87d889cc369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Utility scale battery park"
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out md:hover:scale-110"
                />
              </div>
            </FadeIn>

            <FadeIn delay={400} direction="right" duration={900}>
              <div className="w-full">
                <h3
                  className="font-normal text-[#111827] mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.8vw, 28px)" }}
                >
                  Architected for the Grid
                </h3>
                <p
                  className="text-[#475569] font-normal leading-[1.75] mb-[24px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.35vw, 16px)" }}
                >
                  Our utility solutions combine cutting-edge lithium-ion storage with state-of-the-art power conversion and management systems to respond instantly to grid fluctuations.
                </p>

                <div className="space-y-[16px] sm:space-y-[22px]">
                  {utilityBenefits.map((item, index) => (
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

      <section className="py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[24px] sm:mb-[36px] lg:mb-[52px]">
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
                  <div className="group card-shimmer h-full min-h-0 sm:min-h-[250px] lg:min-h-[290px] rounded-[16px] border border-[#121010]/10 bg-white p-[16px] sm:p-[22px] flex flex-col transition-all duration-700 ease-in-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-3 md:hover:scale-105 hover:border-[#EF3C38]/20">
                    <Icon className="w-8 h-8 text-[#EF3C38] mb-[18px] transition-transform duration-700 ease-in-out md:group-hover:scale-125 md:group-hover:rotate-6" strokeWidth={2.2} />
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

      <section className="py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[14px] sm:mb-[18px] lg:mb-[22px]">
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
              className="text-[#121010]/75 font-normal text-center mb-[24px] sm:mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
            >
              Industry-leading containerized storage systems for grid stability
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {recommendedProducts.map((product, index) => (
              <FadeIn delay={180 + index * 90} direction="up" key={product.title}>
                <article className="group card-shimmer card-border-glow rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full min-h-0 lg:min-h-[580px] flex flex-col transition-all duration-700 ease-in-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-2 md:hover:-translate-x-1 hover:border-[#EF3C38]/20">
                  <div className="img-zoom relative h-[200px] sm:h-[260px] lg:h-[340px] w-full overflow-hidden">
                    <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-1000 ease-in-out md:group-hover:scale-[1.08]" />
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#EF3C38] text-white font-medium"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.1vw, 16px)" }}>
                      {product.tagline}
                    </div>
                  </div>
                  <div className="p-[16px] sm:p-[22px] lg:p-[24px] flex flex-col flex-1">
                    <h3
                      className="text-[#121010] font-normal mb-[10px] sm:mb-[16px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.6vw, 26px)" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-[#475569] font-normal leading-[1.65] mb-[16px] sm:mb-[22px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.05vw, 16px)" }}
                    >
                      {product.description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-[12px] sm:gap-x-[16px] gap-y-[12px] sm:gap-y-[16px] mb-[20px] sm:mb-[26px]">
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
                      className="mt-auto inline-flex items-center gap-2 w-fit text-[#EF3C38] font-medium hover:text-[#d63532] transition-all duration-500 ease-in-out md:group-hover:gap-4"
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

      <section className="py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={400} direction="up" duration={900}>
            <div className="text-center max-w-4xl mx-auto mb-[14px] sm:mb-[16px] lg:mb-[22px]">
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
              className="text-[#121010]/75 font-normal text-center mb-[24px] sm:mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
            >
              Global deployments proving our scale and reliability
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {caseStudies.map((item, index) => (
              <FadeIn delay={180 + index * 80} direction="up" key={item.title}>
                <article className="group card-shimmer card-border-glow rounded-[16px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col transition-all duration-700 ease-in-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-3 md:hover:scale-[1.02] hover:border-[#EF3C38]/20">
                  <div className="img-zoom relative h-[180px] sm:h-[220px] w-full overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000 ease-in-out md:group-hover:scale-[1.08]" />
                  </div>
                  <div className="p-[16px] sm:p-[20px] lg:p-[22px] flex-1 flex flex-col gap-[6px] sm:gap-[8px]">
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

      <section className="py-[48px] sm:py-[64px] lg:py-[110px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={200} direction="up" duration={900}>
            <h2
              className="text-white font-medium mb-[16px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2.8vw, 32px)" }}
            >
              Ready to Upgrade the Grid?
            </h2>
          </FadeIn>
          <FadeIn delay={400} direction="up" duration={900}>
            <p
              className="text-white/80 font-normal mx-auto mb-[30px] max-w-3xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.5vw, 18px)" }}
            >
              Get in touch with our utility experts to architect the perfect large-scale storage solution for your network.
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up" className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[12px] sm:gap-[14px]">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-medium transition-all duration-500 ease-in-out hover:bg-[#d63532] md:hover:scale-105 md:hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Contact Us
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] border border-white/35 text-white font-medium transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white md:hover:scale-105 md:hover:-translate-y-1 hover:shadow-lg"
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