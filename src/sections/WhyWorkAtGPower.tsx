import { FadeIn } from "@/components/FadeIn";
import { TrendingUp, Lightbulb, Users, HeartHandshake, ArrowUpRight } from "lucide-react";

export function WhyWorkAtGPower() {
  const benefits = [
    {
      title: "Professional Growth",
      description: "Advance your career with continuous learning, hands-on industry exposure, and opportunities to take ownership of impactful BESS projects.",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Innovation-Driven Work",
      description: "Be part of solving real-world energy challenges through advanced Battery Energy Storage solutions designed for a smarter and more sustainable future.",
      icon: Lightbulb,
      color: "sky"
    },
    {
      title: "Collaborative Culture",
      description: "Work alongside experienced professionals, engineers, and industry leaders in an environment built on trust, teamwork, and shared success.",
      icon: Users,
      color: "indigo"
    },
    {
      title: "Employee Wellbeing",
      description: "We value our people with competitive benefits, a supportive work environment, and a strong focus on work-life balance and long-term career satisfaction.",
      icon: HeartHandshake,
      color: "blue"
    },
  ];

  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#0A5191]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-[#38BDF8]/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#0A5191 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <FadeIn delay={100} direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A5191]/10 border border-[#0A5191]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0A5191] animate-pulse" />
                <span className="text-[#0A5191] text-[13px] font-bold tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Join Our Team</span>
              </div>
              <h2
                className="font-bold text-[#0F172A] mb-8"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: '1.1',
                }}
              >
                Why Work at <span className="text-[#0A5191] whitespace-nowrap">G-Power?</span>
              </h2>
              <p
                className="text-[#64748B] mb-12 max-w-[500px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(16px, 1.1vw, 20px)',
                  lineHeight: '1.7',
                }}
              >
                Be part of a team shaping the future of energy storage in India. At G-Power, your work creates real industry impact in a collaborative and forward-thinking environment.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Grid of Benefit Cards (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={200 + (i * 100)} direction="up">
                <div className="group relative h-full p-6 lg:p-8 rounded-[24px] border border-[#E2E8F0] bg-white/60 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0A5191]/20 flex flex-col">
                  <div className="flex items-start justify-between mb-4 lg:mb-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[14px] bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#0A5191]/10 group-hover:border-[#0A5191]/20 transition-all duration-400">
                        {(() => {
                            const Icon = benefit.icon;
                            return <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#64748B] group-hover:text-[#0A5191] transition-colors" />;
                        })()}
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-[#0A5191]" />
                    </div>
                  </div>
                  
                  <h4
                    className="font-bold text-[#0F172A] mb-2 lg:mb-3 group-hover:text-[#0A5191] transition-colors duration-300"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '18px',
                      lineHeight: '1.4',
                    }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className="text-[#64748B] text-[14px] leading-relaxed line-clamp-3"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
