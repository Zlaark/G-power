'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    style?: CSSProperties;
    duration?: number;
}

export const FadeIn = ({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    style = {},
    duration = 0.8
}: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    let transform = 'translateY(40px)';
    if (direction === 'down') transform = 'translateY(-40px)';
    if (direction === 'left') transform = 'translateX(40px)';
    if (direction === 'right') transform = 'translateX(-40px)';
    if (direction === 'none') transform = 'none';

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : transform,
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
};
