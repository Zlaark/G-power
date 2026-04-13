import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "2 & 3 Wheeler Products | GPower",
  description: "Browse all 2 & 3 wheeler EV battery products from GPower.",
};

const products = [
  {
    title: "EV Pro Series 72V",
    capacity: "3.2 kWh",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/2-3-wheeler/products/ev-pro-72v",
  },
  {
    title: "EV Cargo Series 48V",
    capacity: "4.8 kWh",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    href: "/solutions/2-3-wheeler/products/ev-cargo-48v",
  },
];

export default function TwoThreeWheelerProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-[170px] pb-[64px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up"><p className="text-white/85 font-medium tracking-[0.16em] uppercase mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}>2 & 3 Wheeler</p></FadeIn>
          <FadeIn delay={220} direction="up"><h1 className="text-white font-semibold mb-[16px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 6vw, 62px)" }}>All Products</h1></FadeIn>
          <FadeIn delay={320} direction="up"><p className="text-white/80 font-medium mx-auto max-w-3xl" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.7vw, 20px)" }}>Browse our complete range of EV battery products</p></FadeIn>
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
              <Link href="/solutions/2-3-wheeler" className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0A5191] transition-colors" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}><ArrowLeft className="w-4 h-4" /> Back to 2 & 3 Wheeler</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
