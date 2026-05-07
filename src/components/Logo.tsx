/**
 * G-Power SVG Logo Component
 * Clean logo without blue fill in the circular "G" emblem
 */

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

export const Logo = ({ className = '', variant = 'dark' }: LogoProps) => {
    const textColor = variant === 'light' ? '#FFFFFF' : '#1a2332';
    const taglineColor = variant === 'light' ? 'rgba(255,255,255,0.7)' : '#6b7280';
    const strokeColor = variant === 'light' ? '#FFFFFF' : '#1a2332';

    return (
        <svg
            viewBox="0 0 180 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Circular G emblem - no blue fill, just outline */}
            <circle
                cx="90"
                cy="24"
                r="18"
                stroke={strokeColor}
                strokeWidth="2.5"
                fill="none"
            />
            {/* G letter inside circle */}
            <text
                x="90"
                y="30"
                textAnchor="middle"
                fill={textColor}
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fontSize="18"
            >
                G
            </text>

            {/* G-POWER text */}
            <text
                x="90"
                y="62"
                textAnchor="middle"
                fill={textColor}
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fontSize="22"
                letterSpacing="3"
            >
                G-POWER
            </text>

            {/* "got power" tagline */}
            <text
                x="90"
                y="78"
                textAnchor="middle"
                fill={taglineColor}
                fontFamily="'Poppins', sans-serif"
                fontWeight="500"
                fontSize="9"
                fontStyle="italic"
                letterSpacing="1"
            >
                got power
            </text>
        </svg>
    );
};
