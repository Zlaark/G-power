import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export function ProjectsHero() {
  return (
    <PageHero 
        title="Our Projects" 
        breadcrumbPage="Our Projects" 
        backgroundImage="/Banner Img (Project Page).webp" 
        description="Delivering excellence across India's energy landscape"
    >
        <div className="flex flex-wrap items-center justify-center gap-[12px] mt-8">
            <a
              href="#featured-projects"
              className="inline-flex items-center justify-center px-[24px] py-[12px] rounded-[8px] bg-[#0A5191] text-white font-semibold hover:bg-[#4a90e2] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Explore Projects
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[24px] py-[12px] rounded-[8px] border border-white/35 text-white font-semibold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
            >
              Talk to Our Team
            </Link>
        </div>
    </PageHero>
  );
}