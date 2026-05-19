"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { MapPin, Zap, Calendar, X } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Andaman Nicobar Residential Solar",
      location: "Andaman Nicobar",
      capacity: "3kW / 5.12kWh",
      year: "2024",
      type: "Residential",
      description: "Hybrid Inverter 3kW With 5.12kWh Battery Pack (1 Battery JEEVA5000(5.12kWh))",
      image: "/Andaman Nicobar(2024) Residential Solar.webp",
      gallery: [],
    },
    {
      title: "Chennai Residential Solar",
      location: "Chennai, Tamil Nadu",
      capacity: "10kW / 15.36kWh",
      year: "2025",
      type: "Residential",
      description: "Hybrid Inverter 10kW With 15.36kWh Battery Pack (3 Battery JEEVA5000(15.36kWh))",
      image: "/Chennai, Tamil Nadu (2025) Residential Solar.webp",
      gallery: [],
    },
    {
      title: "Nsure Reliable Power Solutions",
      location: "India",
      capacity: "2.75MW / 5.56MWh",
      year: "2024",
      type: "Utility Scale",
      description: "2.75MW/5.56MWh Battery energy storage system (1 no of 2.75MW PCS with 1 no of 5.56MWh 40ft BESS container)",
      image: "/Nsure Reliable Power Solutions Private Limited (2024).webp",
      gallery: [],
    },
    {
      title: "Inspace Maruthi ferm",
      location: "India",
      capacity: "20kW / 30kWh",
      year: "2024",
      type: "Commercial",
      description: "Hybrid Inverter 20kW With 30kWh Battery Pack (6 Battery JEEVA5000(5.12kWh total 30.72kWh))",
      image: "/Inspace Maruthi ferm (2024).webp",
      gallery: [],
    },
    {
      title: "Tiger Distributors",
      location: "India",
      capacity: "5kW / 10kWh",
      year: "2024",
      type: "Commercial",
      description: "Hybrid Inverter 5kW With 10kWh Battery Pack (2 Battery JEEVA5000(5.12kWh total 10.24kWh))",
      image: "/Tiger Distributors (2024).webp",
      gallery: [],
    },
    {
      title: "Oniosome Healthcare Pvt Ltd",
      location: "Sanand, Gujarat",
      capacity: "60KVA / 144KWh",
      year: "2025",
      type: "Industrial",
      description: "60KVA UPS with 144KWh Battery (480V 300AH Battery pack (144kWh))",
      image: "/Oniosome Helthcare Pvt Ltd, Sanand, Gujarat (2025).webp",
      gallery: [],
    },
    {
      title: "HIL Pvt Ltd",
      location: "Sriperumbudur, Tamil Nadu",
      capacity: "30KVA / 38.4KWh",
      year: "2024",
      type: "Industrial",
      description: "30KVA UPS with 38.4KWh Battery (384V 100AH Battery pack (38.4kWh))",
      image: "/HIL Pvt Ltd, Sriperumbudur, Tamil Nadu (2024).webp",
      gallery: [],
    },
    {
      title: "Reckon Organics Pvt Ltd",
      location: "Nandesari, Vadodara, Gujarat",
      capacity: "40KVA Total",
      year: "2024",
      type: "Industrial",
      description: "1) 30KVA UPS with 38.4KWh Battery (384V 100AH Battery pack (38.4kWh))\n2) 10KVA UPS with 24kWh Battery (240V 100AH Battery pack (24kWh))",
      image: "/Reckon Organisc Pvt Ltd, Nandesari, Vadodara, Gujarat (2024).webp",
      gallery: [],
    },
    {
      title: "Kawman Pharma",
      location: "Chennai, Tamil Nadu",
      capacity: "20KVA / 24kWh",
      year: "2022",
      type: "Industrial",
      description: "20KVA UPS with 24kWh Battery (240V 100AH Battery pack (24kWh))",
      image: "/Kawman Pharma, Chennai, Tamil Nadu (2022).webp",
      gallery: [],
    },
    {
      title: "Premier Shuttlers Academy",
      location: "India",
      capacity: "10kW / 40kWh",
      year: "2024",
      type: "Commercial",
      description: "Hybrid Inverter 10kW with 40kWh Battery Pack (8 Battery JEEVA5000(5.12kWh Total 40.96kWh))",
      image: "/Premier Shuttlers Academy (2024) -1.webp",
      gallery: [
        "/Premier Shuttlers Academy (2024) -2.webp",
        "/Premier Shuttlers Academy (2024) -3.webp"
      ],
    },
    {
      title: "Kawman Pharma, Cuddalore",
      location: "Cuddalore, Tamil Nadu",
      capacity: "27.5KVA Total",
      year: "2022",
      type: "Industrial",
      description: "1) 7.5KVA UPS with 9.6KWh Battery (192V 50AH Battery pack (9.6kWh))\n2) 20KVA UPS with 24kWh Battery (240V 100AH Battery pack (24kWh))",
      image: "/Kawman Pharma, Cuddalore Tamil Nadu (2022)-2 copy.webp",
      gallery: [
        "/Kawman Pharma, Chennai, Tamil Nadu (2022).webp",
        "/Kawman Pharma, Cuddalore Tamil Nadu (2022)-1 copy.webp"
      ],
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;
  const carouselImages = activeProject ? [activeProject.image, ...(activeProject.gallery || [])] : [];

  useEffect(() => {
    if (activeProjectIndex !== null) {
      setCurrentSlideIndex(0);
    }
  }, [activeProjectIndex]);

  useEffect(() => {
    if (activeProjectIndex === null || carouselImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeProjectIndex, carouselImages.length]);

  useEffect(() => {
    if (activeProjectIndex === null) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProjectIndex(null);
      }
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProjectIndex]);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] sm:gap-[16px] md:gap-[24px] lg:gap-[28px] max-w-[1100px] mx-auto">
          {projects.map((project, index) => (
            <FadeIn delay={200 + (index % 3) * 100} direction="up" key={index}>
              <div className="project-aurora-card bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 group flex flex-col min-h-[360px] md:min-h-[450px] lg:min-h-[480px] h-full">
                <div className="relative h-[220px] md:h-[240px] lg:h-[260px] w-full overflow-hidden flex-shrink-0">
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
                    }}
                    className="mt-5 inline-flex items-center justify-center rounded-[14px] bg-[#0A5191] text-white px-5 py-2.5 text-[14px] font-semibold transition-colors hover:bg-[#083D6D]"
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
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-[4px] p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden"
          onClick={() => {
            setActiveProjectIndex(null);
          }}
        >
          <div
            className="w-full max-w-4xl rounded-[32px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh] md:overflow-hidden md:max-h-none animate-badge-pop"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#F1F5F9] relative">
              <div className="flex-1 text-center">
                <h3 className="text-[#1B2236] font-bold text-[20px] md:text-[24px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close details dialog"
                onClick={() => {
                  setActiveProjectIndex(null);
                }}
                className="absolute right-6 md:right-8 w-9 h-9 inline-flex items-center justify-center rounded-[14px] bg-[#F8FAFC] text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1B2236] transition-all duration-300"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Image Carousel Section */}
              <div className="relative w-full lg:w-1/2 p-4 md:p-6 bg-white flex flex-col justify-center">
                <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-md bg-gray-100">
                  {carouselImages.map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      alt={`${activeProject.title} - Image ${idx + 1}`}
                      fill
                      className={`object-cover transition-opacity duration-1000 ease-in-out absolute inset-0 ${idx === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  
                  {/* Carousel Indicators */}
                  {carouselImages.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {carouselImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          aria-label={`Go to slide ${idx + 1}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlideIndex(idx);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? 'w-6 bg-[#0A5191] shadow-sm' : 'w-2 bg-white/70 hover:bg-white shadow-sm'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Details Content Section */}
              <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col bg-[#FDFDFE]">
                <div className="mb-8">
                  <div className="inline-flex items-center rounded-full bg-[#0A5191]/10 text-[#0A5191] border border-[#0A5191]/20 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {activeProject.type}
                  </div>
                  <p className="text-[#475569] text-[16px] leading-[1.8] font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {activeProject.description}
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="rounded-[16px] border border-[#F1F5F9] bg-white p-5 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#94A3B8] mb-2">Location</p>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#0A5191]" />
                      <p className="text-[#1B2236] font-bold text-[15px]">{activeProject.location}</p>
                    </div>
                  </div>
                  
                  <div className="rounded-[16px] border border-[#F1F5F9] bg-white p-5 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#94A3B8] mb-2">Capacity</p>
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-[#0A5191]" />
                      <p className="text-[#1B2236] font-bold text-[15px]">{activeProject.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="rounded-[16px] border border-[#F1F5F9] bg-white p-5 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#94A3B8] mb-2">Commissioned</p>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#0A5191]" />
                      <p className="text-[#1B2236] font-bold text-[15px]">{activeProject.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}