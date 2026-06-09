import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LegalBreadcrumbs } from "@/components/LegalBreadcrumbs";

export const metadata: Metadata = {
  title: "Other Applications Products | GPower",
  description: "Browse all enterprise-grade energy storage products from GPower.",
};

const products = [
  {
    title: "Core Business Station",
    capacity: "50 kWh",
    image: "/More Products.png",
    href: "/solutions/new-application-business/products/core-station",
  },
  {
    title: "Enterprise Power Hub",
    capacity: "250 kWh",
    image: "/Solutions.png",
    href: "/solutions/new-application-business/products/enterprise-hub",
  },
];

import { PageHero } from "@/components/PageHero";

export default function NABProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero 
        title="Other Application Products" 
        breadcrumbPage="Other Products" 
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
        description="Browse our complete range of enterprise storage products"
      />

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
              <Link href="/solutions/new-application-business" className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0A5191] transition-colors" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}><ArrowLeft className="w-4 h-4" /> Back to Other Applications</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
