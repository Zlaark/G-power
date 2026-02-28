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

const TOTAL = cards.length;
// Duplicate cards for seamless infinite loop
const extendedCards = [...cards, ...cards];
const SLIDE_DURATION = 3000; // 3 seconds between slides
const TRANSITION_MS = 700;   // animation duration

export const FeaturesCarousel = () => {
    const [position, setPosition] = useState(0);
    const [hasTransition, setHasTransition] = useState(true);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Responsive visible count
    const getVisibleCount = useCallback(() => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }, []);

    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const update = () => setVisibleCount(getVisibleCount());
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [getVisibleCount]);

    // Responsive gap
    const getGap = useCallback(() => {
        if (typeof window === 'undefined') return 74;
        if (window.innerWidth < 768) return 20;
        if (window.innerWidth < 1024) return 40;
        return 74;
    }, []);

    const [gap, setGap] = useState(74);

    useEffect(() => {
        const update = () => setGap(getGap());
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [getGap]);

    // Advance one card
    const slideNext = useCallback(() => {
        setHasTransition(true);
        setPosition((prev) => prev + 1);
    }, []);

    // Handle seamless reset when we reach the duplicate set
    useEffect(() => {
        if (position === TOTAL) {
            // After the transition animation finishes, snap back to 0
            const resetTimer = setTimeout(() => {
                setHasTransition(false);
                setPosition(0);
            }, TRANSITION_MS);
            return () => clearTimeout(resetTimer);
        }
    }, [position]);

    // Re-enable transition after snapping back to 0
    useEffect(() => {
        if (position === 0 && !hasTransition) {
            // Use rAF to ensure the browser has painted position 0 first
            const frameId = requestAnimationFrame(() => {
                setHasTransition(true);
            });
            return () => cancelAnimationFrame(frameId);
        }
    }, [position, hasTransition]);

    // Auto-play timer
    useEffect(() => {
        if (paused) return;

        timerRef.current = setTimeout(() => {
            slideNext();
        }, SLIDE_DURATION);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [paused, position, hasTransition, slideNext]);

    const goTo = (index: number) => {
        setHasTransition(true);
        setPosition(index);
    };

    // Which original card index is "active"
    const activeIndex = position % TOTAL;

    // Card width and slide offset calculations
    const cardWidth = `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`;
    const translateX = `translateX(calc(-${position} * (((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount}) + ${gap}px)))`;

    return (
        <section className="relative w-full bg-white pt-8 pb-8 md:pt-[80px] md:pb-[60px] lg:pt-[100px] lg:pb-[70px] overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative w-full flex flex-col gap-[30px] md:gap-[40px]">

                {/* Carousel Track */}
                <div
                    className="w-full overflow-hidden px-4 md:px-12 lg:px-[102px]"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div
                        className="flex"
                        style={{
                            gap: `${gap}px`,
                            transform: translateX,
                            transition: hasTransition ? `transform ${TRANSITION_MS}ms ease-in-out` : 'none',
                        }}
                    >
                        {extendedCards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex flex-col gap-3 md:gap-6 lg:gap-[30px]"
                                style={{ width: cardWidth }}
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
                            onClick={() => goTo(index)}
                            className="w-10 md:w-[66.5px] h-0 cursor-pointer"
                            style={{
                                borderWidth: index === activeIndex ? '4px' : '3px',
                                borderStyle: 'solid',
                                borderColor: index === activeIndex ? '#EF3C38' : '#B1B1B1',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
