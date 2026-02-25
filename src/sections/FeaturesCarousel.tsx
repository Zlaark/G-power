'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

const cards = [
    {
        image: '/home5.png',
        title: 'Simple Aesthetic',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/home6.png',
        title: 'Easy Installation',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/home7.png',
        title: 'Weather Resistant',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/home5.png',
        title: 'Low Profile',
        description: 'Rail-free mounting keeps panels close to your roof and panel skirts hide hardware and edges from view.',
    },
];

export const FeaturesCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning]);

    const goNext = useCallback(() => {
        goToSlide(activeIndex < cards.length - 1 ? activeIndex + 1 : 0);
    }, [activeIndex, goToSlide]);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(goNext, 4000);
        return () => clearInterval(interval);
    }, [goNext]);

    return (
        <section className="relative w-full bg-white pt-4 pb-4 md:pt-[60px] md:pb-[40px] lg:pt-[80px] lg:pb-[50px] overflow-hidden min-h-screen max-h-screen flex flex-col justify-center">
            {/* Contact Us placeholder (if this is overlapping) should ideally be in a header */}
            <div className="mx-auto max-w-[1920px] relative w-full h-full flex flex-col justify-center">

                {/* Cards Container */}
                <div className="relative w-full overflow-hidden px-4 md:px-12 lg:px-[102px]">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .carousel-container {
                            --gap: 1.25rem; /* 20px on mobile */
                            --card-width: calc(100vw - 2.5rem);
                        }
                        @media (min-width: 768px) {
                            .carousel-container {
                                --gap: 2.5rem; /* 40px on md */
                                --card-width: calc(50vw - 4rem); 
                            }
                        }
                        @media (min-width: 1024px) {
                            .carousel-container {
                                --gap: 74px; /* 74px on lg */
                                --card-width: calc(50vw - 102px - 37px); /* 50% minus padding and half gap */
                            }
                        }
                        @media (min-width: 1536px) {
                            .carousel-container {
                                --card-width: 631px;
                            }
                        }
                        @keyframes cardFloat {
                            0%, 100% { transform: translateY(0); filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05)); }
                            50% { transform: translateY(-12px); filter: drop-shadow(0 15px 20px rgba(0,0,0,0.1)); }
                        }
                        @keyframes imageZoomSlow {
                            0%, 100% { transform: scale(1); }
                            50% { transform: scale(1.08); }
                        }
                        @keyframes continuousShine {
                            0% { background-position: -200% center; }
                            100% { background-position: 200% center; }
                        }
                        @keyframes activeLinePulse {
                            0%, 100% { box-shadow: 0 0 5px rgba(239, 60, 56, 0.4); width: 66.5px; }
                            50% { box-shadow: 0 0 18px rgba(239, 60, 56, 0.8); width: 85px; }
                        }
                        .animate-card-hover {
                            animation: cardFloat 7s ease-in-out infinite;
                            transition: all 0.5s ease;
                        }
                        .animate-card-hover:hover {
                            animation-play-state: paused;
                            transform: translateY(-15px) scale(1.02);
                            filter: drop-shadow(0 25px 30px rgba(0,0,0,0.15));
                        }
                        .animate-image-zoom {
                            animation: imageZoomSlow 18s ease-in-out infinite;
                        }
                        .animate-text-shine {
                            background: linear-gradient(to right, #121010 20%, #EF3C38 50%, #121010 80%);
                            background-size: 200% auto;
                            color: transparent;
                            -webkit-background-clip: text;
                            background-clip: text;
                            animation: continuousShine 8s linear infinite;
                        }
                        .animate-active-line {
                            animation: activeLinePulse 3s ease-in-out infinite;
                        }
                    `}} />
                    <div
                        ref={containerRef}
                        className="carousel-container flex transition-transform duration-[600ms] ease-in-out gap-5 md:gap-10 lg:gap-[74px]"
                        style={{
                            // CSS variable fallback approach for responsive translation
                            // We use CSS custom properties that adapt to breakpoints
                            transform: `translateX(calc(-${activeIndex} * (var(--card-width) + var(--gap))))`
                        }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex flex-col gap-3 md:gap-6 lg:gap-[30px] animate-card-hover"
                                style={{
                                    width: 'var(--card-width)',
                                    maxWidth: '631px',
                                    animationDelay: `${index * 0.7}s`
                                }}
                            >
                                {/* Image Card */}
                                <div className="w-full h-[30vh] max-h-[300px] md:h-[35vh] lg:h-[45vh] lg:max-h-[450px] min-h-[200px] rounded-[16px] lg:rounded-[20px] overflow-hidden relative bg-white shadow-sm group">
                                    <div className="w-full h-full overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover animate-image-zoom transition-transform duration-[800ms] group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Dark gradient overlay at bottom */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-3/4"
                                        style={{ background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)' }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1 md:gap-[12px] w-full px-2 md:px-0">
                                    <h2
                                        className="font-semibold text-lg md:text-2xl lg:text-[32px] leading-tight lg:leading-[40px] animate-text-shine"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {card.title}
                                    </h2>
                                    <p
                                        className="text-[#4A4A4A] font-medium text-xs md:text-lg lg:text-[20px] leading-snug md:leading-relaxed lg:leading-[30px] transition-colors duration-500 hover:text-[#121010]"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrow Button */}
                <button
                    onClick={goNext}
                    className="absolute right-4 md:right-8 lg:right-[102px] top-[30%] md:top-[250px] w-12 h-12 md:w-[76px] md:h-[76px] rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-all z-10 -translate-y-1/2"
                >
                    <svg className="w-6 h-6 md:w-[31px] md:h-[24px]" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2L29 12M29 12L19 22M29 12H2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Progress Indicator Lines */}
                <div className="flex items-center gap-2 md:gap-[30px] px-4 md:px-12 lg:px-[102px] mt-4 md:mt-[40px]">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="transition-all duration-300 py-2"
                        >
                            <div
                                className={`w-10 md:w-[66.5px] h-0 transition-all duration-300 ${index === activeIndex ? 'animate-active-line' : ''}`}
                                style={{
                                    borderWidth: index === activeIndex ? '4px' : '3px',
                                    borderStyle: 'solid',
                                    borderColor: index === activeIndex ? '#EF3C38' : '#B1B1B1',
                                }}
                            />
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
};
