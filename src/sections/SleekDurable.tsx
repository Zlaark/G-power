"use client";
import { useEffect, useRef } from 'react';
import { FadeIn } from '@/components/FadeIn';

export const SleekDurable = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            sectionRef.current.style.setProperty('--x', `${x}px`);
            sectionRef.current.style.setProperty('--y', `${y}px`);
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden group">
            <div className="mx-auto max-w-[1920px] relative">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes extremeSlowZoom {
                        0%, 100% { transform: scale(1.02); }
                        50% { transform: scale(1.1); }
                    }
                    @keyframes glowingTextPass {
                        0% { background-position: -200% center; text-shadow: 0 0 10px rgba(239, 60, 56, 0.2); }
                        50% { text-shadow: 0 0 25px rgba(239, 60, 56, 0.8); }
                        100% { background-position: 200% center; text-shadow: 0 0 10px rgba(239, 60, 56, 0.2); }
                    }
                    @keyframes continuousFloatX {
                        0%, 100% { transform: translate(0px, 0px); }
                        25% { transform: translate(5px, -5px); }
                        50% { transform: translate(0px, -10px); }
                        75% { transform: translate(-5px, -5px); }
                    }
                    @keyframes continuousFloatY {
                        0%, 100% { transform: translate(0px, 0px); }
                        50% { transform: translate(0px, -8px); }
                    }
                    .animate-extreme-zoom {
                        animation: extremeSlowZoom 30s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    }
                    .interactive-glow::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: radial-gradient(circle 600px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.08), transparent 40%);
                        opacity: 0;
                        transition: opacity 0.5s;
                        pointer-events: none;
                        z-index: 10;
                    }
                    section.group:hover .interactive-glow::before {
                        opacity: 1;
                    }
                    .animate-glow-heading {
                        background: linear-gradient(90deg, #FFFFFF 0%, #EF3C38 30%, #EF3C38 70%, #FFFFFF 100%);
                        background-size: 200% auto;
                        color: transparent;
                        -webkit-background-clip: text;
                        background-clip: text;
                        animation: glowingTextPass 8s linear infinite, continuousFloatX 15s ease-in-out infinite;
                    }
                    .animate-float-paragraph {
                        animation: continuousFloatY 10s ease-in-out infinite;
                        transition: text-shadow 0.3s ease;
                    }
                    .glass-panel-hover {
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    section.group:hover .glass-panel-hover {
                        background: rgba(0, 0, 0, 0.6);
                        backdrop-filter: blur(8px);
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                        padding-top: 40px;
                        padding-bottom: 70px;
                        border-radius: 20px 20px 0 0;
                        transform: translateY(-20px);
                    }
                `}} />

                {/* Background Image Container */}
                <div className="w-full h-auto min-h-[50vh] md:min-h-[500px] md:h-[80vh] max-h-[1008px] relative overflow-hidden interactive-glow">
                    <img
                        src="/home4.png"
                        alt="Sleek and Durable Solar Panels"
                        className="w-full h-full object-cover animate-extreme-zoom"
                    />

                    {/* Base gradient for general readability */}
                    <div className="absolute inset-x-0 bottom-0 h-full md:h-[80vh] max-h-[800px] bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-70" />

                    {/* Interactive Glass Panel for Text */}
                    <FadeIn delay={200} direction="up" className="absolute left-0 right-0 md:left-[30px] lg:left-[80px] md:right-[30px] lg:right-[80px] bottom-0 px-[20px] md:px-0 pb-[30px] md:pb-[70px] pt-[20px] mb-0 md:mb-[-20px] transition-all duration-500 ease-out md:glass-panel-hover" style={{ backgroundColor: 'transparent' }}>
                        <div className="max-w-[1200px] flex flex-col items-start gap-[10px] md:gap-[16px] px-0 md:px-[20px] lg:px-[40px] pt-[10px]">
                            <h2
                                className="font-semibold leading-tight md:leading-[49px] w-full animate-glow-heading cursor-default tracking-wide"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 6vw, 40px)' }}
                            >
                                Sleek and Durable
                            </h2>
                            <p
                                className="text-white/90 font-medium leading-normal md:leading-[34px] w-full md:pr-[140px] animate-float-paragraph cursor-default group-hover:text-white"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 3.5vw, 28px)' }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
