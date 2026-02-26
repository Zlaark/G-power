'use client';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
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
                        background-color: white;
                        transition: width 0.3s ease;
                    }
                    .nav-link:hover::after {
                        width: 100%;
                    }
                `}} />
                <div className="flex items-center justify-between h-[120px]">

                    {/* Spacer for left side */}
                    <div className="hidden xl:block w-[200px]" />

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-10">
                        <Link href="/" className="nav-link text-[20px] 2xl:text-[24px] font-medium text-black/75 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Home
                        </Link>
                        <Link href="/about" className="nav-link text-[20px] 2xl:text-[24px] font-medium text-black/75 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            About Us
                        </Link>
                        <Link href="#partners" className="nav-link text-[20px] 2xl:text-[24px] font-medium text-black/75 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Partners
                        </Link>
                        <Link href="#projects" className="nav-link text-[20px] 2xl:text-[24px] font-medium text-black/75 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Our Projects
                        </Link>
                        <Link href="#solutions" className="nav-link text-[20px] 2xl:text-[24px] font-medium text-black/75 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Solutions
                        </Link>
                        <Link href="#support" className="nav-link text-[20px] 2xl:text-[24px] font-medium text-black/75 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Support & Services
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden xl:flex items-center">
                        <Link href="/contact" className="btn-sweep bg-[#EF3C38] text-white px-6 py-2 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg rounded text-[20px] 2xl:text-[24px] font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="xl:hidden flex justify-end w-full pr-4 md:pr-0">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black hover:text-black/80 transition-all hover:scale-110 p-2 bg-gray-100 rounded backdrop-blur-md"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-[120px] left-0 right-0 bg-[#121010]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl flex flex-col items-center py-8 gap-6 z-50">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[20px] font-medium hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[20px] font-medium hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            About Us
                        </Link>
                        <Link href="#partners" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[20px] font-medium hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Partners
                        </Link>
                        <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[20px] font-medium hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Our Projects
                        </Link>
                        <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[20px] font-medium hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Solutions
                        </Link>
                        <Link href="#support" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[20px] font-medium hover:text-[#EF3C38] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Support & Services
                        </Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-[#EF3C38] text-white px-8 py-3 rounded text-[20px] font-medium hover:bg-white hover:text-[#EF3C38] transition-all" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};
