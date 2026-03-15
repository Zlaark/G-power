import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Activity, ShieldCheck, Zap, Gauge, ArrowRight, TrendingUp, Clock, Globe2 } from "lucide-react";
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

const howItWorksSteps = [
  {
    step: "01",
    title: "Site Assessment",
    description: "Our engineers evaluate grid connection points, load profiles, and renewable generation patterns to design the optimal system.",
  },
  {
    step: "02",
    title: "System Design",
    description: "We architect the right capacity, power rating, and inverter configuration to match your grid's specific requirements.",
  },
  {
    step: "03",
    title: "Deployment & Integration",
    description: "Factory-tested containerized units are installed and integrated with SCADA, EMS, and existing grid infrastructure.",
  },
  {
    step: "04",
    title: "Monitoring & O&M",
    description: "24/7 remote monitoring with predictive maintenance ensures maximum uptime and optimal performance over the system's lifetime.",
  },
];

const scaleStats = [
  { value: "500+", label: "MW Deployed", icon: TrendingUp },
  { value: "99.8%", label: "System Uptime", icon: Clock },
  { value: "20+", label: "Countries Served", icon: Globe2 },
  { value: "20yr", label: "Design Lifetime", icon: Activity },
];

export default function UtilitySolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[52vh] min-h-[360px] sm:min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
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
                className="font-light text-[#121010] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
            >
             Recommended Products
            </p>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <h1
              className="text-white font-normal leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5.2vw, 58px)" }}
            >
              Grid-Scale Energy Storage
            </h1>
          </FadeIn>
          <FadeIn delay={340} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-normal"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.6vw, 20px)" }}
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
                className="font-medium text-[#121010] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(25px, 3.5vw, 42px)" }}
              >
                Complete Utility-Scale Solution
              </h2>
              <p
                className="text-[#121010]/75 font-normal leading-[1.75]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.5vw, 17px)" }}
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
                  <div className="card-shimmer card-border-glow card-icon-anim h-full min-h-[205px] lg:min-h-[224px] rounded-[16px] border border-[#121010]/10 bg-[#F9FAFB] p-[22px] flex flex-col">
                    <Icon className="icon-pop w-8 h-8 text-[#EF3C38] mb-[18px]" strokeWidth={2.2} />
                    <h3
                      className="text-[#121010] font-medium mb-[10px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.8vw, 21px)" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[#475569] font-normal leading-[1.6]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.15vw, 15px)" }}
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
                className="font-medium text-[#121010]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(25px, 3.5vw, 42px)" }}
              >
                Recommended Products
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[26px]">
            {products.map((product, index) => (
              <FadeIn delay={180 + index * 90} direction="up" key={product.title}>
                <article className="card-shimmer card-border-glow rounded-[18px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col">
                  <div className="img-overlay relative h-[250px] sm:h-[300px] lg:h-[340px] w-full">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>
                  <div className="p-[22px] lg:p-[26px] flex flex-col flex-1">
                    <p
                      className="text-[#EF3C38] font-normal mb-[8px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.25vw, 15px)" }}
                    >
                       {product.capacity}
                    </p>
                    <h3
                      className="text-[#121010] font-normal mb-[10px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2.4vw, 27px)" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-[#475569] font-normal leading-[1.65] mb-[20px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                    >
                      {product.description}
                    </p>
                    <Link
                      href={product.href}
                      className="btn-glow mt-auto inline-flex items-center justify-center w-fit px-[22px] py-[12px] rounded-[8px] bg-[#EF3C38] text-white font-normal hover:bg-[#d63532] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
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

      {/* ── Section 3: How It Works ─────────────────────────── */}
      <section className="py-[64px] lg:py-[96px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-center">
          {/* Left: image */}
          <FadeIn delay={100} direction="up">
            <div className="img-overlay relative w-full h-[360px] md:h-[480px] lg:h-[560px] rounded-[20px] overflow-hidden border border-[#121010]/10 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="Utility grid infrastructure at sunset"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121010]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-white font-normal leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)" }}
                >
                  End-to-end project delivery from assessment through long-term O&M.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: steps */}
          <div className="flex flex-col gap-[8px]">
            <FadeIn delay={80} direction="up">
              <p
                className="text-[#EF3C38] font-medium tracking-[0.14em] uppercase mb-3"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
              >
                Our Process
              </p>
              <h2
                className="text-[#121010] font-medium mb-[32px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 3.2vw, 40px)" }}
              >
                How We Deploy Utility Storage
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[28px]">
              {howItWorksSteps.map((item, index) => (
                <FadeIn delay={160 + index * 70} direction="up" key={item.step}>
                  <div className="step-point flex items-start gap-[16px] group/step">
                    <span
                      className="step-badge shrink-0 w-8 h-8 rounded-full bg-[#EF3C38] text-white flex items-center justify-center font-medium mt-[2px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h3
                        className="step-title text-[#121010] font-medium mb-[4px]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#475569] font-normal leading-[1.65]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.05vw, 14px)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Proven at Scale ───────────────────────── */}
      <section className="relative py-[72px] lg:py-[108px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] overflow-hidden bg-[#0D0D0D]">
        {/* Background image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1548337138-e87d889cc369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Large-scale solar and storage farm"
            fill
            className="object-cover opacity-25 brightness-75 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#EF3C38]/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <FadeIn delay={80} direction="up">
            <div className="text-center mb-[52px] lg:mb-[64px]">
              <p
                className="text-[#EF3C38] font-medium tracking-[0.14em] uppercase mb-3"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
              >
                Track Record
              </p>
              <h2
                className="text-white font-medium"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 3.4vw, 44px)" }}
              >
                Proven at Scale, Globally
              </h2>
            </div>
          </FadeIn>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px] sm:gap-[18px] lg:gap-[22px] mb-[56px] lg:mb-[72px]">
            {scaleStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FadeIn delay={160 + index * 70} direction="up" key={stat.label}>
                  <div className="card-border-glow rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-sm p-[22px] lg:p-[26px] flex flex-col items-center text-center">
                    <Icon className="icon-pop w-7 h-7 text-[#EF3C38] mb-[12px]" strokeWidth={1.8} />
                    <p
                      className="stat-glow text-white font-medium leading-none mb-[8px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-white/60 font-normal"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.05vw, 14px)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Wide image strip */}
          <FadeIn delay={200} direction="up">
            <div className="img-overlay relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-[20px] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Grid-scale battery storage installation"
                fill
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-transparent to-transparent flex items-center">
                <div className="px-[18px] sm:px-[28px] lg:px-[48px] max-w-xl">
                  <p
                    className="text-white font-medium mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2.2vw, 28px)" }}
                  >
                    Ready to join the grid-scale revolution?
                  </p>
                  <Link
                    href="/contact"
                    className="btn-glow inline-flex items-center gap-2 px-[18px] sm:px-[20px] py-[10px] rounded-[8px] bg-[#EF3C38] text-white font-normal hover:bg-[#d63532] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
                  >
                    Talk to an Expert <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up">
            <h2
              className="text-white font-normal mb-[16px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 2.9vw, 38px)" }}
            >
              Ready to Deploy Utility-Scale Storage?
            </h2>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <p
              className="text-white/80 font-normal mx-auto mb-[30px] max-w-3xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)" }}
            >
              Contact our experts to design the perfect utility-scale energy storage solution
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-normal hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
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