import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const AboutHero = () => {
    return (
        <section className="py-[80px] sm:py-[100px] lg:py-[120px] text-white relative overflow-hidden px-4 sm:px-6 lg:px-[80px] xl:px-[120px]" style={{ minHeight: '80vh' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Banner 2 (Our Partners Page).webp"
                    alt="About G-Power Background"
                    fill
                    className="object-cover opacity-100"
                />
            </div>
            
            
            <div className="mx-auto max-w-[1920px] relative z-10 text-center flex flex-col items-center">
                <FadeIn delay={100} direction="up" className="w-[70%] max-w-[1000px] px-2">
                    <h2 
                        className="font-semibold text-white mb-[20px] lg:mb-[30px]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)' }}
                    >
                        About G-Power
                    </h2>
                    <p 
                        className="text-white/90 mb-[40px] lg:mb-[50px] font-medium"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 20px)' }}
                    >
                        Powering the Next Generation of Energy
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
