import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Technical Specifications | BYD Cube Pro C&C | GPower",
  description:
    "Complete technical specifications for BYD Cube Pro C&C utility battery system.",
};

const generalParameters = [
  { key: "Rated Energy", value: "2.76 MWh" },
  { key: "Rated Power", value: "1.38 MW" },
  { key: "Operating Voltage Range", value: "950-1312 VDC" },
  { key: "Round Trip Efficiency", value: "≥85%" },
  { key: "Operating Temperature", value: "-30°C to +55°C" },
];

const physicalSpecifications = [
  { key: "Dimensions (L×W×H)", value: "6058×2438×2896 mm" },
  { key: "Weight", value: "~30,000 kg" },
  { key: "Protection Rating", value: "IP54" },
  { key: "Cooling Method", value: "Liquid cooling" },
];

const terms = [
  "Specifications subject to change without notice",
  "Performance data based on standard test conditions",
  "Installation must be performed by certified professionals",
  "Warranty terms apply as per product documentation",
  "For latest specifications, please contact GPower",
];

const keyFeatures = [
  "High energy density and efficiency",
  "Modular and scalable design",
  "Advanced thermal management",
  "20+ year design life",
  "Maximum Capacity 2.76 MWh",
];

export default function UtilityBattery1SpecsPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      <Navbar />

      <section className="px-6 md:px-[60px] lg:px-[100px] py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-[980px]">
          <FadeIn delay={80} direction="up">
            <h1
              className="text-[#0F172A] text-center font-normal mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 4.2vw, 62px)" }}
            >
              Technical Specifications
            </h1>
            <p
              className="text-[#475569] text-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 22px)" }}
            >
              BYD Cube Pro C&amp;C - Complete Technical Documentation
            </p>
          </FadeIn>

          <FadeIn delay={140} direction="up">
            <div className="mt-12 rounded-[16px] overflow-hidden bg-white shadow-[0_14px_26px_rgba(2,8,23,0.12)] p-6 md:p-8">
              <h2
                className="text-[#0F172A] font-semibold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 2.6vw, 34px)" }}
              >
                BYD Cube Pro C&amp;C
              </h2>
              <p
                className="text-[#475569] mb-6"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
              >
                Large-scale containerized energy storage system for utility applications
              </p>

              <div className="relative w-full rounded-[14px] overflow-hidden mb-8" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="BYD Cube Pro C&C"
                  fill
                  className="object-cover"
                />
              </div>

              <h3
                className="text-[#0F172A] font-semibold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 28px)" }}
              >
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {keyFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF3C38] mt-2 shrink-0" />
                    <span
                      className="text-[#334155]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 17px)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0F172A] font-semibold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 28px)" }}
              >
                Detailed Technical Parameters
              </h3>

              <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] mb-7">
                <div className="px-5 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <h4
                    className="text-[#0F172A] font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.4vw, 22px)" }}
                  >
                    General Parameters
                  </h4>
                </div>
                <table className="w-full">
                  <tbody>
                    {generalParameters.map((row, index) => (
                      <tr key={row.key} className={index % 2 === 0 ? "bg-[#EEF0F2]" : "bg-[#F7F7F8]"}>
                        <td
                          className="px-5 py-4 text-[#0F172A] font-semibold border-r border-[#E2E8F0] w-1/2"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 18px)" }}
                        >
                          {row.key}
                        </td>
                        <td
                          className="px-5 py-4 text-[#334155]"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 18px)" }}
                        >
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] mb-10">
                <div className="px-5 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <h4
                    className="text-[#0F172A] font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.4vw, 22px)" }}
                  >
                    Physical Specifications
                  </h4>
                </div>
                <table className="w-full">
                  <tbody>
                    {physicalSpecifications.map((row, index) => (
                      <tr key={row.key} className={index % 2 === 0 ? "bg-[#EEF0F2]" : "bg-[#F7F7F8]"}>
                        <td
                          className="px-5 py-4 text-[#0F172A] font-semibold border-r border-[#E2E8F0] w-1/2"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 18px)" }}
                        >
                          {row.key}
                        </td>
                        <td
                          className="px-5 py-4 text-[#334155]"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 18px)" }}
                        >
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3
                className="text-[#0F172A] font-semibold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 28px)" }}
              >
                Terms &amp; Conditions
              </h3>
              <div className="flex flex-col gap-3 mb-10">
                {terms.map((term) => (
                  <div key={term} className="flex items-start gap-2">
                    <span className="text-[#EF3C38] leading-none mt-[2px]">•</span>
                    <span
                      className="text-[#334155]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 17px)" }}
                    >
                      {term}
                    </span>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0F172A] font-semibold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 28px)" }}
              >
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#EF3C38]" />
                  <span
                    className="text-[#0F172A]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 15px)" }}
                  >
                    info@gpower.com
                  </span>
                </div>
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#EF3C38]" />
                  <span
                    className="text-[#0F172A]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 15px)" }}
                  >
                    +91 123 456 7890
                  </span>
                </div>
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#EF3C38]" />
                  <span
                    className="text-[#0F172A]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 15px)" }}
                  >
                    India
                  </span>
                </div>
              </div>

              <div className="rounded-[12px] bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] px-5 md:px-8 py-8 text-center">
                <h3
                  className="text-white font-normal mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 2.3vw, 36px)" }}
                >
                  Download Complete Datasheet
                </h3>
                <p
                  className="text-white/90 mb-7"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  Get the complete 2-page technical datasheet for BYD Cube Pro C&amp;C in PDF format with all specifications, features, and contact information.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-[#EF3C38] text-white px-7 py-4 rounded-[12px] font-normal hover:bg-[#ff4a46] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 16px)" }}
                  >
                    <Download className="w-5 h-5" />
                    Download PDF Datasheet
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-[#0F172A] px-7 py-4 rounded-[12px] font-normal hover:bg-[#F1F5F9] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 16px)" }}
                  >
                    Request More Information
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={220} direction="up">
            <div className="mt-8 flex justify-center">
              <Link
                href="/product/utility/utility-battery-1"
                className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#EF3C38] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 16px)" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Product
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}