"use client";

import { FadeIn } from "@/components/FadeIn";
import { MapPin, Briefcase, X, Clock3, Building2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: "Solar Installation Technician",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      department: "Field Operations",
      experience: "2-4 years",
      summary:
        "Install, test, and commission rooftop and C&I solar systems while ensuring safety and quality standards.",
      responsibilities: [
        "Install solar modules, inverters, and electrical wiring as per design.",
        "Perform site inspections, fault diagnosis, and preventive maintenance.",
        "Coordinate with project engineers and submit daily progress updates.",
      ],
    },
    {
      title: "Electrical Engineer",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      department: "Engineering",
      experience: "3-6 years",
      summary:
        "Design and validate electrical systems for renewable energy projects across utility and industrial sites.",
      responsibilities: [
        "Prepare SLDs, cable schedules, and BOQ for project execution.",
        "Review vendor drawings and ensure standards compliance.",
        "Support commissioning and testing activities at site.",
      ],
    },
    {
      title: "Project Manager - Renewable Energy",
      location: "Delhi NCR",
      type: "Full-time",
      department: "Project Management",
      experience: "6-10 years",
      summary:
        "Lead end-to-end renewable energy projects, ensuring scope, timelines, quality, and stakeholder alignment.",
      responsibilities: [
        "Own project planning, risk management, and milestone tracking.",
        "Coordinate with engineering, procurement, and installation teams.",
        "Manage client communication and project reporting.",
      ],
    },
    {
      title: "Business Development Manager",
      location: "Pune, Maharashtra",
      type: "Full-time",
      department: "Sales & Growth",
      experience: "4-8 years",
      summary:
        "Drive revenue growth by identifying opportunities, building partnerships, and closing enterprise deals.",
      responsibilities: [
        "Generate qualified pipeline across target segments.",
        "Prepare proposals and negotiate commercial terms.",
        "Collaborate with technical teams for solution fitment.",
      ],
    },
    {
      title: "Operations & Maintenance Engineer",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      department: "O&M",
      experience: "3-5 years",
      summary:
        "Ensure plant uptime and performance through proactive monitoring, maintenance, and rapid troubleshooting.",
      responsibilities: [
        "Monitor plant KPIs and perform preventive maintenance.",
        "Investigate underperformance and execute corrective actions.",
        "Maintain service logs and compliance documentation.",
      ],
    },
    {
      title: "Sales Executive - Solar",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Sales",
      experience: "1-3 years",
      summary:
        "Engage prospects and convert opportunities for residential and SME solar solutions.",
      responsibilities: [
        "Handle incoming leads and conduct customer consultations.",
        "Work with design team to deliver proposal and savings analysis.",
        "Achieve monthly sales targets with high customer satisfaction.",
      ],
    },
  ];

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedJob]);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setSubmitted(false);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
  };

  const handleApplySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-[70px] lg:py-[84px] bg-white px-[28px] md:px-[90px] lg:px-[120px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <h2
            className="text-center font-semibold text-[#121010] mb-[34px] lg:mb-[40px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Open Positions
          </h2>
        </FadeIn>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[50px]">
          {jobs.map((job, index) => (
            <FadeIn delay={180 + (index % 2) * 100} direction="up" key={job.title}>
              <div className="career-card-scan bg-white rounded-[14px] border border-[#D6D9E0] px-[30px] py-[24px] lg:px-[42px] lg:py-[30px] min-h-[210px] lg:min-h-[240px] h-full flex flex-col gap-[16px]">
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

                <p
                  className="paragraph-hover-float text-[#475569] font-medium leading-[1.6]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                >
                  {job.summary}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-[10px]">
                  <button
                    type="button"
                    onClick={() => openModal(job)}
                    className="inline-flex items-center justify-center px-[16px] py-[9px] rounded-[8px] border border-[#121010]/20 text-[#121010] font-semibold hover:bg-[#F8FAFC] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => openModal(job)}
                    className="inline-flex items-center justify-center px-[18px] py-[10px] rounded-[8px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      </section>

      {selectedJob && (
        <div
          className="fixed inset-0 z-[120] bg-black/55 backdrop-blur-[1px] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-[980px] max-h-[90vh] overflow-y-auto rounded-[18px] bg-white border border-[#E2E8F0] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-[#E2E8F0] px-6 md:px-8 py-4 flex items-start justify-between gap-4 z-10">
              <div>
                <p className="text-[12px] tracking-[0.12em] uppercase text-[#EF3C38] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Job Application
                </p>
                <h3 className="text-[#121010] font-bold mt-1" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 30px)" }}>
                  {selectedJob.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#F8FAFC]"
                aria-label="Close application form"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-5">
                  <h4 className="text-[#121010] font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px" }}>
                    Job Details
                  </h4>

                  <div className="space-y-3 text-[#334155]">
                    <p className="inline-flex items-center gap-2 text-[14px] font-medium">
                      <MapPin size={15} className="text-[#EF3C38]" />
                      {selectedJob.location}
                    </p>
                    <p className="inline-flex items-center gap-2 text-[14px] font-medium">
                      <Briefcase size={15} className="text-[#EF3C38]" />
                      {selectedJob.type}
                    </p>
                    <p className="inline-flex items-center gap-2 text-[14px] font-medium">
                      <Building2 size={15} className="text-[#EF3C38]" />
                      {selectedJob.department}
                    </p>
                    <p className="inline-flex items-center gap-2 text-[14px] font-medium">
                      <Clock3 size={15} className="text-[#EF3C38]" />
                      {selectedJob.experience}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#121010] font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px" }}>
                    Role Overview
                  </h4>
                  <p className="paragraph-hover-float text-[#475569] leading-[1.7] font-medium" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                    {selectedJob.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-[#121010] font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px" }}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#475569]">
                        <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#EF3C38] flex-shrink-0" />
                        <span className="paragraph-hover-float font-medium leading-[1.6]" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-[#121010] font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px" }}>
                  Apply for this Role
                </h4>

                {submitted ? (
                  <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-800 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Your application has been submitted successfully. Our team will contact you soon.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleApplySubmit}>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full rounded-[10px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-3 text-[#121010] placeholder-[#64748B] focus:outline-none focus:border-[#EF3C38]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full rounded-[10px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-3 text-[#121010] placeholder-[#64748B] focus:outline-none focus:border-[#EF3C38]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-[10px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-3 text-[#121010] placeholder-[#64748B] focus:outline-none focus:border-[#EF3C38]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Years of Experience (e.g. 4 years)"
                      className="w-full rounded-[10px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-3 text-[#121010] placeholder-[#64748B] focus:outline-none focus:border-[#EF3C38]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    />
                    <input
                      type="url"
                      placeholder="Resume / Portfolio URL"
                      className="w-full rounded-[10px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-3 text-[#121010] placeholder-[#64748B] focus:outline-none focus:border-[#EF3C38]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    />
                    <textarea
                      rows={4}
                      placeholder="Why are you a good fit for this role?"
                      className="w-full rounded-[10px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-3 text-[#121010] placeholder-[#64748B] focus:outline-none focus:border-[#EF3C38] resize-none"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    />

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-[18px] py-[12px] rounded-[10px] bg-[#EF3C38] text-white font-semibold hover:bg-[#d63532] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type Job = {
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  summary: string;
  responsibilities: string[];
};
