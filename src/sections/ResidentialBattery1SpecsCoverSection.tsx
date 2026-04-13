import Image from "next/image";

const keyFeatures = [
  "Compact and elegant design",
  "Quiet operation",
  "Easy installation",
  "10-year warranty",
];

export function ResidentialBattery1SpecsCoverSection() {
  return (
    <section className="rounded-[14px] bg-[#F5F6F8] border border-[#E7EAF0] overflow-hidden mb-7">
      <div className="bg-gradient-to-r from-[#0A5191] to-[#D7282B] px-6 md:px-8 py-6 md:py-7">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="w-8 h-8 rounded-[8px] bg-white/20 text-white flex items-center justify-center font-semibold text-sm">
            G
          </span>
          <p
            className="text-white/95 font-medium"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}
          >
            Technical Datasheet
          </p>
        </div>

        <h2
          className="text-white font-semibold mb-1"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(30px, 3vw, 44px)" }}
        >
          BYD Battery-Box Premium HVS
        </h2>
        <p
          className="text-white/95"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 16px)" }}
        >
          Premium home energy storage system with high voltage design
        </p>
      </div>

      <div className="p-6 md:p-8">
        <div className="relative w-full rounded-[12px] overflow-hidden mb-6" style={{ aspectRatio: "16/5.3" }}>
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
            alt="BYD Battery-Box Premium HVS"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-[2px] h-7 bg-[#0A5191]" />
          <h3
            className="text-[#0F172A] font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 1.8vw, 30px)" }}
          >
            Key Features
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {keyFeatures.map((feature) => (
            <div key={feature} className="rounded-[10px] bg-[#F0F2F5] px-4 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0A5191] shrink-0" />
              <p
                className="text-[#334155]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 15px)" }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[12px] border border-[#2E7DBC] bg-[#E1EBF5] px-5 py-5 text-center">
          <p
            className="text-[#64748B] mb-1"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 14px)" }}
          >
            Maximum Capacity
          </p>
          <p
            className="text-[#0A5191] font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 3.8vw, 54px)", lineHeight: 1.05 }}
          >
            16.6 kWh
          </p>
        </div>
      </div>

      <div className="bg-[#ECEFF3] border-t border-[#DDE3EC] py-4">
        <p
          className="text-center text-[#64748B]"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
        >
          Page 1 of 2
        </p>
      </div>
    </section>
  );
}