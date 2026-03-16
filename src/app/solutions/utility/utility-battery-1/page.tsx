import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "BYD Cube Pro C&C | Utility Solutions | GPower",
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
            alt="BYD Cube Pro C&C"
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
              BYD Cube Pro C&amp;C
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
          <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[72px] items-start">

            {/* LEFT — product image with capacity badge */}
            <FadeIn delay={100} direction="up" className="w-full lg:w-[620px] xl:w-[700px] shrink-0">
              <div className="relative w-full rounded-[20px] overflow-hidden" style={{ aspectRatio: "3/2.2" }}>
                  <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="BYD Cube Pro C&C"
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
            <div className="flex-1 flex flex-col gap-[40px]">

              {/* Product Specifications heading + 2×2 cards */}
              <FadeIn delay={160} direction="up">
                <h2
                  className="font-bold text-[#121010] mb-[24px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}
                >
                  Product Specifications
                </h2>
                <div className="grid grid-cols-2 gap-[10px]">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[10px] border border-[#E2E8F0] bg-white px-3 py-3 flex flex-col"
                    >
                      <span
                        className="text-[#64748B] mb-[4px]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
                      >
                        {s.label}
                      </span>
                      <span
                        className="text-[#121010] font-bold"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.4vw, 17px)" }}
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
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
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
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 1.1vw, 14px)" }}
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
        <div className="mx-auto max-w-[1400px]">
          <FadeIn delay={100} direction="up">
            <h2
              className="font-medium text-[#121010] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 40px)" }}
            >
              Technical Parameters
            </h2>
            <p
              className="text-[#475569] mb-[44px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.3vw, 16px)" }}
            >
              Detailed specifications for BYD Cube Pro C&amp;C
            </p>
          </FadeIn>

          <FadeIn delay={180} direction="up">
            <div className="rounded-[18px] border border-[#121010]/10 overflow-hidden bg-white shadow-sm">
              <table className="w-full">
                <tbody>
                  {technicalParams.map((row, index) => (
                    <tr
                      key={row.param}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}
                    >
                      <td
                        className="px-6 py-4 border-b border-[#121010]/8 text-[#121010] font-medium w-1/2"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                      >
                        {row.param}
                      </td>
                      <td
                        className="px-6 py-4 border-b border-[#121010]/8 text-[#475569]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Need More Details callout */}
          <FadeIn delay={260} direction="up">
            <div className="mt-[40px] rounded-[18px] border border-[#EF3C38]/20 bg-[#EF3C38]/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3
                  className="text-[#121010] font-medium mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(17px, 1.8vw, 21px)" }}
                >
                  Need More Details?
                </h3>
                <p
                  className="text-[#475569]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)" }}
                >
                  View complete technical specifications and download the full datasheet
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 shrink-0 bg-[#121010] text-white px-6 py-3 rounded-[10px] hover:bg-[#EF3C38] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
              >
                <Download className="w-4 h-4" />
                View More &amp; Download
              </Link>
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
              Interested in BYD Cube Pro C&amp;C?
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
