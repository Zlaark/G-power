import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

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

    const solutionLinks = [
        { name: 'Utility Solutions', path: '/solutions/utility' },
        { name: 'Residential Solutions', path: '/solutions/residential' },
        { name: 'Commercial & Industrial', path: '/solutions/commercial-industrial' },
        { name: '2 & 3 Wheeler', path: '/solutions/2-3-wheeler' },
        { name: 'New Application', path: '/solutions/new-application-business' },
    ];

    return (
        <div className="flex flex-col w-full bg-[#020203] text-white relative overflow-hidden">
            {/* The Horizon Gradient - Creates a subtle deep blue sunrise effect at the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0A5191]/15 via-[#0A5191]/[0.02] to-transparent pointer-events-none" />

            <footer className="w-full relative z-10 pt-10 pb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    
                    {/* Symmetrical 3-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 items-start mb-10">
                        
                        {/* Left Wing - Explorer + Connect */}
                        <FadeIn delay={200} direction="up" className="lg:col-span-3 flex flex-col lg:items-start lg:text-left order-2 lg:order-1 lg:pt-4 w-full border-t lg:border-t-0 border-white/5 pt-6 lg:pr-5">
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div>
                                    <h4 className="text-[#0A5191] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">Quick Links</h4>
                                    <ul className="flex flex-col gap-3 w-full">
                                        {quickLinks.map(item => (
                                            <li key={item.name} className="w-full">
                                                <Link href={item.path} className="text-white/60 hover:text-white transition-all duration-500 font-light text-[13px] hover:tracking-widest inline-block whitespace-nowrap">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-[#0A5191] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">Connect & Legal</h4>
                                    <ul className="flex flex-col gap-3 w-full">
                                        {legalLinks.map(item => (
                                            <li key={item.name} className="w-full">
                                                <Link href={item.path} className="text-white/60 hover:text-white transition-all duration-500 font-light text-[13px] hover:tracking-widest inline-block whitespace-nowrap">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </FadeIn>

                        {/* Center Hub - Brand Identity */}
                        <FadeIn delay={100} direction="up" className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2 px-3 lg:px-10 border-x-0 lg:border-x border-white/5 pb-1 lg:pb-0">
                            <Link href="/">
                                <Image
                                    src="/logo-clean.png"
                                    alt="G-Power Logo"
                                    width={260}
                                    height={130}
                                    className="h-[78px] w-auto object-contain mb-6 hover:opacity-80 transition-opacity duration-500"
                                />
                            </Link>
                            <p className="text-white/50 leading-[1.65] font-light text-[18px] max-w-[500px] mb-6">
                                Pioneering sustainable energy solutions. We engineer cutting-edge battery storage systems to power a brighter, secure, and uninterrupted tomorrow for industrial and residential applications worldwide.
                            </p>
                            
                            {/* Delicate Centered Socials */}
                            <div className="flex gap-3 items-center">
                                <Link href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 hover:border-white">
                                    <svg width="16" height="16" viewBox="0 0 27 27" fill="currentColor">
                                        <path d="M6.04 3.02C6.04 4.69 4.69 6.04 3.02 6.04C1.35 6.04 0 4.69 0 3.02C0 1.35 1.35 0 3.02 0C4.69 0 6.04 1.35 6.04 3.02ZM6.04 8.39H0V27H6.04V8.39ZM14.56 8.39H8.55V27H14.56V17.25C14.56 11.78 21.59 11.3 21.59 17.25V27H27.62V15.16C27.62 5.89 17.01 6.24 14.56 10.82V8.39Z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 hover:border-white">
                                    <svg width="18" height="13" viewBox="0 0 31 21" fill="currentColor">
                                        <path d="M30.35 3.29C30 1.93 28.93 0.86 27.57 0.51C25.15 0 15.5 0 15.5 0C15.5 0 5.85 0 3.43 0.51C2.07 0.86 1 1.93 0.65 3.29C0.14 5.71 0.14 10.5 0.14 10.5C0.14 10.5 0.14 15.29 0.65 17.71C1 19.07 2.07 20.14 3.43 20.49C5.85 21 15.5 21 15.5 21C15.5 21 25.15 21 27.57 20.49C28.93 20.14 30 19.07 30.35 17.71C30.86 15.29 30.86 10.5 30.86 10.5C30.86 10.5 30.86 5.71 30.35 3.29ZM12.36 15V6L20.43 10.5L12.36 15Z" />
                                    </svg>
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Right Wing - Contact Details */}
                        <FadeIn delay={300} direction="up" className="lg:col-span-3 flex flex-col lg:items-start lg:text-left order-3 lg:pt-4 w-full border-t lg:border-t-0 border-white/5 pt-6 lg:pl-5">
                            <h4 className="text-[#0A5191] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">Contact</h4>
                            <div className="w-full rounded-[12px] border border-white/10 bg-white/[0.02] p-3.5 sm:p-4">
                                <div className="space-y-3.5">
                                    <div className="space-y-2">
                                        <p className="text-white/40 uppercase tracking-[0.14em] text-[9px] font-semibold">Corporate Office Address</p>
                                        <p className="text-white/85 font-light text-[13px] leading-[1.6] break-words">
                                            No. 621/4F, Sire Mansion,<br />
                                            Anna Salai, Thousand Lights,<br />
                                            Chennai, Tamil Nadu - 600006
                                        </p>
                                    </div>

                                    <div className="h-px bg-white/10" />

                                    <div className="space-y-2">
                                        <p className="text-white/40 uppercase tracking-[0.14em] text-[9px] font-semibold">Reg. Mobile No &amp; Email ID</p>
                                        <div className="text-white/85 font-light text-[13px] leading-[1.6]">
                                            <p>+91 9894277915</p>
                                            <p>info@gpowerindia.com</p>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/10" />

                                    <div className="space-y-2">
                                        <p className="text-white/40 uppercase tracking-[0.14em] text-[9px] font-semibold">Business Hours</p>
                                        <p className="text-white/85 font-light text-[13px] leading-[1.6]">
                                            Monday to Saturday<br />
                                            9:30AM to 6:30PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Bottom Symmetrical Copyright Bar */}
                    <FadeIn delay={400} direction="up" className="border-t border-white/10 pt-5 flex flex-col items-center justify-center gap-1.5">
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
