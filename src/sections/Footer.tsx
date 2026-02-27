import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';

export const Footer = () => {
    return (
        <footer className="relative bg-[#121010] overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative px-[20px] md:px-[40px] lg:px-[88px] py-[60px] lg:py-[80px]">
                <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-0">

                    {/* Left Column - Description Text */}
                    <FadeIn delay={100} direction="up" className="w-full lg:w-[700px] lg:flex-shrink-0 flex items-start lg:items-end lg:pr-16">
                        <p
                            className="text-white/80 leading-normal md:leading-[36px] tracking-[-0.48px] max-w-[702px]"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 2.8vw, 19px)' }}
                        >
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        </p>
                    </FadeIn>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block w-[1px] bg-[#B79F9F] self-stretch mx-[60px]" />

                    {/* Right Content */}
                    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[60px] lg:gap-[120px] flex-1">

                        {/* Navigation Links Column */}
                        <FadeIn delay={300} direction="up" className="flex flex-col gap-[12px] md:gap-[18px]">
                            <Link
                                href="/"
                                className="text-white leading-normal md:leading-[36px] tracking-[-0.48px] hover:text-white/80 transition-colors inline-block"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 3vw, 19px)' }}
                            >
                                Home
                            </Link>
                            <Link
                                href="#solutions"
                                className="text-white leading-normal md:leading-[36px] tracking-[-0.48px] hover:text-white/80 transition-colors inline-block"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 3vw, 19px)' }}
                            >
                                Solutions
                            </Link>
                            <Link
                                href="#contact"
                                className="text-white leading-normal md:leading-[36px] tracking-[-0.48px] hover:text-white/80 transition-colors inline-block"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 3vw, 19px)' }}
                            >
                                Contact
                            </Link>
                            <Link
                                href="#resources"
                                className="text-white leading-normal md:leading-[36px] tracking-[-0.48px] hover:text-white/80 transition-colors inline-block"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 3vw, 19px)' }}
                            >
                                Resources
                            </Link>
                            <Link
                                href="/404"
                                className="text-white leading-normal md:leading-[36px] tracking-[-0.48px] hover:text-white/80 transition-colors inline-block"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 3vw, 19px)' }}
                            >
                                404
                            </Link>
                            <Link
                                href="/terms"
                                className="text-white leading-normal md:leading-[36px] tracking-[-0.48px] hover:text-white/80 transition-colors inline-block"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 3vw, 19px)' }}
                            >
                                Terms and Conditions
                            </Link>
                        </FadeIn>

                        {/* Contact Info & Social Column */}
                        <FadeIn delay={500} direction="up" className="flex flex-col gap-[20px] md:gap-6 mt-[20px] md:mt-0">
                            {/* Address */}
                            <p
                                className="text-white/80 leading-normal md:leading-[31px] tracking-[-0.42px] max-w-[328px]"
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 2.8vw, 17px)' }}
                            >
                                Königsallee 92, Green Energy<br />
                                Tower 40212 Düsseldorf, Germany
                            </p>

                            {/* Email & Phone */}
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="mailto:hello@energymax.com"
                                    className="text-white/80 leading-normal md:leading-[31px] tracking-[-0.42px] underline hover:text-white transition-colors"
                                    style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 2.8vw, 17px)' }}
                                >
                                    hello@energymax.com
                                </Link>
                                <Link
                                    href="tel:+492118765420"
                                    className="text-white/80 leading-normal md:leading-[31px] tracking-[-0.42px] underline hover:text-white transition-colors"
                                    style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 2.8vw, 17px)' }}
                                >
                                    +49 211 8765 4200
                                </Link>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-[35.66px] mt-4">
                                {/* X (Twitter) */}
                                <Link href="#" className="w-[35.66px] h-[35.66px] flex items-center justify-center hover:opacity-80 transition-opacity">
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.2 0H25.3L16.3 10.2L26.9 24H18.6L12.1 15.6L4.7 24H0.6L10.2 13.1L0 0H8.5L14.4 7.7L21.2 0ZM19.7 21.6H22L7.3 2.5H5L19.7 21.6Z" fill="white" />
                                    </svg>
                                </Link>

                                {/* LinkedIn */}
                                <Link href="#" className="w-[35.66px] h-[35.66px] flex items-center justify-center hover:opacity-80 transition-opacity">
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.04 3.02C6.04 4.69 4.69 6.04 3.02 6.04C1.35 6.04 0 4.69 0 3.02C0 1.35 1.35 0 3.02 0C4.69 0 6.04 1.35 6.04 3.02ZM6.04 8.39H0V27H6.04V8.39ZM14.56 8.39H8.55V27H14.56V17.25C14.56 11.78 21.59 11.3 21.59 17.25V27H27.62V15.16C27.62 5.89 17.01 6.24 14.56 10.82V8.39Z" fill="white" />
                                    </svg>
                                </Link>

                                {/* YouTube */}
                                <Link href="#" className="w-[35.66px] h-[35.66px] flex items-center justify-center hover:opacity-80 transition-opacity">
                                    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.35 3.29C30 1.93 28.93 0.86 27.57 0.51C25.15 0 15.5 0 15.5 0C15.5 0 5.85 0 3.43 0.51C2.07 0.86 1 1.93 0.65 3.29C0.14 5.71 0.14 10.5 0.14 10.5C0.14 10.5 0.14 15.29 0.65 17.71C1 19.07 2.07 20.14 3.43 20.49C5.85 21 15.5 21 15.5 21C15.5 21 25.15 21 27.57 20.49C28.93 20.14 30 19.07 30.35 17.71C30.86 15.29 30.86 10.5 30.86 10.5C30.86 10.5 30.86 5.71 30.35 3.29ZM12.36 15V6L20.43 10.5L12.36 15Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        </FadeIn>

                    </div>
                </div>

            </div>
        </footer>
    );
};
