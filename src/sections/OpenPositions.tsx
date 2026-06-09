"use client";

import { FadeIn } from "@/components/FadeIn";
import { MapPin, Briefcase, X, Search, Filter, Loader2 } from "lucide-react";
import { FormEvent, useEffect, useState, useMemo } from "react";

type Job = {
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  summary: string;
  responsibilities: string[];
};

export function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");

  const jobs: Job[] = [
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

  // Derived Filter Data
  const departments = ["All Departments", ...Array.from(new Set(jobs.map(j => j.department)))];
  const locations = ["All Locations", ...Array.from(new Set(jobs.map(j => j.location)))];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === "All Departments" || job.department === selectedDept;
      const matchesLoc = selectedLoc === "All Locations" || job.location === selectedLoc;
      
      return matchesSearch && matchesDept && matchesLoc;
    });
  }, [searchQuery, selectedDept, selectedLoc, jobs]);

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
    setIsSubmitting(false);
  };

  const handleApplySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and file upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-[56px] sm:py-[64px] lg:py-[100px] bg-white px-4 sm:px-8 lg:px-[120px] xl:px-[170px]">
        <div className="mx-auto max-w-[1920px]">
          <FadeIn delay={100} direction="up">
            <h2
              className="text-center font-bold text-[#121010] mb-[34px] lg:mb-[44px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              Open Positions
            </h2>
          </FadeIn>

          {/* Search and Filters */}
          <FadeIn delay={150} direction="up">
            <div className="max-w-[1260px] mx-auto mb-10 bg-[#F8FAFC] p-6 rounded-[24px] border border-[#E2E8F0] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search roles or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-[16px] text-[#1e293b] focus:outline-none focus:border-[#0A5191] transition-all"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>

                {/* Department Filter */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] w-4 h-4" />
                  <select 
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-[16px] text-[#1e293b] focus:outline-none focus:border-[#0A5191] transition-all appearance-none cursor-pointer"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] w-4 h-4" />
                  <select 
                    value={selectedLoc}
                    onChange={(e) => setSelectedLoc(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-[16px] text-[#1e293b] focus:outline-none focus:border-[#0A5191] transition-all appearance-none cursor-pointer"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[12px] sm:gap-[14px] md:gap-[22px] lg:gap-[26px]">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <FadeIn delay={180 + (index % 2) * 100} direction="up" key={job.title}>
                  <div className="w-full max-w-[560px] md:max-w-none mx-auto bg-white rounded-[14px] border border-[#D6D9E0] px-4 py-4 sm:px-[20px] sm:py-[20px] lg:px-[24px] lg:py-[22px] h-full flex flex-col gap-[10px] hover:shadow-[0_10px_30px_rgba(10,81,145,0.06)] hover:border-[#0A5191]/30 transition-all duration-300">
                    <div className="flex justify-between items-start gap-4">
                      <h3
                        className="font-bold text-[#121010]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.9vw, 24px)" }}
                      >
                        {job.title}
                      </h3>
                      <span className="shrink-0 px-3 py-1 bg-[#0A5191]/5 text-[#0A5191] text-[11px] font-bold rounded-full uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-[14px] text-[#475569]">
                      <span className="inline-flex items-center gap-[7px] text-[13px] lg:text-[14px] font-medium">
                        <MapPin size={16} className="text-[#0A5191]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-[7px] text-[13px] lg:text-[14px] font-medium">
                        <Briefcase size={16} className="text-[#0A5191]" />
                        {job.type}
                      </span>
                    </div>

                    <p className="text-[14px] text-[#121010]/80 leading-relaxed line-clamp-2 my-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {job.summary}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-[10px]">
                      <button
                        type="button"
                        onClick={() => openModal(job)}
                        className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[14px] bg-[#0A5191] text-white font-bold hover:bg-[#0A5191]/90 shadow-[0_4px_14px_rgba(10,81,145,0.25)] transition-all"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </FadeIn>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-[#64748b] text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>No positions found matching your search criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedDept("All Departments"); setSelectedLoc("All Locations"); }}
                  className="mt-4 text-[#0A5191] font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-[760px] max-h-[90vh] overflow-y-auto rounded-[24px] bg-white border border-[#E2E8F0] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-[#E2E8F0] px-6 md:px-8 py-5 flex items-center justify-between gap-4 z-10">
              <div>
                <h3 className="text-[#121010] font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(18px, 1.7vw, 24px)" }}>
                  Apply for {selectedJob.title}
                </h3>
                <p className="text-[#475569] text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedJob.department} • {selectedJob.location}</p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748b] hover:bg-[#F8FAFC] hover:text-[#0A5191] transition-all"
                aria-label="Close application form"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 md:px-8 py-6 md:py-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0A5191] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Application Received!</h4>
                  <p className="text-[#64748b] font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Thank you for applying. Our HR team will review your profile and get back to you shortly.
                  </p>
                  <button 
                    onClick={closeModal}
                    className="mt-8 px-8 py-3 bg-[#0A5191] text-white rounded-[14px] font-bold shadow-lg"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleApplySubmit}>
                  {/* Personal Info */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-[#121010] uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>Personal Information</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>First Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul"
                          className="w-full bg-white border border-[#E2E8F0] rounded-[16px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] focus:ring-4 focus:ring-[#0A5191]/5 transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Last Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sharma"
                          className="w-full bg-white border border-[#E2E8F0] rounded-[16px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] focus:ring-4 focus:ring-[#0A5191]/5 transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. rahul.sharma@email.com"
                          className="w-full bg-white border border-[#E2E8F0] rounded-[16px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] focus:ring-4 focus:ring-[#0A5191]/5 transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          placeholder="e.g. 9876543210"
                          title="Please enter a 10-digit phone number"
                          className="w-full bg-white border border-[#E2E8F0] rounded-[16px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] focus:ring-4 focus:ring-[#0A5191]/5 transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-[#121010] uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>Application Documents</h4>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Resume / CV * (PDF, DOCX)</label>
                      <div className="relative">
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          className="w-full bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-[16px] px-4 py-8 text-center text-[#64748b] file:hidden cursor-pointer hover:border-[#0A5191]/50 hover:bg-[#0A5191]/5 transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <Briefcase className="w-8 h-8 text-[#94a3b8] mb-2" />
                          <p className="text-sm font-medium">Click to upload or drag and drop</p>
                          <p className="text-xs text-[#94a3b8] mt-1">Maximum file size: 5MB</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Why are you interested in G-Power? (Optional)</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your passion for renewable energy..."
                        className="w-full bg-white border border-[#E2E8F0] rounded-[16px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] focus:ring-4 focus:ring-[#0A5191]/5 transition-all resize-none"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 rounded-[16px] border border-[#E2E8F0] px-6 py-4 text-[#64748b] font-bold hover:bg-[#F8FAFC] transition-all"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] rounded-[16px] bg-[#0A5191] px-6 py-4 text-white font-bold hover:bg-[#0A5191]/90 shadow-[0_10px_25px_rgba(10,81,145,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        "Submit Application"
                      )}
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

// Add the missing icon import
import { CheckCircle2 } from "lucide-react";
