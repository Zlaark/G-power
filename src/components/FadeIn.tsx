import { CSSProperties } from 'react';

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
    className = '',
    style = {},
}: FadeInProps) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};
