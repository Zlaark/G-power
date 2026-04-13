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
        <div className="flex flex-col w-full relative bg-[#040608] text-white overflow-hidden">
            <ServiceHighlight />
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#0A5191] opacity-[0.07] blur-[150px] pointer-events-none" />

            <footer className="relative pt-24 pb-8 px-6 md:px-12 lg:px-16 max-w-[1920px] mx-auto w-full z-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                
                {/* Upper Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 relative z-20">
                    
                    {/* Left: About / Updated Topic */}
                    <FadeIn delay={100} direction="up" className="lg:w-[400px] flex flex-col gap-8 shrink-0">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo-clean.png"
                                alt="G-Power Logo"
                                width={180}
                                height={90}
                                className="h-[65px] w-auto object-contain brightness-0 invert hover:scale-105 transition-transform duration-500 origin-left"
                            />
                        </Link>
                        
                        {/* Changed Topic from Lorem Ipsum to Relevant Energy Copy */}
                        <div className="flex flex-col gap-4">
                            <p className="text-white/60 leading-relaxed font-light text-[16px]">
                                Pioneering sustainable energy solutions. We engineer cutting-edge battery storage systems to power a brighter, secure, and uninterrupted tomorrow for industrial and residential applications worldwide.
                            </p>
                        </div>

                        {/* Minimalist Socials */}
                        <div className="flex gap-5 mt-2">
                            <Link href="#" className="opacity-50 hover:opacity-100 hover:text-[#0A5191] transition-all duration-300 hover:-translate-y-1">
                                <svg width="22" height="22" viewBox="0 0 27 24" fill="currentColor">
                                    <path d="M21.2 0H25.3L16.3 10.2L26.9 24H18.6L12.1 15.6L4.7 24H0.6L10.2 13.1L0 0H8.5L14.4 7.7L21.2 0ZM19.7 21.6H22L7.3 2.5H5L19.7 21.6Z" />
                                </svg>
                            </Link>
                            <Link href="#" className="opacity-50 hover:opacity-100 hover:text-[#0A5191] transition-all duration-300 hover:-translate-y-1">
                                <svg width="22" height="22" viewBox="0 0 27 27" fill="currentColor">
                                    <path d="M6.04 3.02C6.04 4.69 4.69 6.04 3.02 6.04C1.35 6.04 0 4.69 0 3.02C0 1.35 1.35 0 3.02 0C4.69 0 6.04 1.35 6.04 3.02ZM6.04 8.39H0V27H6.04V8.39ZM14.56 8.39H8.55V27H14.56V17.25C14.56 11.78 21.59 11.3 21.59 17.25V27H27.62V15.16C27.62 5.89 17.01 6.24 14.56 10.82V8.39Z" />
                                </svg>
                            </Link>
                            <Link href="#" className="opacity-50 hover:opacity-100 hover:text-[#0A5191] transition-all duration-300 hover:-translate-y-1">
                                <svg width="25" height="18" viewBox="0 0 31 21" fill="currentColor" className="mt-0.5">
                                    <path d="M30.35 3.29C30 1.93 28.93 0.86 27.57 0.51C25.15 0 15.5 0 15.5 0C15.5 0 5.85 0 3.43 0.51C2.07 0.86 1 1.93 0.65 3.29C0.14 5.71 0.14 10.5 0.14 10.5C0.14 10.5 0.14 15.29 0.65 17.71C1 19.07 2.07 20.14 3.43 20.49C5.85 21 15.5 21 15.5 21C15.5 21 25.15 21 27.57 20.49C28.93 20.14 30 19.07 30.35 17.71C30.86 15.29 30.86 10.5 30.86 10.5C30.86 10.5 30.86 5.71 30.35 3.29ZM12.36 15V6L20.43 10.5L12.36 15Z" />
                                </svg>
                            </Link>
                        </div>
                    </FadeIn>

                    {/* Right: Links Grids */}
                    <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20 lg:gap-32 w-full lg:w-auto xl:mr-12">
                        
                        {/* Quick Links */}
                        <FadeIn delay={200} direction="up" className="flex flex-col gap-6">
                            <h3 className="text-white font-semibold tracking-[0.2em] text-xs uppercase relative before:content-[''] before:w-4 before:h-px before:bg-[#0A5191] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 ml-6">
                                Explorer
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.path}
                                            className="text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light relative group inline-block"
                                        >
                                            {item.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0A5191] group-hover:w-full transition-all duration-300"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        {/* Legal */}
                        <FadeIn delay={300} direction="up" className="flex flex-col gap-6">
                            <h3 className="text-white font-semibold tracking-[0.2em] text-xs uppercase relative before:content-[''] before:w-4 before:h-px before:bg-[#0A5191] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 ml-6">
                                Legal
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {legalLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.path}
                                            className="text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light relative group inline-block"
                                        >
                                            {item.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0A5191] group-hover:w-full transition-all duration-300"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        {/* Contact */}
                        <FadeIn delay={400} direction="up" className="flex flex-col gap-6">
                            <h3 className="text-white font-semibold tracking-[0.2em] text-xs uppercase relative before:content-[''] before:w-4 before:h-px before:bg-[#0A5191] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 ml-6">
                                Reach Us
                            </h3>
                            <ul className="flex flex-col gap-5 text-white/60 font-light text-[15px]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#0A5191] mt-1 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                    </span>
                                    <p className="leading-relaxed hover:text-white transition-colors">
                                        Königsallee 92, Green Energy<br />
                                        Tower 40212 Düsseldorf, Germany
                                    </p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#0A5191] shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    </span>
                                    <Link href="mailto:hello@energymax.com" className="hover:text-white transition-colors">
                                        hello@energymax.com
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#0A5191] shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    </span>
                                    <Link href="tel:+492118765420" className="hover:text-white transition-colors">
                                        +49 211 8765 4200
                                    </Link>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>

                {/* Massive Branding Typography */}
                <FadeIn delay={600} direction="up" className="w-full flex justify-center items-center opacity-[0.03] mt-16 md:mt-24 pointer-events-none select-none overflow-hidden">
                    <h1 className="text-[14vw] font-black tracking-tighter leading-[0.8] m-0 p-0 text-center uppercase">
                        G-POWER
                    </h1>
                </FadeIn>

                {/* Bottom Copyright Bar */}
                <FadeIn delay={700} direction="up" className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 pt-6 border-t border-white/10 text-white/30 text-sm font-light">
                    <p>© {new Date().getFullYear()} G-Power. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy</Link>
                        <Link href="/terms-conditions" className="hover:text-white/70 transition-colors">Terms</Link>
                    </div>
                </FadeIn>
            </footer>
        </div>
    );
};
