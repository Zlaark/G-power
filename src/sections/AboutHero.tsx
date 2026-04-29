import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const AboutHero = () => {
    return (
        <section className="relative h-[70vh] min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-[80px] xl:px-[120px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/Banner 2 (Our Partners Page).webp"
                    alt="About G-Power Background"
                    fill
                    className="object-cover opacity-100"
                />
            </div>
            
            
            <div className="container relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto text-center flex flex-col items-center justify-center h-full max-w-4xl">
                <FadeIn delay={100} direction="up" className="w-full">
                    <h2 
                        className="font-semibold text-white mb-[20px] lg:mb-[30px] drop-shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)' }}
                    >
                        About G-Power
                    </h2>
                    <p 
                        className="text-white/90 mb-[40px] lg:mb-[50px] font-medium drop-shadow-md"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 20px)' }}
                    >
                        Powering the Next Generation of Energy
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
