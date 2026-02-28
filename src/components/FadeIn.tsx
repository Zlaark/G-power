'use client';
import { useEffect, useRef, useState, CSSProperties } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    style?: CSSProperties;
    duration?: number;
    threshold?: number;
}

export const FadeIn = ({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    style = {},
    duration = 450,
    threshold = 0.1,
}: FadeInProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const directionMap: Record<string, { x: string; y: string }> = {
        up: { x: '0', y: '22px' },
        down: { x: '0', y: '-22px' },
        left: { x: '28px', y: '0' },
        right: { x: '-28px', y: '0' },
        none: { x: '0', y: '0' },
    };

    const { x, y } = directionMap[direction] || directionMap.up;

    const animStyle: CSSProperties = {
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(${x}, ${y}, 0)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
    };

    return (
        <div ref={ref} className={className} style={animStyle}>
            {children}
        </div>
    );
};
