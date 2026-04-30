'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (section: string) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenAccordion(null);
    };

    return (
        <nav className="absolute top-0 inset-x-0 z-50 transition-all duration-300">
            <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-12 xl:px-16">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .nav-link {
                        position: relative;
                        color: rgba(255, 255, 255, 0.75);
                        transition: color 0.3s ease;
                    }
                    .nav-link:hover {
                        color: rgba(255, 255, 255, 1);
                    }
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: -4px;
                        left: 0;
                        background-color: #0A5191;
                        transition: width 0.3s ease;
                    }
                    .nav-link:hover::after {
                        width: 100%;
                    }
                    
                    /* Accordion Animation */
                    .accordion-content {
                        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, margin 0.4s ease;
                        max-height: 0;
                        opacity: 0;
                        overflow: hidden;
                    }
                    .accordion-content.open {
                        max-height: 400px;
                        opacity: 1;
                        margin-top: 16px;
                    }
                    .chevron {
                        transition: transform 0.3s ease;
                    }
                    .chevron.open {
                        transform: rotate(180deg);
                    }
                `}} />
                <div className="flex items-center justify-between h-[80px] lg:h-[120px]">

                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="/logo-clean.png"
                            alt="G-Power Logo"
                            width={171}
                            height={124}
                            className="h-[60px] lg:h-[95px] w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-7 2xl:gap-8">
                        <Link href="/" className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Home
                        </Link>
                        <Link href="/about" className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            About Us
                        </Link>
                        <Link href="/partners" className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Partners
                        </Link>
                        <Link href="/our-projects" className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Our Projects
                        </Link>

                        <div className="relative group">
                            <div className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Solutions
                            </div>
                            <div className="absolute left-0 top-full mt-3 w-[280px] rounded-[10px] bg-white/10 backdrop-blur-xl border border-white/25 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                                <Link href="/solutions/utility" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Utility Solutions
                                </Link>
                                <Link href="/solutions/residential" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Residential Solutions
                                </Link>
                                <Link href="/solutions/commercial-industrial" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Commercial & Industrial
                                </Link>
                                <Link href="/solutions/2-3-wheeler" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    2 & 3 Wheeler Application
                                </Link>
                                <Link href="/solutions/new-application-business" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    New Application Business
                                </Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Products
                            </div>
                            <div className="absolute left-0 top-full mt-3 w-[260px] rounded-[10px] bg-white/10 backdrop-blur-xl border border-white/25 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                                <Link href="/solutions/utility/products/utility-battery-1" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    G-Power Cube Pro C&amp;C
                                </Link>
                                <Link href="/solutions/utility/products/utility-battery-2" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    G-Power Cube T28
                                </Link>
                                <Link href="/solutions/utility/products/utility-battery-4" className="block px-4 py-2 text-[15px] text-white/90 hover:bg-white/15 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    G-Power Hiner
                                </Link>
                            </div>
                        </div>
                        <Link href="/careers" className="nav-link text-[16px] 2xl:text-[18px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Careers
                        </Link>
                        <Link href="/contact">
                            <Button variant="primary" size="md">
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile: menu button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-white/80 transition-all p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Glassmorphic Dark Overlay */}
                <div 
                    className={`xl:hidden fixed inset-0 z-[100] bg-[#020813]/85 backdrop-blur-2xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-8'}`}
                >
                    {/* Glowing Accent */}
                    <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[50%] bg-[#0A5191]/30 blur-[120px] rounded-full pointer-events-none" />

                    {/* Header inside overlay */}
                    <div className="flex items-center justify-between h-[80px] px-6 border-b border-white/10 relative z-10">
                        <Link href="/" onClick={closeMenu} className="flex items-center shrink-0">
                            <Image
                                src="/logo-clean.png"
                                alt="G-Power Logo"
                                width={171}
                                height={124}
                                className="h-[45px] w-auto object-contain brightness-0 invert"
                                priority
                            />
                        </Link>
                        <button
                            onClick={closeMenu}
                            className="text-white hover:text-[#4CA5FF] transition-all p-2 bg-white/10 rounded-full border border-white/10"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Scrollable Links Container */}
                    <div className="h-[calc(100vh-80px)] overflow-y-auto px-6 pb-24 relative z-10">
                        <div className="flex flex-col gap-1 mt-4">
                            
                            {/* Standard Links */}
                            <Link href="/" onClick={closeMenu} className="block py-3 text-white text-lg font-medium border-b border-white/5 hover:text-[#4CA5FF] hover:pl-2 transition-all" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Home
                            </Link>
                            <Link href="/about" onClick={closeMenu} className="block py-3 text-white text-lg font-medium border-b border-white/5 hover:text-[#4CA5FF] hover:pl-2 transition-all" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                About Us
                            </Link>
                            <Link href="/partners" onClick={closeMenu} className="block py-3 text-white text-lg font-medium border-b border-white/5 hover:text-[#4CA5FF] hover:pl-2 transition-all" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Partners
                            </Link>
                            <Link href="/our-projects" onClick={closeMenu} className="block py-3 text-white text-lg font-medium border-b border-white/5 hover:text-[#4CA5FF] hover:pl-2 transition-all" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Our Projects
                            </Link>

                            {/* Solutions Accordion */}
                            <div className="border-b border-white/5">
                                <button 
                                    onClick={() => toggleAccordion('solutions')} 
                                    className="w-full flex items-center justify-between py-3 text-white text-lg font-medium hover:text-[#4CA5FF] transition-colors"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    <span>Solutions</span>
                                    <svg className={`h-5 w-5 text-white/50 chevron ${openAccordion === 'solutions' ? 'open' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`accordion-content ${openAccordion === 'solutions' ? 'open' : ''}`}>
                                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#0A5191]/40 mb-3 mt-1">
                                        <Link href="/solutions/utility" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Utility Solutions</Link>
                                        <Link href="/solutions/residential" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Residential Solutions</Link>
                                        <Link href="/solutions/commercial-industrial" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Commercial & Industrial</Link>
                                        <Link href="/solutions/2-3-wheeler" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>2 & 3 Wheeler Application</Link>
                                        <Link href="/solutions/new-application-business" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>New Application Business</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Products Accordion */}
                            <div className="border-b border-white/5">
                                <button 
                                    onClick={() => toggleAccordion('products')} 
                                    className="w-full flex items-center justify-between py-3 text-white text-lg font-medium hover:text-[#4CA5FF] transition-colors"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    <span>Products</span>
                                    <svg className={`h-5 w-5 text-white/50 chevron ${openAccordion === 'products' ? 'open' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`accordion-content ${openAccordion === 'products' ? 'open' : ''}`}>
                                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#0A5191]/40 mb-3 mt-1">
                                        <Link href="/solutions/utility/products/utility-battery-1" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>G-Power Cube Pro C&amp;C</Link>
                                        <Link href="/solutions/utility/products/utility-battery-2" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>G-Power Cube T28</Link>
                                        <Link href="/solutions/utility/products/utility-battery-4" onClick={closeMenu} className="text-white/70 text-[15px] hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>G-Power Hiner</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/careers" onClick={closeMenu} className="block py-3 text-white text-lg font-medium hover:text-[#4CA5FF] hover:pl-2 transition-all" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Careers
                            </Link>

                            <div className="mt-8">
                                <Link href="/contact" onClick={closeMenu}>
                                    <Button variant="primary" size="lg" className="w-full py-4 text-[16px] rounded-[12px] bg-[#0A5191] hover:bg-[#0A5191]/90 shadow-[0_10px_30px_rgba(10,81,145,0.4)] border-none">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
