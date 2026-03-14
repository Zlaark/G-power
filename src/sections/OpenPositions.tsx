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
    <section className="py-[80px] lg:py-[100px] bg-[#FBFBFB] px-[20px] md:px-[60px] lg:px-[80px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <h2
            className="text-center font-semibold text-[#121010] mb-[50px] lg:mb-[60px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Open Positions
          </h2>
        </FadeIn>

        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[18px] lg:gap-[22px]">
          {jobs.map((job, index) => (
            <FadeIn delay={180 + (index % 2) * 100} direction="up" key={job.title}>
              <div className="bg-white rounded-[16px] border border-[#121010]/7 p-[28px] lg:p-[34px] min-h-[210px] lg:min-h-[240px] h-full flex flex-col gap-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3
                  className="font-bold text-[#121010]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(19px, 2vw, 24px)" }}
                >
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-[14px] text-[#121010]/75">
                  <span className="inline-flex items-center gap-[7px] text-[14px] font-medium">
                    <MapPin size={16} className="text-[#EF3C38]" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-[7px] text-[14px] font-medium">
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
