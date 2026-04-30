import { Mail, MapPin, Phone } from "lucide-react";

const generalParameters = [
  { key: "Usable Energy", value: "12.8 kWh" },
  { key: "Rated Power", value: "3.5 kW" },
  { key: "Nominal Voltage", value: "48 VDC" },
  { key: "Round Trip Efficiency", value: "≥95%" },
];

const terms = [
  "Specifications subject to change without notice",
  "Performance data based on standard test conditions",
  "Installation must be performed by certified professionals",
  "Warranty terms apply as per product documentation",
  "For latest specifications, please contact GPower",
];

export function ResidentialBattery2SpecsSheetSection() {
  return (
    <section className="rounded-[14px] bg-[#F5F6F8] border border-[#E7EAF0] overflow-hidden flex flex-col justify-between card-shimmer card-soft-hover">
      <div className="p-5 md:p-8 flex-1">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-[2px] h-7 bg-[#0A5191]" />
        <h3
          className="text-[#0F172A] font-semibold"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(20px, 2vw, 30px)" }}
        >
          Detailed Technical Parameters
        </h3>
      </div>

      <h4
        className="text-[#0F172A] font-semibold mb-3"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)" }}
      >
        General Parameters
      </h4>
      <div className="rounded-[8px] overflow-hidden border border-[#D9DEE7] mb-6">
        <table className="w-full">
          <tbody>
            {generalParameters.map((row, index) => (
              <tr key={row.key} className={index % 2 === 0 ? "bg-[#F0F2F5]" : "bg-[#EAEEF2]"}>
                <td
                  className="px-4 md:px-5 py-3 text-[#0F172A] border-r border-[#D9DEE7] w-3/5"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 15px)" }}
                >
                  {row.key}
                </td>
                <td
                  className="px-4 md:px-5 py-3 text-[#334155]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1vw, 15px)" }}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-[10px] bg-[#F0F2F5] border border-[#E3E7EE] p-4 md:p-5 mb-7">
        <h4
          className="text-[#0F172A] font-semibold mb-3"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)" }}
        >
          Terms &amp; Conditions
        </h4>
        <div className="flex flex-col gap-2">
          {terms.map((term) => (
            <p
              key={term}
              className="text-[#475569] transition-transform duration-300 hover:translate-x-2 hover:text-[#0A5191]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
            >
               • {term}
            </p>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#D7DEE7] mb-5" />

      <h4
        className="text-[#0F172A] font-semibold mb-3"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(16px, 1.3vw, 20px)" }}
      >
        Contact Information
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
        <div className="flex items-start gap-3">
          <span className="w-8 h-8 rounded-[8px] bg-[#E1EBF5] flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-[#0A5191]" />
          </span>
          <div>
            <p
              className="text-[#94A3B8] leading-none mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
            >
              Email
            </p>
            <p
              className="text-[#0F172A]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
            >
              info@gpower.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-8 h-8 rounded-[8px] bg-[#E1EBF5] flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-[#0A5191]" />
          </span>
          <div>
            <p
              className="text-[#94A3B8] leading-none mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
            >
              Phone
            </p>
            <p
              className="text-[#0F172A]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
            >
              +91 123 456 7890
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-8 h-8 rounded-[8px] bg-[#E1EBF5] flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-[#0A5191]" />
          </span>
          <div>
            <p
              className="text-[#94A3B8] leading-none mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px" }}
            >
              Location
            </p>
            <p
              className="text-[#0F172A]"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
            >
              India
            </p>
          </div>
        </div>
      </div>

      <p
        className="text-center text-[#64748B]"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(12px, 0.95vw, 14px)" }}
      >
        Page 2 of 2
      </p>
      </div>
    </section>
  );
}