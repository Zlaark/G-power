"use client";

import { FadeIn } from "@/components/FadeIn";
import { MapPin, Briefcase, X } from "lucide-react";
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
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
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
      <section className="py-[56px] sm:py-[64px] lg:py-[100px] bg-white px-4 sm:px-8 lg:px-[120px] xl:px-[170px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <h2
            className="text-center font-normal text-[#121010] mb-[34px] lg:mb-[44px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Open Positions
          </h2>
        </FadeIn>

        <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[12px] sm:gap-[14px] md:gap-[22px] lg:gap-[26px]">
          {jobs.map((job, index) => (
            <FadeIn delay={180 + (index % 2) * 100} direction="up" key={job.title}>
              <div className="career-card-scan w-full max-w-[560px] md:max-w-none mx-auto bg-white rounded-[14px] border border-[#D6D9E0] px-4 py-4 sm:px-[20px] sm:py-[20px] lg:px-[24px] lg:py-[22px] h-full flex flex-col gap-[10px]">
                <h3
                  className="font-medium text-[#121010]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.9vw, 28px)" }}
                >
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-[14px] text-[#475569]">
                  <span className="inline-flex items-center gap-[7px] text-[13px] lg:text-[14px] font-light">
                    <MapPin size={16} className="text-[#0A5191]" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-[7px] text-[13px] lg:text-[14px] font-light">
                    <Briefcase size={16} className="text-[#0A5191]" />
                    {job.type}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-[10px]">
                  <button
                    type="button"
                    onClick={() => openModal(job)}
                    className="inline-flex items-center justify-center px-[18px] py-[10px] rounded-[14px] bg-[#0A5191] text-white font-normal hover:bg-[#4a90e2] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
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
            className="w-full max-w-[760px] max-h-[90vh] overflow-y-auto rounded-[18px] bg-white border border-[#E2E8F0] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-[#E2E8F0] px-6 md:px-8 py-4 flex items-center justify-between gap-4 z-10">
              <h3 className="text-[#121010] font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.7vw, 24px)" }}>
                Apply for {selectedJob.title}
              </h3>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 w-10 h-10 rounded-[14px] border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#F8FAFC]"
                aria-label="Close application form"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 md:px-8 py-5 md:py-6">
              {submitted ? (
                <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-800 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Your application has been submitted successfully. Our team will contact you soon.
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleApplySubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F9FAFB] px-5 py-3 text-[#121010] placeholder-[#94A3B8] focus:outline-none focus:border-[#11153F]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F9FAFB] px-5 py-3 text-[#121010] placeholder-[#94A3B8] focus:outline-none focus:border-[#11153F]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="john.doe@company.com"
                    className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F9FAFB] px-5 py-3 text-[#121010] placeholder-[#94A3B8] focus:outline-none focus:border-[#11153F]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
                  />

                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9]/g, '');
                    }}
                    placeholder="+91 98765 43210"
                    title="Please enter a 10-digit phone number"
                    className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F9FAFB] px-5 py-3 text-[#121010] placeholder-[#94A3B8] focus:outline-none focus:border-[#11153F]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
                  />

                  <div>
                    <p
                      className="text-[#1E2340] mb-2 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
                    >
                      Resume
                    </p>
                    <input
                      type="file"
                      required
                      className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F9FAFB] px-4 py-2.5 text-[#121010] file:mr-4 file:rounded-[12px] file:border file:border-[#6B7280] file:bg-white file:px-5 file:py-2 file:text-[#1F2937] file:font-medium"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-[#1E2340] mb-2 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
                    >
                      Cover letter (optional)
                    </p>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project or how we can help you..."
                      className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F9FAFB] px-5 py-3 text-[#121010] placeholder-[#94A3B8] focus:outline-none focus:border-[#11153F] resize-none"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
                    />
                  </div>

                  <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full rounded-[14px] border border-[#1B2148] px-6 py-3 text-[#1B2148] font-semibold hover:bg-[#F8FAFC] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 0.75vw, 15px)" }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full rounded-[14px] bg-[#11153F] px-6 py-3 text-white font-semibold hover:bg-[#0b1035] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 0.75vw, 15px)" }}
                    >
                      Submit application
                    </button>
                  </div>
                </form>
              )}
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
