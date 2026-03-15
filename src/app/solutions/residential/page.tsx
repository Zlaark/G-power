import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ShieldCheck, Zap, Clock3, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Solutions | GPower",
  description:
    "Residential energy storage systems for energy independence, backup power, and optimized home solar usage.",
};

const residentialBenefits = [
  {
    title: "Energy Independence",
    description: "Reduce reliance on the grid and control your energy consumption",
  },
  {
    title: "Cost Savings",
    description: "Lower electricity bills with time-of-use optimization",
  },
  {
    title: "Backup Power",
    description: "Keep your home running during grid outages",
  },
  {
    title: "Environmental Impact",
    description: "Reduce carbon footprint with clean energy storage",
  },
];

const productMerits = [
  {
    title: "Ultra-Safe Technology",
    description: "LFP battery chemistry with multi-layer safety protection systems",
    icon: ShieldCheck,
  },
  {
    title: "High Efficiency",
    description: "Up to 96% round-trip efficiency for maximum energy utilization",
    icon: Zap,
  },
  {
    title: "Long Service Life",
    description: "10+ year warranty with 6000+ cycle life at 80% depth of discharge",
    icon: Clock3,
  },
  {
    title: "Smart Management",
    description: "Intelligent BMS with remote monitoring and control capabilities",
    icon: SlidersHorizontal,
  },
];

const recommendedProducts = [
  {
    title: "BYD Battery-Box Premium HVS",
    tagline: "16.6 kWh",
    description: "Premium home energy storage system with high voltage design",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    specs: ["Capacity 16.6 kWh", "Power 5 kW", "Voltage Range 192-460 VDC", "Efficiency ≥96%"],
  },
  {
    title: "BYD Battery-Box Premium LVS",
    tagline: "12.8 kWh",
    description: "Low voltage home battery system for residential solar",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    specs: ["Capacity 12.8 kWh", "Power 3.5 kW", "Voltage Range 48 VDC", "Efficiency ≥95%"],
  },
];

const caseStudies = [
  {
    title: "Delhi Suburban Home",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "12.8 kWh",
    result: "65% reduction in grid dependency",
  },
  {
    title: "Mumbai Villa Project",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "16.6 kWh",
    result: "70% energy cost savings",
  },
  {
    title: "Bangalore Smart Home",
    image:
      "https://images.unsplash.com/photo-1765272087971-2cfac8bc6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "12.8 kWh",
    result: "100% backup during outages",
  },
];

export default function ResidentialSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[58vh] min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
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
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
            >
              Residential Energy Storage Solutions
            </p>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <h1
              className="text-white font-semibold leading-tight mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(34px, 6vw, 64px)" }}
            >
              Power Your Home,Sustainably
            </h1>
          </FadeIn>
          <FadeIn delay={340} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.8vw, 22px)" }}
            >
              Transform your home into an energy-independent powerhouse with our advanced
              residential battery storage solutions
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[36px] lg:mb-[44px]">
              <h2
                className="font-semibold text-[#121010] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Complete Home Energy Solution
              </h2>
              <p
                className="text-[#121010]/75 font-medium leading-[1.75]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.6vw, 18px)" }}
              >
                Our residential energy storage systems integrate seamlessly with solar panels,
                providing reliable backup power and maximizing your energy independence
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[24px] lg:gap-[44px]">
            <FadeIn delay={150} direction="up">
              <div className="relative w-full h-[300px] md:h-[420px] lg:h-[560px] rounded-[18px] overflow-hidden border border-[#121010]/10">
                <Image
                  src="https://images.unsplash.com/photo-1758957851828-5179f0e06985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Modern sustainable home"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={180} direction="up">
              <div className="max-w-[620px]">
                <h3
                  className="font-semibold text-[#111827] mb-5"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(30px, 3.1vw, 52px)" }}
                >
                  Why Choose Our Residential Solutions?
                </h3>
                <p
                  className="text-[#475569] font-medium leading-[1.75] mb-[24px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.45vw, 18px)" }}
                >
                  Our residential battery storage systems are designed to provide homeowners with
                  energy independence, cost savings, and peace of mind. Store excess solar
                  energy during the day and use it when you need it most.
                </p>

                <div className="space-y-[14px]">
                  {residentialBenefits.map((item, index) => (
                    <FadeIn delay={220 + index * 60} direction="up" key={item.title}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-[19px] h-[19px] mt-[4px] text-[#EF3C38]" strokeWidth={2.2} />
                        <div>
                          <h4
                            className="text-[#111827] font-bold leading-[1.35]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 2vw, 31px)" }}
                          >
                            {item.title}
                          </h4>
                          <p
                            className="text-[#475569] font-medium leading-[1.65]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.35vw, 30px)" }}
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
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[40px] lg:mb-[52px]">
              <h2
                className="font-semibold text-[#121010]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)" }}
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
                  <div className="h-full min-h-[205px] lg:min-h-[224px] rounded-[16px] border border-[#121010]/10 bg-white p-[22px] flex flex-col">
                    <Icon className="w-8 h-8 text-[#EF3C38] mb-[18px]" strokeWidth={2.2} />
                    <h3
                      className="text-[#121010] font-bold mb-[10px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(18px, 2vw, 22px)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#475569] font-medium leading-[1.6]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
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
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[18px] lg:mb-[22px]">
              <h2
                className="font-semibold text-[#121010]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Recommended Products
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={130} direction="up">
            <p
              className="text-[#121010]/75 font-medium text-center mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.6vw, 18px)" }}
            >
              Our premium residential battery systems designed for your home
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[26px]">
            {recommendedProducts.map((product, index) => (
              <FadeIn delay={180 + index * 90} direction="up" key={product.title}>
                <article className="rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full flex flex-col">
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[340px] w-full">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>
                  <div className="p-[22px] lg:p-[26px] flex flex-col flex-1">
                    <p
                      className="text-[#EF3C38] font-bold mb-[8px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.4vw, 16px)" }}
                    >
                      {product.tagline}
                    </p>
                    <h3
                      className="text-[#121010] font-bold mb-[10px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 2.8vw, 30px)" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-[#475569] font-medium leading-[1.65] mb-[14px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)" }}
                    >
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-x-[14px] gap-y-[8px] mb-[18px]">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="text-[#121010]/80 font-semibold"
                          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
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

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[16px] lg:mb-[22px]">
              <h2
                className="font-semibold text-[#121010]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Project Case Studies
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={130} direction="up">
            <p
              className="text-[#121010]/75 font-medium text-center mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.6vw, 18px)" }}
            >
              Real-world implementations of our residential energy storage solutions
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {caseStudies.map((item, index) => (
              <FadeIn delay={180 + index * 80} direction="up" key={item.title}>
                <article className="rounded-[16px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col">
                  <div className="relative h-[220px] w-full">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-[20px] lg:p-[22px] flex-1">
                    <h3
                      className="text-[#121010] font-bold mb-[10px]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 2.4vw, 24px)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#475569] font-semibold leading-[1.65]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    >
                      Capacity:{item.capacity}
                    </p>
                    <p
                      className="text-[#475569] font-semibold leading-[1.65]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    >
                      Result:{item.result}
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
          <FadeIn delay={120} direction="up">
            <h2
              className="text-white font-semibold mb-[16px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Ready to Power Your Home?
            </h2>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <p
              className="text-white/80 font-medium mx-auto mb-[30px] max-w-3xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}
            >
              Get in touch with our experts to design the perfect residential energy storage
              solution for your needs
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up" className="flex flex-wrap items-center justify-center gap-[12px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px" }}
            >
              Contact Us
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center px-[28px] py-[13px] rounded-[8px] border border-white/35 text-white font-semibold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px" }}
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