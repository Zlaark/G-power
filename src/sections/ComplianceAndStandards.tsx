import React from 'react';
import { Shield, CheckCircle, Globe, Zap, FileText } from 'lucide-react';

export function RegulatoryCompliance() {
  const standards = [
    {
      name: "NFPA",
      desc: "Fire Safety",
      icon: (
        <div className="w-16 h-16 border-2 border-[#1E293B] rounded-[8px] flex flex-col items-center justify-center p-1 relative overflow-hidden bg-white shadow-sm transition-shadow group-hover:shadow-md">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1E293B]" />
          <Zap className="w-8 h-8 text-[#E11D48] fill-[#E11D48]" />
          <span className="text-[10px] font-bold text-[#1E293B] mt-1">NFPA®</span>
        </div>
      ),
    },
    {
      name: "RoHS",
      desc: "Hazardous Materials",
      icon: (
        <div className="w-16 h-16 flex flex-col items-center justify-center p-1 bg-white border border-[#E2E8F0] rounded-[8px] shadow-sm transition-shadow group-hover:shadow-md">
          <div className="flex items-center gap-1 mb-1">
             <div className="w-5 h-8 bg-[#22C55E] rounded-full rotate-45 flex items-center justify-center">
                <div className="w-1 h-6 bg-white/30 rounded-full" />
             </div>
             <div className="flex flex-col leading-none">
                <span className="text-[12px] font-bold text-[#1E293B]">RoHS</span>
                <span className="text-[8px] text-[#1E293B]">compliant</span>
             </div>
          </div>
        </div>
      ),
    },
    {
      name: "UN 38.3",
      desc: "Battery Safety",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center relative bg-white transition-transform group-hover:scale-105">
          <div 
            className="w-14 h-14 bg-[#1E3A8A] flex flex-col items-center justify-center p-1 text-white shadow-lg"
            style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
          >
            <span className="text-[6px] leading-tight">Safety tested</span>
            <span className="text-[10px] font-bold">UN 38.3</span>
            <span className="text-[8px]">Passed</span>
            <div className="h-[1px] w-full bg-white/50 my-0.5" />
            <span className="text-[6px]">Certified</span>
          </div>
        </div>
      ),
    },
    {
      name: "UL",
      desc: "Global Standards",
      icon: (
        <div className="w-16 h-16 flex flex-col items-center justify-center p-1 bg-white border border-[#E2E8F0] rounded-full shadow-sm transition-shadow group-hover:shadow-md">
          <div className="w-11 h-11 border-2 border-[#E11D48] rounded-full flex flex-col items-center justify-center">
            <span className="text-[16px] font-bold text-[#E11D48] leading-none">UL</span>
          </div>
          <div className="flex flex-col items-center leading-none mt-0.5">
            <span className="text-[5px] text-[#1E293B] uppercase font-bold tracking-tighter">Underwriters</span>
          </div>
        </div>
      ),
    },
    {
      name: "IEC",
      desc: "Electrical Quality",
      icon: (
        <div className="w-16 h-16 bg-[#1D4ED8] flex flex-col items-center justify-center p-1 rounded-[4px] text-white shadow-md transition-shadow group-hover:shadow-lg">
          <span className="text-[18px] font-bold leading-none italic">IEC</span>
          <div className="w-10 h-[1px] bg-white/80 my-1" />
          <div className="flex gap-0.5">
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white rounded-[20px] p-10 md:p-14 border border-[#0A5191]/15 card-shimmer card-soft-hover w-full relative overflow-hidden shadow-[0_20px_50px_rgba(10,81,145,0.05)]">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A5191] via-[#4a90e2] to-[#0A5191]" />
      
      <div className="text-center mb-14">
        <h2 className="text-[#0A5191] font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)" }}>
          Compliance & Standards
        </h2>
        <div className="w-20 h-1 bg-[#0A5191] mx-auto rounded-full mb-6" />
        <p className="text-[#475569] max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
          Our products undergo rigorous testing and certification to meet the highest global safety and quality requirements.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
        {standards.map((standard) => (
          <div key={standard.name} className="group flex flex-col items-center gap-4 transition-all duration-300">
            <div className="transition-transform duration-500 group-hover:-translate-y-2">
              {standard.icon}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#0F172A] font-bold text-sm tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>{standard.name}</span>
              <span className="text-[#64748B] text-[10px] font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{standard.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ISOCertifications() {
  const isoCertifications = [
    { id: "9001", label: "Quality" },
    { id: "14001", label: "Environment" },
    { id: "27001", label: "IT Security" },
    { id: "45001", label: "Safety" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A5191] via-[#083D6D] to-[#06294B] rounded-[14px] p-8 md:p-12 border border-[#0A5191]/30 group w-full">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px] -ml-32 -mb-32" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 border border-white/20 shadow-inner">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-white font-bold leading-tight mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 4.5vw, 54px)" }}>
            ISO
          </h2>
          <p className="text-white/80 font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "17px" }}>
            Holding 4 global certifications
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-auto">
          {isoCertifications.map((iso) => (
            <div 
              key={iso.id} 
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6 flex flex-col items-center justify-center gap-1.5 transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group/card"
            >
              <span className="text-white font-bold text-2xl tracking-tight group-hover/card:scale-110 transition-transform duration-300">{iso.id}</span>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">{iso.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Keep the original export for backward compatibility but update it to use the new components
export function ComplianceAndStandards() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <RegulatoryCompliance />
      <ISOCertifications />
    </div>
  );
}

