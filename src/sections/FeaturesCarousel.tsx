'use client';
import { useState, useEffect, useCallback } from 'react';

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
        <section className="relative w-full bg-white py-[60px] overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative">

                {/* Cards Container */}
                <div className="relative w-full overflow-hidden px-[102px]">
                    <div
                        className="flex gap-[74px] transition-transform duration-[600ms] ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * (631 + 74)}px)` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[631px] flex flex-col gap-[86px]"
                            >
                                {/* Image Card */}
                                <div className="w-[631px] h-[576px] rounded-[20px] overflow-hidden relative bg-white">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Dark gradient overlay at bottom */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-[474px]"
                                        style={{ background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)' }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-[23px] w-full">
                                    <h2
                                        className="text-[#121010] font-semibold leading-[49px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                                    >
                                        {card.title}
                                    </h2>
                                    <p
                                        className="text-[#121010] font-medium leading-[34px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
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
                    className="absolute right-[102px] top-[250px] w-[76px] h-[76px] rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-all z-10"
                >
                    <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2L29 12M29 12L19 22M29 12H2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Progress Indicator Lines */}
                <div className="flex items-center gap-[30px] px-[102px] mt-[60px]">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="transition-all duration-300"
                        >
                            <div
                                className="w-[66.5px] h-0 transition-all duration-300"
                                style={{
                                    borderWidth: index === activeIndex ? '7px' : '3px',
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
