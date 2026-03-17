import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Technical Parameters | BYD Battery-Box Commercial | GPower",
  description:
    "Detailed technical specifications for BYD Battery-Box Commercial.",
};

const technicalParams = [
  { param: "Capacity", value: "215 kWh" },
  { param: "Power", value: "100 kW" },
  { param: "Voltage Range", value: "672-907 VDC" },
  { param: "Efficiency", value: "≥92%" },
];

export default function CIBattery1SpecsPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      <Navbar />

      <section className="px-6 md:px-[60px] lg:px-[100px] py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-[980px]">
          <FadeIn delay={100} direction="up">
            <h1
              className="text-[#0F172A] text-center font-normal mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 4.2vw, 62px)" }}
            >
              Technical Parameters
            </h1>
            <p
              className="text-[#475569] text-center mb-[50px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 22px)" }}
            >
              Detailed specifications for BYD Battery-Box Commercial
            </p>
          </FadeIn>

          <FadeIn delay={180} direction="up">
            <div className="rounded-[16px] overflow-hidden bg-white shadow-[0_14px_26px_rgba(2,8,23,0.12)]">
              <table className="w-full">
                <tbody>
                  {technicalParams.map((row, index) => (
                    <tr
                      key={row.param}
                      className={index % 2 === 0 ? "bg-[#EEF0F2]" : "bg-[#F7F7F8]"}
                    >
                      <td
                        className="px-6 md:px-8 py-4 text-[#0F172A] font-semibold w-1/2 border-r border-[#E2E8F0]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.5vw, 24px)" }}
                      >
                        {row.param}
                      </td>
                      <td
                        className="px-6 md:px-8 py-4 text-[#334155]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.5vw, 24px)" }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-5 md:px-8 py-8 bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] text-center">
                <h2
                  className="text-white font-normal mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 2.3vw, 36px)" }}
                >
                  Need More Details?
                </h2>
                <p
                  className="text-white/90 mb-7"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  View complete technical specifications and download the full datasheet
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#EF3C38] text-white px-7 py-4 rounded-[12px] font-normal hover:bg-[#ff4a46] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 16px)" }}
                >
                  <Download className="w-5 h-5" />
                  View More &amp; Download
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
