"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { MapPin, Zap, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Mumbai Solar Park",
      location: "Mumbai, Maharashtra",
      capacity: "50 MW",
      year: "2025",
      type: "Utility Scale",
      description: "A utility-scale solar generation project designed to improve grid reliability and reduce fossil-fuel dependency in high-demand zones.",
      image: "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      ],
    },
    {
      title: "Tech Park EV Charging Network",
      location: "Bangalore, Karnataka",
      capacity: "200 Charging Points",
      year: "2024",
      type: "Commercial",
      description: "Campus-wide EV charging deployment enabling smart charging, load balancing, and reliable access for commercial users.",
      image: "https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1542365887-7d9d82d62c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1593941707882-a56bbc8df4f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      ],
    },
    {
      title: "Wind Farm Project",
      location: "Gujarat",
      capacity: "100 MW",
      year: "2024",
      type: "Utility Scale",
      description: "Integrated renewable project with wind generation and optimized storage dispatch to stabilize variable output.",
      image: "https://images.unsplash.com/photo-1660760727016-2f0d1931ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1660760727016-2f0d1931ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      ],
    },
    {
      title: "Industrial Battery Storage",
      location: "Pune, Maharashtra",
      capacity: "25 MWh",
      year: "2025",
      type: "Industrial",
      description: "High-availability battery storage for industrial operations, supporting demand management and outage protection.",
      image: "https://images.unsplash.com/photo-1766639214308-759e9993574d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1766639214308-759e9993574d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1612881951615-bdb3508e5cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1622015663084-307d19eab4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      ],
    },
    {
      title: "Rooftop Solar Installation",
      location: "Delhi NCR",
      capacity: "5 MW",
      year: "2024",
      type: "Commercial",
      description: "Distributed rooftop solar system for commercial infrastructure with energy optimization and reduced operating costs.",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1611365892117-00f4f17f48e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      ],
    },
    {
      title: "Residential Solar Community",
      location: "Hyderabad, Telangana",
      capacity: "2 MW",
      year: "2025",
      type: "Residential",
      description: "Community-focused clean energy initiative combining rooftop generation and neighborhood-scale storage.",
      image: "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      ],
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  useEffect(() => {
    if (activeProjectIndex === null) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProjectIndex(null);
        setActiveSlide(0);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProjectIndex]);

  const showPreviousSlide = () => {
    if (!activeProject) return;
    setActiveSlide((prev) => (prev === 0 ? activeProject.gallery.length - 1 : prev - 1));
  };

  const showNextSlide = () => {
    if (!activeProject) return;
    setActiveSlide((prev) => (prev === activeProject.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="featured-projects" className="py-[56px] sm:py-[64px] lg:py-[100px] bg-[#FBFBFB] px-4 sm:px-6 md:px-[90px] lg:px-[120px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-[60px] lg:mb-[80px]">
            <h2 
              className="font-semibold text-[#121010] mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              Featured Projects
            </h2>
            <p 
              className="text-[#121010]/80 font-medium leading-[1.6]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.8vw, 18px)' }}
            >
              From utility-scale installations to residential solutions, explore our portfolio
              of successful clean energy projects
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] sm:gap-[16px] md:gap-[24px] lg:gap-[28px] max-w-[1520px] mx-auto">
          {projects.map((project, index) => (
            <FadeIn delay={200 + (index % 3) * 100} direction="up" key={index}>
              <div className="project-aurora-card bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 group flex flex-col min-h-[360px] md:min-h-[450px] lg:min-h-[480px] h-full">
                <div className="relative h-[170px] md:h-[190px] lg:h-[210px] w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-[24px] lg:p-[30px] flex flex-col flex-1">
                  <div className="mb-[8px]">
                    <span 
                      className="inline-block bg-[#0A5191] text-white font-medium px-[16px] py-[6px] rounded-full"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px' }}
                    >
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 
                    className="font-semibold text-[#121010] mb-[8px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 2vw, 22px)' }}
                  >
                    {project.title}
                  </h3>
                  
                  <div className="mt-auto flex flex-col gap-[4px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 text-[#0A5191]">
                        <MapPin size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#64748b] font-medium text-[14px]">{project.location}</span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 text-[#0A5191]">
                        <Zap size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#64748b] font-medium text-[14px]">{project.capacity}</span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 text-[#0A5191]">
                        <Calendar size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#64748b] font-medium text-[14px]">{project.year}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveProjectIndex(index);
                      setActiveSlide(0);
                    }}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0A5191] text-white px-5 py-2.5 text-[14px] font-semibold transition-colors hover:bg-[#083D6D]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-[2px] p-4 sm:p-6 md:p-10"
          onClick={() => {
            setActiveProjectIndex(null);
            setActiveSlide(0);
          }}
        >
          <div
            className="mx-auto w-full max-w-2xl rounded-[20px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
              <h3 className="text-[#121010] font-semibold text-[20px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {activeProject.title}
              </h3>
              <button
                type="button"
                aria-label="Close details dialog"
                onClick={() => {
                  setActiveProjectIndex(null);
                  setActiveSlide(0);
                }}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#F1F5F9] text-[#334155] hover:bg-[#E2E8F0] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative h-[280px] sm:h-[380px] md:h-[480px] bg-[#0B1728]">
              <Image
                src={activeProject.gallery[activeSlide]}
                alt={`${activeProject.title} image ${activeSlide + 1}`}
                fill
                className="object-cover"
              />

              <button
                type="button"
                aria-label="Previous image"
                onClick={showPreviousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/55 text-white inline-flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={showNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/55 text-white inline-flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {activeProject.gallery.map((_, dotIndex) => (
                  <button
                    key={`${activeProject.title}-dot-${dotIndex}`}
                    type="button"
                    aria-label={`Go to image ${dotIndex + 1}`}
                    onClick={() => setActiveSlide(dotIndex)}
                    className={`h-2.5 rounded-full transition-all ${dotIndex === activeSlide ? "w-7 bg-white" : "w-2.5 bg-white/60"}`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4 px-4 pb-6 sm:pt-5 sm:px-5 sm:pb-7 md:pt-6 md:px-6 md:pb-8 space-y-3">
              <div className="inline-flex items-center rounded-full bg-[#0A5191] text-white px-4 py-1.5 text-[13px] font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {activeProject.type}
              </div>
              <p className="text-[#334155] text-[15px] leading-[1.7]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {activeProject.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#64748B]">Location</p>
                  <p className="text-[#0F172A] font-semibold text-[14px] mt-1">{activeProject.location}</p>
                </div>
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#64748B]">Capacity</p>
                  <p className="text-[#0F172A] font-semibold text-[14px] mt-1">{activeProject.capacity}</p>
                </div>
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#64748B]">Commissioned</p>
                  <p className="text-[#0F172A] font-semibold text-[14px] mt-1">{activeProject.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}