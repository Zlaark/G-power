import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
            <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-12 xl:px-16">
                <div className="flex items-center justify-between h-[120px]">

                    {/* Spacer for left side */}
                    <div className="hidden xl:block w-[200px]" />

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-10">
                        <Link href="/" className="text-[24px] font-medium text-white transition-colors hover:text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Home
                        </Link>
                        <Link href="#about" className="text-[20px] font-medium text-white transition-colors hover:text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            About Us
                        </Link>
                        <Link href="#partners" className="text-[20px] font-medium text-white transition-colors hover:text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Partners
                        </Link>
                        <Link href="#projects" className="text-[20px] font-medium text-white transition-colors hover:text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Our Projects
                        </Link>
                        <Link href="#solutions" className="text-[20px] font-medium text-white transition-colors hover:text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Solutions
                        </Link>
                        <Link href="#support" className="text-[20px] font-medium text-white transition-colors hover:text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Support & Services
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden xl:flex items-center">
                        <Link href="/contact" className="bg-white text-[#121010] px-5 py-2 flex items-center justify-center transition-all hover:bg-gray-100 rounded text-[24px] font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="xl:hidden flex justify-end w-full">
                        <button className="text-white hover:text-gray-300 p-2 bg-black/20 rounded backdrop-blur-md">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
