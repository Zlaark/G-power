'use client';
import { useState } from 'react';

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

// Duplicate cards for seamless infinite loop
const loopedCards = [...cards, ...cards];

export const FeaturesCarousel = () => {
    const [paused, setPaused] = useState(false);

    return (
        <section className="relative w-full bg-white pt-8 pb-8 md:pt-[80px] md:pb-[60px] lg:pt-[100px] lg:pb-[70px] overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative w-full flex flex-col gap-[30px] md:gap-[40px]">

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scrollLeft {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .carousel-track {
                        animation: scrollLeft 18s linear infinite;
                    }
                    .carousel-track.paused {
                        animation-play-state: paused;
                    }
                `}} />

                {/* Scrolling Track */}
                <div
                    className="w-full overflow-hidden px-4 md:px-12 lg:px-[102px]"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className={`carousel-track flex gap-5 md:gap-10 lg:gap-[74px]${paused ? ' paused' : ''}`}
                        style={{ width: 'max-content' }}
                    >
                        {loopedCards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex flex-col gap-3 md:gap-6 lg:gap-[30px]"
                                style={{ width: 'clamp(220px, calc(33vw - 102px), 480px)' }}
                            >
                                {/* Image Card */}
                                <div className="w-full h-[35vh] max-h-[350px] md:h-[40vh] lg:h-[50vh] lg:max-h-[500px] min-h-[220px] rounded-[16px] lg:rounded-[20px] overflow-hidden relative bg-white shadow-sm group">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-3/4 pointer-events-none"
                                        style={{ background: 'linear-gradient(360deg, #000000 0%, rgba(0,0,0,0) 100%)' }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1 md:gap-[12px] w-full px-2 md:px-0">
                                    <h2
                                        className="font-semibold text-base md:text-xl lg:text-[26px] leading-tight lg:leading-[34px] text-[#121010]"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {card.title}
                                    </h2>
                                    <p
                                        className="text-[#4A4A4A] font-medium text-xs md:text-base lg:text-[16px] leading-snug md:leading-relaxed lg:leading-[26px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Indicator Lines */}
                <div className="flex items-center gap-2 md:gap-[30px] px-4 md:px-12 lg:px-[102px]">
                    {cards.map((_, index) => (
                        <div
                            key={index}
                            className="w-10 md:w-[66.5px] h-0"
                            style={{
                                borderWidth: index === 0 ? '4px' : '3px',
                                borderStyle: 'solid',
                                borderColor: index === 0 ? '#EF3C38' : '#B1B1B1',
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
