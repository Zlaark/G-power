import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "G-Power Cube Pro C&C | Utility Solutions | GPower",
  description:
    "Large-scale containerized energy storage system for utility applications. 2.76 MWh capacity, 1.38 MW power, ≥85% efficiency.",
};

const specs = [
  { label: "Capacity", value: "2.76 MWh" },
  { label: "Power", value: "1.38 MW" },
  { label: "Voltage Range", value: "950–1312 VDC" },
  { label: "Efficiency", value: "≥85%" },
];

const applications = [
  { label: "Grid frequency regulation" },
  { label: "Peak shaving and valley filling" },
  { label: "Renewable energy integration" },
  { label: "Black start capability" },
];

const keyMerits = [
  { label: "High energy density and efficiency" },
  { label: "Modular and scalable design" },
  { label: "Advanced thermal management" },
  { label: "20+ year design life" },
];

const technicalParams = [
  { param: "Capacity", value: "2.76 MWh" },
  { param: "Power", value: "1.38 MW" },
  { param: "Voltage Range", value: "950–1312 VDC" },
  { param: "Efficiency", value: "≥85%" },
  { param: "Cell Chemistry", value: "LFP (Lithium Iron Phosphate)" },
  { param: "Cycle Life", value: "≥6000 cycles @ 80% DoD" },
  { param: "Operating Temperature", value: "-20°C to +55°C" },
  { param: "Communication", value: "CAN / RS485 / Ethernet" },
  { param: "Protection Class", value: "IP55" },
  { param: "Certifications", value: "IEC 62619, UL 9540, CE" },
];

export default function UtilityBattery1Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] md:h-[72vh] md:min-h-[540px] flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="G-Power Cube Pro C&C"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Pill badge — bordered, no fill */}
          <FadeIn delay={100} direction="up">
            <div
              className="flex items-center gap-[10px] border border-white/40 rounded-full px-[22px] py-[8px] mb-8 backdrop-blur-sm"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#EF3C38] shrink-0" />
              <span
                className="text-white font-medium uppercase tracking-[0.18em]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
              >
                Utility
              </span>
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={200} direction="up">
            <h1
              className="text-white font-bold leading-tight mb-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(40px, 6.5vw, 82px)",
              }}
            >
              G-Power Cube Pro C&amp;C
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={320} direction="up">
            <p
              className="text-white/80 max-w-[640px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(14px, 1.6vw, 19px)",
              }}
            >
              Large-scale containerized energy storage system for utility applications
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Product Specifications ────────────────────────────── */}
      <section className="py-[72px] lg:py-[100px] px-6 md:px-[60px] lg:px-[100px] bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[56px] items-start lg:min-h-[102vh]">

            {/* LEFT — product image with capacity badge */}
            <FadeIn delay={100} direction="up" className="w-full lg:w-[620px] xl:w-[700px] shrink-0 lg:sticky lg:top-24 self-start">
              <div className="relative w-full rounded-[20px] overflow-hidden" style={{ aspectRatio: "3/2.2" }}>
                  <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="G-Power Cube Pro C&C"
                  fill
                  className="object-cover"
                />
                {/* Red capacity badge — top-right overlay */}
                <span
                  className="absolute top-5 right-5 bg-[#EF3C38] text-white font-semibold rounded-full px-5 py-2 shadow-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)" }}
                >
                  2.76 MWh
                </span>
              </div>
            </FadeIn>

            {/* RIGHT — specs, applications, key merits */}
            <div className="flex-1 flex flex-col gap-[40px] lg:gap-[52px] lg:pt-2">

              {/* Product Specifications heading + 2×2 cards */}
              <FadeIn delay={160} direction="up">
                <h2
                  className="font-semibold text-[#121010] mb-[24px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.4vw, 40px)" }}
                >
                  Product Specifications
                </h2>
                <div className="grid grid-cols-2 gap-[10px]">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[10px] border border-[#E2E8F0] bg-white px-3 py-5 flex flex-col"
                    >
                      <span
                        className="text-[#64748B] mb-[4px] font-light"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
                      >
                        {s.label}
                      </span>
                      <span
                        className="text-[#121010] font-semibold"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.5vw, 19px)" }}
                      >
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Applications */}
              <FadeIn delay={240} direction="up">
                <h3
                  className="font-bold text-[#121010] mb-[16px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2vw, 22px)" }}
                >
                  Applications
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {applications.map((app) => (
                    <div key={app.label} className="flex items-center gap-3">
                      {/* Red circle-check icon */}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                        <circle cx="10" cy="10" r="9" stroke="#EF3C38" strokeWidth="1.6" />
                        <path d="M6.5 10.2l2.3 2.3 4.7-4.7" stroke="#EF3C38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

              {/* Key Merits — 2×2 bordered cards */}
              <FadeIn delay={320} direction="up">
                <h3
                  className="font-bold text-[#121010] mb-[16px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2vw, 22px)" }}
                >
                  Key Merits
                </h3>
                <div className="grid grid-cols-2 gap-[12px]">
                  {keyMerits.map((merit) => (
                    <div
                      key={merit.label}
                      className="flex items-center gap-3 rounded-[10px] border border-[#E2E8F0] px-4 py-3"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                        <circle cx="10" cy="10" r="9" stroke="#EF3C38" strokeWidth="1.6" />
                        <path d="M6.5 10.2l2.3 2.3 4.7-4.7" stroke="#EF3C38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* ── Technical Parameters ─────────────────────────────── */}
      <section className="py-[72px] lg:py-[100px] px-6 md:px-[60px] lg:px-[100px] bg-[#F9FAFB]">
        <div className="mx-auto max-w-[980px]">
          <FadeIn delay={100} direction="up">
            <h2
              className="font-normal text-[#121010] mb-3 text-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.4vw, 42px)" }}
            >
              Technical Parameters
            </h2>
            <p
              className="text-[#475569] mb-[54px] text-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.1vw, 18px)" }}
            >
              Detailed specifications for G-Power Cube Pro C&amp;C
            </p>
          </FadeIn>

          <FadeIn delay={180} direction="up">
            <div className="rounded-[20px] overflow-hidden bg-white shadow-[0_10px_24px_rgba(2,8,23,0.08)]">
              <table className="w-full">
                <tbody>
                  {technicalParams.slice(0, 4).map((row, index) => (
                    <tr
                      key={row.param}
                      className={index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-[#F1F5F9]"}
                    >
                      <td
                        className="px-6 py-3 border-r border-white/70 text-[#0F172A] font-normal w-1/2"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.4vw, 22px)" }}
                      >
                        {row.param}
                      </td>
                      <td
                        className="px-6 py-3 text-[#334155]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.4vw, 22px)" }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-5 md:px-7 py-5 md:py-6 bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] text-center">
                <h3
                  className="text-white font-normal mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2.1vw, 32px)" }}
                >
                  Need More Details?
                </h3>
                <p
                  className="text-white/90 mb-8"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.15vw, 18px)" }}
                >
                  View complete technical specifications and download the full datasheet
                </p>

                <Link
                  href="/product/utility/utility-battery-1/specs"
                  className="inline-flex items-center gap-2 bg-[#EF3C38] text-white px-7 py-4 rounded-[12px] font-normal hover:bg-[#ff4a46] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.1vw, 16px)" }}
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-[80px] lg:py-[112px] px-6 md:px-[60px] lg:px-[100px] overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Energy grid"
            fill
            className="object-cover opacity-20 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#EF3C38]/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-[800px] text-center">
          <FadeIn delay={100} direction="up">
            <h2
              className="text-white font-medium mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Interested in G-Power Cube Pro C&amp;C?
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
              className="inline-flex items-center justify-center bg-[#EF3C38] text-white px-10 py-4 rounded-[10px] font-medium hover:bg-white hover:text-[#EF3C38] transition-all hover:scale-105 hover:shadow-xl"
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
