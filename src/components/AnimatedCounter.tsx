'use client';
import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    value: string;
    duration?: number;
}

export const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
    const endValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const hasPlus = value.includes('+');
    
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // Only animate once
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || isNaN(endValue)) return;
        
        let start = 0;
        const increment = endValue / (duration / 16); // 60fps approx
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
        
        return () => clearInterval(timer);
    }, [endValue, duration, isVisible]);

    if (isNaN(endValue)) {
        return <span>{value}</span>;
    }

    return (
        <span ref={ref}>
            {count}{hasPlus && '+'}
        </span>
    );
};
