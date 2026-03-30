import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { DownloadPdfButton } from "@/components/DownloadPdfButton";
import { EVCargo48VSpecsCoverSection } from "@/sections/EVCargo48VSpecsCoverSection";
import { EVCargo48VSpecsSheetSection } from "@/sections/EVCargo48VSpecsSheetSection";

export const metadata: Metadata = {
  title: "Technical Specifications | EV Cargo Series 48V | GPower",
  description: "Complete technical specifications for EV Cargo Series 48V battery system.",
};

export default function EVCargo48VSpecsPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      <Navbar />

      <section className="px-3 sm:px-6 md:px-[30px] lg:px-[60px] py-[40px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-[980px] w-full">
          <FadeIn delay={80} direction="up">
            <h1 className="text-[#0F172A] text-center font-normal mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 4.2vw, 62px)" }}>Technical Specifications</h1>
            <p className="text-[#475569] text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.2vw, 22px)" }}>EV Cargo Series 48V - Complete Technical Documentation</p>
          </FadeIn>

          <FadeIn delay={140} direction="up">
            <div className="mt-12 flex flex-col gap-7">
              <div id="datasheet-content" className="flex flex-col gap-7">
                <EVCargo48VSpecsCoverSection />
                <EVCargo48VSpecsSheetSection />
              </div>

              <div className="rounded-[14px] overflow-hidden shadow-[0_10px_22px_rgba(2,8,23,0.1)]">
                <div className="bg-gradient-to-r from-[#081228] via-[#111C32] to-[#132038] px-5 md:px-8 py-8 text-center">
                  <h3 className="text-white font-normal mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 2.3vw, 36px)" }}>Download Complete Datasheet</h3>
                                    <DownloadPdfButton 
                    targetId="datasheet-content" 
                    filename="ev-cargo-48v-Datasheet.pdf" 
                  />
                  <p
                  className="text-white/90 mb-7 mt-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  Get the complete 2-page technical datasheet for EV Cargo Series 48V in PDF format exactly as shown above, containing all specifications, features, and contact information.
                </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <DownloadPdfButton 
                    targetId="datasheet-content" 
                    filename="ev-cargo-48v-Datasheet.pdf" 
                  />
                    <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#0F172A] px-5 py-3 rounded-[10px] font-medium hover:bg-[#F1F5F9] transition-colors text-sm md:text-base w-full sm:w-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>Request More Information</Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={220} direction="up">
            <div className="mt-8 flex justify-center">
              <Link href="/solutions/2-3-wheeler/products/ev-cargo-48v" className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#EF3C38] transition-colors text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}><ArrowLeft className="w-4 h-4" /> Back to Product</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
