import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BecomePartner() {
  return (
    <section className="py-[100px] lg:py-[120px] bg-[#121010] text-white relative overflow-hidden px-[20px] md:px-[60px] lg:px-[80px]">
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5"></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a1717] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1920px] relative z-10 text-center flex flex-col items-center">
        <FadeIn delay={100} direction="up" className="max-w-[1000px]">
          <h2 
            className="font-semibold text-white mb-[20px] lg:mb-[30px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            Become a Partner
          </h2>
          <p 
            className="text-white/90 mb-[40px] lg:mb-[50px] font-medium whitespace-nowrap"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(15px, 1.8vw, 20px)' }}
          >
            Join our network of industry-leading partners and grow your business with GPower
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[35px] py-[18px] font-semibold text-white bg-[#EF3C38] hover:bg-[#d63532] rounded-[5px] transition-all hover:-translate-y-[2px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 2vw, 16px)' }}
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