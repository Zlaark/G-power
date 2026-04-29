import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const AboutHero = () => {
    return (
        <section className="relative h-[70vh] min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/Banner 2 (Our Partners Page).webp"
                    alt="About G-Power Background"
                    fill
                    className="object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>
            
            
            <div className="container relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto text-center flex flex-col items-center justify-center h-full max-w-4xl">
                <FadeIn delay={100} direction="up">
                    <h1 
                        className="text-white font-semibold leading-tight mb-6 drop-shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 54px)' }}
                    >
                        About G-Power
                    </h1>
                </FadeIn>
                <FadeIn delay={300} direction="up">
                    <p 
                        className="text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 2vw, 22px)' }}
                    >
                        Powering the Next Generation of Energy
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
