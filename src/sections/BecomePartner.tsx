import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function BecomePartner() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden px-4 sm:px-6 lg:px-[80px] xl:px-[120px] py-[72px] sm:py-[80px] lg:py-[100px]">
      {/* Background Image — fully visible, colourful */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Banner 2 (Our Partners Page).webp"
          alt="Become a Partner Background"
          fill
          className="object-cover"
        />
        {/* Subtle gradient for text readability only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/15" />
      </div>

      <div className="mx-auto max-w-[1920px] relative z-10 text-center flex flex-col items-center">
        <FadeIn delay={100} direction="up" className="max-w-[1000px] px-2">
          <h2 
            className="font-semibold text-white mb-[20px] lg:mb-[30px] drop-shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            Become a Partner
          </h2>
          <p 
            className="text-white/95 mb-[40px] lg:mb-[50px] font-medium drop-shadow-md"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 20px)' }}
          >
            Join our network of industry-leading partners and grow your business with GPower
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[24px] sm:px-[30px] py-[14px] sm:py-[16px] font-semibold text-white bg-[#0A5191] hover:bg-[#4a90e2] rounded-[14px] transition-all hover:-translate-y-[2px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 2vw, 16px)' }}
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-[10px]" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}