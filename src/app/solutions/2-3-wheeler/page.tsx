import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ShieldCheck, Zap, Activity, Cpu, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2 & 3 Wheeler Applications | GPower",
  description:
    "Advanced energy storage and power solutions for 2 and 3 wheeler electric vehicles, built for durability and range.",
};

const evBenefits = [
  {
    title: "Extended Range",
    description: "Maximize your travel distance with lightweight, high-capacity battery packs",
  },
  {
    title: "Fast Charging",
    description: "Quick turnaround times optimized for both commercial fleet and personal EV use",
  },
  {
    title: "Thermal Stability",
    description: "Robust performance across diverse and extreme temperature conditions",
  },
  {
    title: "Long Cycle Life",
    description: "Built to outlast the vehicle life with thousands of charge and discharge cycles",
  },
];

const productMerits = [
  {
    title: "Ultra-Safe Technology",
    description: "LFP and NMC chemistry designed specifically for intense mobility applications",
    icon: ShieldCheck,
  },
  {
    title: "High Efficiency",
    description: "Optimized power delivery for instant acceleration and regenerative braking support",
    icon: Zap,
  },
  {
    title: "Vibration Resistant",
    description: "Ruggedized casings engineered to withstand harsh road conditions and impacts",
    icon: Activity,
  },
  {
    title: "Smart BMS",
    description: "Advanced cell balancing, tracking, and diagnostics integrated via IoT",
    icon: Cpu,
  },
];

const recommendedProducts = [
  {
    title: "EV Pro Series 72V",
    tagline: "3 kWh",
    description: "High-performance swappable battery pack tailored for electric scooters and motorcycles",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solutions/2-3-wheeler/ev-pro-72v",
    specs: [
      { label: "Capacity", value: "3.2 kWh" },
      { label: "Voltage", value: "72 VDC" },
      { label: "Max Discharge", value: "60 A" },
      { label: "Weight", value: "18.5 kg" },
    ],
  },
  {
    title: "EV Cargo Series 48V",
    tagline: "4.8 kWh",
    description: "Durable and long-lasting storage for commercial e-rickshaws and delivery trikes",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solutions/2-3-wheeler/ev-cargo-48v",
    specs: [
      { label: "Capacity", value: "4.8 kWh" },
      { label: "Voltage", value: "48 VDC" },
      { label: "Max Discharge", value: "100 A" },
      { label: "Weight", value: "32.0 kg" },
    ],
  },
];

const caseStudies = [
  {
    title: "Electric Scooter Fleet in Delhi",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "3.2 kWh Swappable",
    result: "40% increase in daily vehicle uptime",
  },
  {
    title: "E-Rickshaw Deployment in Mumbai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "4.8 kWh Fixed",
    result: "2x longer lifespan vs Lead-Acid",
  },
  {
    title: "Delivery Network in Bangalore",
    image:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    capacity: "Modular Packs",
    result: "Significantly reduced total operating costs",
  },
];

export default function TwoThreeWheelerSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[52vh] min-h-[360px] sm:min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1558981420-c532902e58b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Electric Two and Three Wheeler Background"
            fill
            priority
            className="object-cover opacity-50 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/65 to-[#121010]/35" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={120} direction="up">
            <p
              className="text-white/85 font-normal tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
            >
              2 & 3 Wheeler Energy Storage
            </p>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <h1
              className="text-white font-medium leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              Power Your EV, Reliably
            </h1>
          </FadeIn>
          <FadeIn delay={340} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.5vw, 18px)" }}
            >
              Advanced energy storage and power solutions tailored specifically for the rigorous demands of electric two and three-wheelers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[56px] lg:mb-[72px]">
              <h2
                className="font-medium text-[#121010] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Engineered for Mobility
              </h2>
              <p
                className="text-[#121010]/75 font-normal leading-[1.75]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
              >
                Our EV battery systems are natively engineered to fit compact spaces while ensuring maximum power delivery and range for urban mobility.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[88px]">
            <FadeIn delay={150} direction="up">
              <div className="relative w-full h-[300px] md:h-[420px] lg:h-[560px] rounded-[18px] overflow-hidden border border-[#121010]/10">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Electric vehicle charging"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={180} direction="up">
              <div className="w-full">
                <h3
                  className="font-normal text-[#111827] mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.8vw, 28px)" }}
                >
                  Why Choose Our EV Batteries?
                </h3>
                <p
                  className="text-[#475569] font-normal leading-[1.75] mb-[24px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.35vw, 16px)" }}
                >
                  Whether it's a personal e-scooter or a commercial e-rickshaw fleet, our power packs guarantee consistent performance, drastically reduced downtime, and maximum safety on the road.
                </p>

                <div className="space-y-[22px]">
                  {evBenefits.map((item, index) => (
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
          <FadeIn delay={100} direction="up">
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
                  <div className="card-shimmer h-full min-h-[250px] lg:min-h-[290px] rounded-[16px] border border-[#121010]/10 bg-white p-[22px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <Icon className="w-8 h-8 text-[#EF3C38] mb-[18px]" strokeWidth={2.2} />
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
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[18px] lg:mb-[22px]">
              <h2
                className="font-medium text-[#121010]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Recommended Products
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={130} direction="up">
            <p
              className="text-[#121010]/75 font-normal text-center mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
            >
              Our premium swappable and fixed battery packs for 2 and 3 wheelers
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {recommendedProducts.map((product, index) => (
              <FadeIn delay={180 + index * 90} direction="up" key={product.title}>
                <article className="card-shimmer card-border-glow rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full min-h-0 lg:min-h-[610px] flex flex-col">
                  <div className="img-zoom relative h-[240px] sm:h-[290px] lg:h-[340px] w-full">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
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
                      className="mt-auto inline-flex items-center gap-2 w-fit text-[#EF3C38] font-medium hover:text-[#d63532] hover:gap-4 transition-all duration-200"
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
          <FadeIn delay={100} direction="up">
            <div className="text-center max-w-4xl mx-auto mb-[16px] lg:mb-[22px]">
              <h2
                className="font-medium text-[#121010]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Project Case Studies
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={130} direction="up">
            <p
              className="text-[#121010]/75 font-normal text-center mb-[36px] lg:mb-[48px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
            >
              Real-world implementations of our EV battery solutions within fleets
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {caseStudies.map((item, index) => (
              <FadeIn delay={180 + index * 80} direction="up" key={item.title}>
                <article className="card-shimmer card-border-glow rounded-[16px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col">
                  <div className="img-zoom relative h-[220px] w-full">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
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
          <FadeIn delay={120} direction="up">
            <h2
              className="text-white font-medium mb-[16px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2.8vw, 32px)" }}
            >
              Ready to Electrify Your Ride?
            </h2>
          </FadeIn>
          <FadeIn delay={220} direction="up">
            <p
              className="text-white/80 font-normal mx-auto mb-[30px] max-w-3xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.5vw, 18px)" }}
            >
              Get in touch with our experts to find the perfect EV battery system for your two or three-wheeler needs.
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up" className="flex flex-wrap items-center justify-center gap-[12px]">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-medium hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Contact Us
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center w-full sm:w-auto px-[28px] py-[13px] rounded-[8px] border border-white/35 text-white font-medium hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
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
