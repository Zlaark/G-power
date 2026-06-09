import { FadeIn } from '@/components/FadeIn';

export const PartnerLogos = () => {
    // Extended list for scrolling effect
    const partnersRow1 = [
        { name: 'Hithium', logo: '/hithium-logo.png' },
        { name: 'Hiner', logo: '/hiner-logo.png' },
        { name: 'TATA Power', logo: '/tata-logo.png' },
        { name: 'Adani Solar', logo: '/adani-logo.png' },
        { name: 'Waaree', logo: '/waaree-logo.png' },
        { name: 'Vikram Solar', logo: '/vikram-logo.png' },
        { name: 'Luminous', logo: '/luminous-logo.png' },
        { name: 'Microtek', logo: '/microtek-logo.png' },
    ];

    const partnersRow2 = [
        { name: 'Sukam', logo: '/sukam-logo.png' },
        { name: 'Exide', logo: '/exide-logo.png' },
        { name: 'Amaron', logo: '/amaron-logo.png' },
        { name: 'Okaya', logo: '/okaya-logo.png' },
        { name: 'Livguard', logo: '/livguard-logo.png' },
        { name: 'Eastman', logo: '/eastman-logo.png' },
        { name: 'Loom Solar', logo: '/loom-logo.png' },
        { name: 'Goldi Solar', logo: '/goldi-logo.png' },
    ];

    return (
        <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }
                .scroll-container:hover .animate-scroll-left,
                .scroll-container:hover .animate-scroll-right {
                    animation-play-state: paused;
                }
            `}} />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
                <FadeIn delay={100} direction="up">
                    <div className="text-center">
                        <h2 className="text-[#121010] font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}>
                            Our Trusted Partners
                        </h2>
                        <div className="w-20 h-1 bg-[#0A5191] mx-auto rounded-full" />
                    </div>
                </FadeIn>
            </div>

            <div className="scroll-container space-y-8">
                {/* Row 1: Scrolling Left */}
                <div className="flex overflow-hidden whitespace-nowrap">
                    <div className="flex animate-scroll-left">
                        {[...partnersRow1, ...partnersRow1].map((partner, index) => (
                            <div key={index} className="inline-flex items-center justify-center mx-8 md:mx-12 lg:mx-16 h-16 w-[140px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <span className="text-[#0A5191] font-bold text-xl tracking-tight">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Scrolling Right */}
                <div className="flex overflow-hidden whitespace-nowrap">
                    <div className="flex animate-scroll-right">
                        {[...partnersRow2, ...partnersRow2].map((partner, index) => (
                            <div key={index} className="inline-flex items-center justify-center mx-8 md:mx-12 lg:mx-16 h-16 w-[140px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <span className="text-[#0A5191] font-bold text-xl tracking-tight">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
