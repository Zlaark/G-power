import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

interface SleekDurableProps {
    showButton?: boolean;
}

export const SleekDurable = ({ showButton = true }: SleekDurableProps) => {

    return (
        <section className="relative w-full overflow-hidden rounded-none">
            <div className="relative w-full">


                {/* Background Image Container */}
                <div className="w-full h-[75vh] md:h-[100vh] min-h-[500px] md:min-h-[700px] max-h-[1100px] relative overflow-hidden rounded-none">
                    <img
                        src="/Sleek and Durable (Home Page).webp"
                        alt="Sleek and Durable Solar Panels"
                        className="w-full h-full object-cover rounded-none"
                    />

                    {/* Base gradient for general readability */}
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-70" />

                    {/* CTA Button at Bottom - Only show if showButton is true */}
                    {showButton && (
                        <FadeIn delay={200} direction="up" className="absolute left-0 right-0 bottom-0 px-[20px] md:px-[80px] pb-[40px] md:pb-[70px] flex justify-center md:justify-start">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-[28px] py-[14px] md:py-[16px] font-semibold text-white bg-[#0A5191] border border-[#0A5191] rounded-[14px] transition-all hover:bg-[#083D6E] hover:-translate-y-[2px] shadow-lg shadow-[#0A5191]/20"
                                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                            >
                                Learn More About Us
                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </Link>
                        </FadeIn>
                    )}
                </div>

            </div>
        </section>
    );
};
