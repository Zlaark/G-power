import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "BYD Battery-Box Premium LVS | Residential Solutions | GPower",
  description:
    "Low voltage home battery system for residential solar. 12.8 kWh capacity, 3.5 kW power, and ≥95% efficiency.",
};

const specs = [
  { label: "Capacity", value: "12.8 kWh" },
  { label: "Power", value: "3.5 kW" },
  { label: "Voltage Range", value: "48 VDC" },
  { label: "Efficiency", value: "≥95%" },
];

const applications = [
  { label: "Home solar storage" },
  { label: "Emergency backup" },
  { label: "Energy independence" },
  { label: "Grid services" },
];

const keyMerits = [
  { label: "Safe LFP technology" },
  { label: "Modular expansion" },
  { label: "Smart energy management" },
  { label: "Long service life" },
];

const technicalParams = [
  { param: "Capacity", value: "12.8 kWh" },
  { param: "Power", value: "3.5 kW" },
  { param: "Voltage Range", value: "48 VDC" },
  { param: "Efficiency", value: "≥95%" },
  { param: "Battery Chemistry", value: "Lithium Iron Phosphate (LFP)" },
  { param: "Configuration", value: "Low-voltage modular battery system" },
  { param: "Operating Temperature", value: "-10°C to +50°C" },
  { param: "Protection Class", value: "IP55" },
  { param: "Communication", value: "CAN / RS485" },
  { param: "Service Life", value: "Long-life residential operation" },
];

export default function ResidentialBattery2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[60vh] min-h-[420px] md:h-[72vh] md:min-h-[540px] flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="BYD Battery-Box Premium LVS"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <FadeIn delay={100} direction="up">
            <div className="flex items-center gap-[10px] border border-white/40 rounded-full px-[22px] py-[8px] mb-8 backdrop-blur-sm">
              <span className="w-[7px] h-[7px] rounded-full bg-[#0A5191] shrink-0" />
              <span
                className="text-white font-medium uppercase tracking-[0.18em]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
              >
                Residential
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <h1
              className="text-white font-medium leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 5.6vw, 64px)" }}
            >
              BYD Battery-Box Premium LVS
            </h1>
          </FadeIn>

          <FadeIn delay={320} direction="up">
            <p
              className="text-white/80 max-w-[700px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)" }}
            >
              Low voltage home battery system for residential solar
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[72px] lg:py-[100px] px-6 md:px-[60px] lg:px-[100px] bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[56px] items-start lg:min-h-[102vh]">
            <div className="w-full lg:w-[620px] xl:w-[700px] shrink-0 lg:sticky lg:top-24 self-start">
<FadeIn delay={100} direction="up" className="w-full">
              <div className="relative w-full rounded-[20px] overflow-hidden border border-[#0A5191]/45 card-soft-hover" style={{ aspectRatio: "3/2.2" }}>
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="BYD Battery-Box Premium LVS"
                  fill
                  className="object-cover"
                />
                <span
                  className="absolute top-5 right-5 bg-[#0A5191] text-white font-semibold rounded-full px-5 py-2 shadow-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
                >
                  12.8 kWh
                </span>
              </div>
            </FadeIn>
</div>

            <div className="flex-1 flex flex-col gap-[40px] lg:gap-[52px] lg:pt-2">
              <FadeIn delay={160} direction="up">
                <h2
                  className="font-medium text-[#121010] mb-[24px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(25px, 3vw, 34px)" }}
                >
                  Product Specifications
                </h2>
                <div className="grid grid-cols-2 gap-[10px]">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-[10px] border border-[#E2E8F0] bg-white px-3 py-5 flex flex-col card-soft-hover"
                    >
                      <span
                        className="text-[#64748B] mb-[4px] font-light"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
                      >
                        {spec.label}
                      </span>
                      <span
                        className="text-[#121010] font-semibold"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 19px)" }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={240} direction="up">
                <h3
                  className="font-medium text-[#121010] mb-[16px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(17px, 1.8vw, 20px)" }}
                >
                  Applications
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {applications.map((app) => (
                    <div key={app.label} className="flex items-center gap-3 point-hover">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                        <circle cx="10" cy="10" r="9" stroke="#0A5191" strokeWidth="1.6" />
                        <path d="M6.5 10.2l2.3 2.3 4.7-4.7" stroke="#0A5191" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span
                        className="text-[#334155]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)" }}
                      >
                        {app.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={320} direction="up">
                <h3
                  className="font-medium text-[#121010] mb-[16px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(17px, 1.8vw, 20px)" }}
                >
                  Key Merits
                </h3>
                <div className="grid grid-cols-2 gap-[12px]">
                  {keyMerits.map((merit) => (
                    <div
                      key={merit.label}
                      className="flex items-center gap-3 rounded-[10px] border border-[#E2E8F0] px-4 py-3 card-soft-hover point-hover"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                        <circle cx="10" cy="10" r="9" stroke="#0A5191" strokeWidth="1.6" />
                        <path d="M6.5 10.2l2.3 2.3 4.7-4.7" stroke="#0A5191" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span
                        className="text-[#334155]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.05vw, 14px)" }}
                      >
                        {merit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[72px] lg:py-[100px] px-6 md:px-[60px] lg:px-[100px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[920px]">
          <FadeIn delay={100} direction="up">
            <h2
              className="font-normal text-[#121010] mb-3 text-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.3vw, 40px)" }}
            >
              Technical Parameters
            </h2>
            <p
              className="text-[#475569] mb-[54px] text-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.05vw, 17px)" }}
            >
              Detailed specifications for BYD Battery-Box Premium LVS
            </p>
          </FadeIn>

          <FadeIn delay={180} direction="up">
            <div className="rounded-[20px] overflow-hidden bg-white shadow-[0_12px_28px_rgba(2,8,23,0.10)] section-soft-hover">
              <table className="w-full">
                <tbody>
                  {technicalParams.slice(0, 4).map((row, index) => (
                    <tr key={row.param} className={index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-[#F1F5F9]"}>
                      <td
                        className="px-7 py-4 border-r border-white/70 text-[#0F172A] font-normal w-1/2"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.35vw, 20px)" }}
                      >
                        {row.param}
                      </td>
                      <td
                        className="px-7 py-4 text-[#334155]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.35vw, 20px)" }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-6 md:px-8 py-6 md:py-7 bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] text-center">
                <h3
                  className="text-white font-normal mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 30px)" }}
                >
                  Need More Details?
                </h3>
                <p
                  className="text-white/90 mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.05vw, 17px)" }}
                >
                  View complete technical specifications and download the full datasheet
                </p>

                <Link
                  href="/product/residential/res-battery-2/specs"
                  className="btn-sweep-blue btn-float-hover inline-flex items-center gap-2 bg-[#0A5191] text-white px-7 py-4 rounded-[12px] font-normal hover:bg-[#083D6D] transition-colors shadow-[0_8px_18px_rgba(10, 81, 145,0.22)]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 16px)" }}
                >
                  <Download className="w-5 h-5" />
                  View More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-[80px] lg:py-[112px] px-6 md:px-[60px] lg:px-[100px] overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Residential energy system"
            fill
            className="object-cover opacity-20 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#0A5191]/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-[800px] text-center">
          <FadeIn delay={100} direction="up">
            <h2
              className="text-white font-normal mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 3.4vw, 40px)" }}
            >
              Interested in BYD Battery-Box Premium LVS?
            </h2>
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <p
              className="text-white/70 mb-10"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)" }}
            >
              Contact our sales team for pricing, availability, and customization options
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up">
            <Link
              href="/contact"
              className="btn-sweep-blue btn-float-hover inline-flex items-center justify-center bg-[#0A5191] text-white px-10 py-4 rounded-[10px] font-medium hover:bg-white hover:text-[#0A5191] transition-all hover:scale-105 hover:shadow-xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.4vw, 17px)" }}
            >
              Request a Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}