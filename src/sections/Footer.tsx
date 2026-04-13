import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { ServiceHighlight } from '@/sections/ServiceHighlight';

export const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Partners', path: '/partners' },
        { name: 'Our Projects', path: '/our-projects' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const legalLinks = [
        { name: 'Terms & Conditions', path: '/terms-conditions' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Disclaimer', path: '/disclaimer' },
    ];

    return (
        <div className="flex flex-col w-full bg-[#020203] text-white relative overflow-hidden">
            <ServiceHighlight />
            
            {/* The Horizon Gradient - Creates a subtle deep blue sunrise effect at the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0A5191]/15 via-[#0A5191]/[0.02] to-transparent pointer-events-none" />

            <footer className="w-full relative z-10 pt-20 pb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    
                    {/* Symmetrical 3-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
                        
                        {/* Left Wing - Explorer (Right Aligned on Desktop) */}
                        <FadeIn delay={200} direction="up" className="lg:col-span-3 flex flex-col lg:items-end lg:text-right order-2 lg:order-1 lg:pt-8 w-full border-t lg:border-t-0 border-white/5 pt-12 lg:pr-8">
                            <h4 className="text-[#0A5191] text-[12px] tracking-[0.4em] uppercase font-bold mb-8">Explorer</h4>
                            <ul className="flex flex-col gap-6 w-full">
                                {quickLinks.map(item => (
                                    <li key={item.name} className="w-full">
                                        <Link href={item.path} className="text-white/60 hover:text-white transition-all duration-500 font-light text-[16px] hover:tracking-widest inline-block whitespace-nowrap">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        {/* Center Hub - Brand Identity */}
                        <FadeIn delay={100} direction="up" className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2 px-4 lg:px-16 border-x-0 lg:border-x border-white/5 pb-4 lg:pb-0">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="G-Power Logo"
                                    width={180}
                                    height={90}
                                    className="h-[65px] w-auto object-contain mb-12 hover:opacity-80 transition-opacity duration-500"
                                />
                            </Link>
                            <p className="text-white/50 leading-[2] font-light text-[17px] max-w-[540px] mb-12">
                                Pioneering sustainable energy solutions. We engineer cutting-edge battery storage systems to power a brighter, secure, and uninterrupted tomorrow for industrial and residential applications worldwide.
                            </p>
                            
                            {/* Delicate Centered Socials */}
                            <div className="flex gap-6 items-center">
                                <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 hover:border-white">
                                    <svg width="15" height="15" viewBox="0 0 27 24" fill="currentColor">
                                        <path d="M21.2 0H25.3L16.3 10.2L26.9 24H18.6L12.1 15.6L4.7 24H0.6L10.2 13.1L0 0H8.5L14.4 7.7L21.2 0ZM19.7 21.6H22L7.3 2.5H5L19.7 21.6Z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 hover:border-white">
                                    <svg width="16" height="16" viewBox="0 0 27 27" fill="currentColor">
                                        <path d="M6.04 3.02C6.04 4.69 4.69 6.04 3.02 6.04C1.35 6.04 0 4.69 0 3.02C0 1.35 1.35 0 3.02 0C4.69 0 6.04 1.35 6.04 3.02ZM6.04 8.39H0V27H6.04V8.39ZM14.56 8.39H8.55V27H14.56V17.25C14.56 11.78 21.59 11.3 21.59 17.25V27H27.62V15.16C27.62 5.89 17.01 6.24 14.56 10.82V8.39Z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 hover:border-white">
                                    <svg width="18" height="13" viewBox="0 0 31 21" fill="currentColor">
                                        <path d="M30.35 3.29C30 1.93 28.93 0.86 27.57 0.51C25.15 0 15.5 0 15.5 0C15.5 0 5.85 0 3.43 0.51C2.07 0.86 1 1.93 0.65 3.29C0.14 5.71 0.14 10.5 0.14 10.5C0.14 10.5 0.14 15.29 0.65 17.71C1 19.07 2.07 20.14 3.43 20.49C5.85 21 15.5 21 15.5 21C15.5 21 25.15 21 27.57 20.49C28.93 20.14 30 19.07 30.35 17.71C30.86 15.29 30.86 10.5 30.86 10.5C30.86 10.5 30.86 5.71 30.35 3.29ZM12.36 15V6L20.43 10.5L12.36 15Z" />
                                    </svg>
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Right Wing - Legal & Contact (Left Aligned) */}
                        <FadeIn delay={300} direction="up" className="lg:col-span-3 flex flex-col lg:items-start lg:text-left order-3 lg:pt-8 w-full border-t lg:border-t-0 border-white/5 pt-12 lg:pl-8">
                            <h4 className="text-[#0A5191] text-[12px] tracking-[0.4em] uppercase font-bold mb-8">Connect</h4>
                            <div className="flex flex-col gap-8 w-full">
                                <ul className="flex flex-col gap-6 w-full">
                                    {legalLinks.map(item => (
                                        <li key={item.name} className="w-full">
                                            <Link href={item.path} className="text-white/60 hover:text-white transition-all duration-500 font-light text-[16px] hover:tracking-widest inline-block whitespace-nowrap">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* Delicate Contact Metrics */}
                                <div className="mt-2 flex flex-col gap-6 pt-8 border-t border-white/10 w-full">
                                    <Link href="mailto:hello@energymax.com" className="text-white/60 hover:text-white transition-colors duration-500 font-light text-[16px] flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-[#0A5191]"></span>
                                        hello@energymax.com
                                    </Link>
                                    <Link href="tel:+492118765420" className="text-white/60 hover:text-white transition-colors duration-500 font-light text-[16px] flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-[#0A5191]"></span>
                                        +49 211 8765 4200
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Bottom Symmetrical Copyright Bar */}
                    <FadeIn delay={400} direction="up" className="border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-3">
                        <p className="text-white/30 text-[14px] font-light tracking-wide text-center">
                            © {(new Date()).getFullYear()} G-POWER SOLUTIONS. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-white/20 text-[12px] font-light tracking-[0.3em] uppercase text-center mt-1">
                            Engineered for the Future
                        </p>
                    </FadeIn>
                </div>
            </footer>
        </div>
    );
};
