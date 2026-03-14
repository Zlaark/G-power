import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { MapPin, Zap, Calendar } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Mumbai Solar Park",
      location: "Mumbai, Maharashtra",
      capacity: "50 MW",
      year: "2025",
      type: "Utility Scale",
      image: "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Tech Park EV Charging Network",
      location: "Bangalore, Karnataka",
      capacity: "200 Charging Points",
      year: "2024",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Wind Farm Project",
      location: "Gujarat",
      capacity: "100 MW",
      year: "2024",
      type: "Utility Scale",
      image: "https://images.unsplash.com/photo-1660760727016-2f0d1931ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Industrial Battery Storage",
      location: "Pune, Maharashtra",
      capacity: "25 MWh",
      year: "2025",
      type: "Industrial",
      image: "https://images.unsplash.com/photo-1766639214308-759e9993574d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Rooftop Solar Installation",
      location: "Delhi NCR",
      capacity: "5 MW",
      year: "2024",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Residential Solar Community",
      location: "Hyderabad, Telangana",
      capacity: "2 MW",
      year: "2025",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  return (
    <section id="featured-projects" className="py-[56px] sm:py-[64px] lg:py-[100px] bg-[#FBFBFB] px-4 sm:px-6 md:px-[90px] lg:px-[120px]">
      <div className="mx-auto max-w-[1920px]">
        <FadeIn delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-[60px] lg:mb-[80px]">
            <h2 
              className="font-semibold text-[#121010] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              Featured Projects
            </h2>
            <p 
              className="text-[#121010]/80 font-medium leading-[1.6]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 1.8vw, 18px)' }}
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
                      className="inline-block bg-[#ff4d4d] text-white font-medium px-[16px] py-[6px] rounded-full"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px' }}
                    >
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 
                    className="font-semibold text-[#121010] mb-[8px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(18px, 2vw, 22px)' }}
                  >
                    {project.title}
                  </h3>
                  
                  <div className="mt-auto flex flex-col gap-[4px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 text-[#EF3C38]">
                        <MapPin size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#64748b] font-medium text-[14px]">{project.location}</span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 text-[#EF3C38]">
                        <Zap size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#64748b] font-medium text-[14px]">{project.capacity}</span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 text-[#EF3C38]">
                        <Calendar size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#64748b] font-medium text-[14px]">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}