import { FadeIn } from "@/components/FadeIn";
import { MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

export function OpenPositions() {
  const jobs = [
    { title: "Solar Installation Technician", location: "Mumbai, Maharashtra", type: "Full-time" },
    { title: "Electrical Engineer", location: "Bangalore, Karnataka", type: "Full-time" },
    { title: "Project Manager - Renewable Energy", location: "Delhi NCR", type: "Full-time" },
    { title: "Business Development Manager", location: "Pune, Maharashtra", type: "Full-time" },
    { title: "Operations & Maintenance Engineer", location: "Hyderabad, Telangana", type: "Full-time" },
    { title: "Sales Executive - Solar", location: "Multiple Locations", type: "Full-time" },
  ];

  return (
    <section className="py-[70px] lg:py-[84px] bg-white px-[20px] md:px-[60px] lg:px-[80px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <h2
            className="text-center font-semibold text-[#121010] mb-[34px] lg:mb-[40px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Open Positions
          </h2>
        </FadeIn>

        <div className="max-w-[1760px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[22px] lg:gap-[28px]">
          {jobs.map((job, index) => (
            <FadeIn delay={180 + (index % 2) * 100} direction="up" key={job.title}>
              <div className="bg-white rounded-[14px] border border-[#D6D9E0] p-[24px] lg:p-[30px] min-h-[210px] lg:min-h-[240px] h-full flex flex-col gap-[16px]">
                <h3
                  className="font-bold text-[#121010]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 2vw, 36px)" }}
                >
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-[14px] text-[#475569]">
                  <span className="inline-flex items-center gap-[7px] text-[13px] lg:text-[14px] font-medium">
                    <MapPin size={16} className="text-[#EF3C38]" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-[7px] text-[13px] lg:text-[14px] font-medium">
                    <Briefcase size={16} className="text-[#EF3C38]" />
                    {job.type}
                  </span>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-[18px] py-[10px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
