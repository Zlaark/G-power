import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solutions | GPower",
  description:
    "Energy storage solutions for businesses and industrial facilities.",
};

const products = [
  {
    title: "BYD Battery-Box Commercial",
    description:
      "Scalable energy storage solution for commercial and industrial applications",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "BYD MC Cube",
    description: "Medium-sized containerized solution for commercial applications",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export default function CommercialIndustrialSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[58vh] min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="C&I Energy Storage"
            fill
            priority
            className="object-cover opacity-50 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/65 to-[#121010]/35" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl">
          <FadeIn delay={120} direction="up">
            <h1
              className="text-white font-semibold leading-tight mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(34px, 6vw, 64px)" }}
            >
              Commercial & Industrial Storage
            </h1>
          </FadeIn>
          <FadeIn delay={240} direction="up">
            <p
              className="text-white/80 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.8vw, 22px)" }}
            >
              Energy storage solutions for businesses and industrial facilities
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[26px]">
          {products.map((product, index) => (
            <FadeIn delay={140 + index * 90} direction="up" key={product.title}>
              <article className="rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full flex flex-col">
                <div className="relative h-[250px] sm:h-[300px] lg:h-[340px] w-full">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                </div>
                <div className="p-[22px] lg:p-[26px] flex flex-col flex-1">
                  <h2
                    className="text-[#121010] font-semibold mb-[10px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 2.8vw, 30px)" }}
                  >
                    {product.title}
                  </h2>
                  <p
                    className="text-[#475569] font-normal leading-[1.65] mb-[20px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)" }}
                  >
                    {product.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center justify-center w-fit px-[22px] py-[12px] rounded-[8px] bg-[#EF3C38] text-white font-medium hover:bg-[#d63532] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeIn delay={120} direction="up">
            <h2
              className="text-white font-medium mb-[16px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3.2vw, 42px)" }}
            >
              Ready to Optimize Your Energy Costs?
            </h2>
          </FadeIn>
          <FadeIn delay={260} direction="up">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[28px] py-[13px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px" }}
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}