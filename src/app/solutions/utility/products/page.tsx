import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Utility Products | GPower",
  description: "Browse all utility-scale battery storage products from GPower.",
};

const products = [
  {
    title: "BYD Cube Pro C&C",
    capacity: "2.76 MWh",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/utility/products/utility-battery-1",
  },
  {
    title: "BYD Cube T28",
    capacity: "3.44 MWh",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/utility/products/utility-battery-2",
  },
  {
    title: "G-Power BESS Max",
    capacity: "5.0 MWh",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/utility/products/utility-battery-3",
  },
  {
    title: "Hithium Hiner",
    capacity: "261 kWh",
    image: "https://images.unsplash.com/photo-1513828583688-c52646fcdd2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/utility/products/utility-battery-4",
  },
  {
    title: "G-Power Grid Scale Mega",
    capacity: "10 MWh",
    image: "https://images.unsplash.com/photo-1548611716-1011ff5b85a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/utility/products/utility-battery-5",
  },
  {
    title: "G-Power Utility ESS",
    capacity: "50 MWh",
    image: "https://images.unsplash.com/photo-1511228224726-0e10411831ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/utility/products/utility-battery-6",
  },
];

export default function UtilityProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-[170px] pb-[64px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up"><p className="text-white/85 font-medium tracking-[0.16em] uppercase mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}>Utility</p></FadeIn>
          <FadeIn delay={220} direction="up"><h1 className="text-white font-semibold mb-[16px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 6vw, 62px)" }}>All Products</h1></FadeIn>
          <FadeIn delay={320} direction="up"><p className="text-white/80 font-medium mx-auto max-w-3xl" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}>Browse our complete range of utility-scale energy storage products</p></FadeIn>
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
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#EF3C38] text-white font-semibold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}>{product.capacity}</div>
                  </div>
                  <div className="p-[22px] lg:p-[26px]">
                    <h2 className="text-[#121010] font-semibold mb-[8px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 2vw, 24px)" }}>{product.title}</h2>
                    <span className="inline-flex items-center gap-2 text-[#EF3C38] font-medium group-hover:gap-4 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}>View Details <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400} direction="up">
            <div className="mt-[48px] flex justify-center">
              <Link href="/solutions/utility" className="inline-flex items-center gap-2 text-[#475569] hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}><ArrowLeft className="w-4 h-4" /> Back to Utility</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
