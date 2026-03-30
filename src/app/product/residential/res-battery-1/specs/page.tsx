import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { DownloadPdfButton } from "@/components/DownloadPdfButton";
import { ResidentialBattery1SpecsCoverSection } from "@/sections/ResidentialBattery1SpecsCoverSection";
import { ResidentialBattery1SpecsSheetSection } from "@/sections/ResidentialBattery1SpecsSheetSection";

export const metadata: Metadata = {
  title: "Technical Specifications | BYD Battery-Box Premium HVS | GPower",
  description:
    "Complete technical specifications for BYD Battery-Box Premium HVS residential battery system.",
};

export default function ResidentialBattery1SpecsPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      
      <div className="relative bg-[#121010] pt-[150px] pb-[80px]">
        <Navbar />
        <div className="px-4 text-center relative z-10 max-w-4xl mx-auto">
          <FadeIn delay={80} direction="up">
            <h1
              className="text-white font-normal mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 4.2vw, 62px)" }}
            >
              Technical Specifications
            </h1>
            <p
              className="text-white/70"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 22px)" }}
            >
              BYD Battery-Box Premium HVS - Complete Technical Documentation
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="px-3 sm:px-6 md:px-[30px] lg:px-[60px] py-[50px] lg:py-[80px]">
        <div className="mx-auto max-w-[1536px] w-full">
          <FadeIn delay={140} direction="up">
            <div className="flex flex-col gap-7">
              <div id="datasheet-content" className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-7 items-start">
                <ResidentialBattery1SpecsCoverSection />
                <ResidentialBattery1SpecsSheetSection />
              </div>

              <div className="rounded-[14px] overflow-hidden shadow-[0_10px_22px_rgba(2,8,23,0.1)]">
                <div className="bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] px-5 md:px-8 py-8 text-center">
                  <h3
                    className="text-white font-normal mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 2.3vw, 36px)" }}
                  >
                    Download Complete Datasheet
                  </h3>
                                    <DownloadPdfButton 
                    targetId="datasheet-content" 
                    filename="res-battery-1-Datasheet.pdf" 
                  />
                  <p
                  className="text-white/90 mb-7 mt-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  Get the complete 2-page technical datasheet for BYD Battery-Box Premium HVS in PDF format exactly as shown above, containing all specifications, features, and contact information.
                </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <DownloadPdfButton 
                    targetId="datasheet-content" 
                    filename="res-battery-1-Datasheet.pdf" 
                  />
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white text-[#0F172A] px-5 py-3 rounded-[10px] font-medium hover:bg-[#F1F5F9] transition-colors text-sm md:text-base w-full sm:w-auto"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
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
                href="/product/residential/res-battery-1"
                className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#EF3C38] transition-colors text-sm md:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
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