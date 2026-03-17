import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { CIBattery1SpecsCoverSection } from "@/sections/CIBattery1SpecsCoverSection";
import { CIBattery1SpecsSheetSection } from "@/sections/CIBattery1SpecsSheetSection";

export const metadata: Metadata = {
  title: "Technical Specifications | BYD Battery-Box Commercial | GPower",
  description:
    "Complete technical specifications for BYD Battery-Box Commercial energy storage system.",
};

export default function CIBattery1SpecsPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      <Navbar />

      <section className="px-6 md:px-[60px] lg:px-[100px] py-[70px] lg:py-[100px] animate-badge-pop">
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
              BYD Battery-Box Commercial - Complete Technical Documentation
            </p>
          </FadeIn>

          <FadeIn delay={140} direction="up">
            <div className="mt-12 flex flex-col gap-7">
              <CIBattery1SpecsCoverSection />
              <CIBattery1SpecsSheetSection />

              <div className="rounded-[14px] overflow-hidden shadow-[0_10px_22px_rgba(2,8,23,0.1)]">
                <div className="bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] px-5 md:px-8 py-8 text-center">
                  <h3
                    className="text-white font-normal mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 2.3vw, 36px)" }}
                  >
                    Download Complete Datasheet
                  </h3>
                  <Link href="/docs/ci-battery-1-datasheet.pdf" passHref>
                    <button className="btn-sweep btn-glow btn-float-hover mt-4 text-white font-semibold text-lg px-6 py-3 rounded-[8px] shadow-md transition-all duration-300">
                      <Download className="inline-block mr-2" /> View & Download
                    </button>
                  </Link>
                  <p
                    className="text-white/90 mb-7"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
                  >
                    Get the complete 2-page technical datasheet for BYD Battery-Box Commercial in PDF format with all specifications, features, and contact information.
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
            </div>
          </FadeIn>

          <FadeIn delay={220} direction="up">
            <div className="mt-8 flex justify-center">
              <Link
                href="/product/commercial-industrial/ci-battery-1"
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
