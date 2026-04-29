import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  showArrow = true,
  icon: Icon,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "group relative inline-flex items-center justify-center rounded-[14px] font-bold transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap overflow-hidden";
  
  const variants = {
    primary: "bg-[#0A5191] text-white hover:shadow-xl hover:shadow-[#0A5191]/20 hover:-translate-y-0.5",
    secondary: "bg-white text-[#1B2236] border border-[#E2E8F0] hover:border-[#0A5191]/30 hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-transparent text-white border-2 border-white/30 hover:border-white focus:ring-white/50",
    ghost: "bg-transparent text-[#0A5191] hover:bg-[#0A5191]/5 px-0"
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-7 text-[15px]",
    lg: "h-14 px-10 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Premium Sliding Background Effect */}
      {variant !== 'ghost' && (
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0 z-0
            ${variant === 'primary' ? 'bg-[#38BDF8]/20' : 
              variant === 'secondary' ? 'bg-[#0A5191]/5' : 
              'bg-white/10'}`}
        />
      )}
      
      <div className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />}
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className={`w-4 h-4 transition-all duration-300 ${variant === 'ghost' ? 'group-hover:ml-4' : 'group-hover:translate-x-1'}`} />
        )}
      </div>
    </button>
  );
};
