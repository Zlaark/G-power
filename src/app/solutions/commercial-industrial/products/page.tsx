import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LegalBreadcrumbs } from "@/components/LegalBreadcrumbs";

export const metadata: Metadata = {
  title: "Commercial & Industrial Products | GPower",
  description: "Browse all commercial and industrial battery storage products from GPower.",
};

const products = [
  {
    title: "BYD Battery-Box Commercial",
    capacity: "Scalable",
    image: "/More Products.webp",
    href: "/solutions/commercial-industrial/products/ci-battery-1",
  },
  {
    title: "BYD MC Cube",
    capacity: "Containerized",
    image: "/Solutions-1.webp",
    href: "/solutions/commercial-industrial/products/ci-battery-2",
  },
];

export default function CIProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-auto min-h-[380px] sm:min-h-[430px] md:h-[65vh] md:min-h-[520px] flex items-center justify-center bg-[#121010] overflow-hidden pt-[140px] pb-[50px] sm:pt-[150px] sm:pb-[60px] md:pt-20 md:pb-0">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/Battery Energy Storage Systems (BESS)  (About Us Page).webp"
            alt="C&I Energy Storage"
            fill
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="container relative z-10 px-5 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={50} direction="up">
            <LegalBreadcrumbs currentPage="C&I Products" />
          </FadeIn>
          <FadeIn delay={200} direction="up" duration={900}>
            <p
              className="text-white font-medium tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
            >
              Commercial & Industrial
            </p>
          </FadeIn>
          <FadeIn delay={300} direction="up" duration={900}>
            <h1
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 5vw, 62px)" }}
            >
              All Products
            </h1>
          </FadeIn>
          <FadeIn delay={400} direction="up" duration={900}>
            <p
              className="text-white/80 font-medium mx-auto max-w-3xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}
            >
              Browse our complete range of commercial & industrial products
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[28px]">
            {products.map((product, index) => (
              <FadeIn delay={140 + index * 90} direction="up" key={product.title}>
                <Link href={product.href} className="group card-shimmer card-border-glow block rounded-[18px] overflow-hidden border border-[#121010]/10 bg-white h-full">
                  <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden">
                    <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#0A5191] text-white font-semibold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}>{product.capacity}</div>
                  </div>
                  <div className="p-[22px] lg:p-[26px]">
                    <h2 className="text-[#121010] font-semibold mb-[8px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2vw, 24px)" }}>{product.title}</h2>
                    <span className="inline-flex items-center gap-2 text-[#0A5191] font-medium group-hover:gap-4 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}>View Details <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400} direction="up">
            <div className="mt-[48px] flex justify-center">
              <Link href="/solutions/commercial-industrial" className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0A5191] transition-colors" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}><ArrowLeft className="w-4 h-4" /> Back to Commercial & Industrial</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
