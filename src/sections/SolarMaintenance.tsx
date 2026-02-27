import { FadeIn } from '@/components/FadeIn';

export const SolarMaintenance = () => {
    return (
        <section className="relative w-full bg-white">
            <div className="mx-auto max-w-[1920px] relative">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes textShimmer {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 200% 50%; }
                    }
                    @keyframes gentleBob {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                    @keyframes expandLine {
                        0% { width: 0%; opacity: 0; }
                        100% { width: 100%; opacity: 1; }
                    }
                    .animate-line {
                        animation: expandLine 1.5s ease-out forwards;
                    }
                    .animate-title-shimmer {
                        background: linear-gradient(90deg, #121010 0%, #EF3C38 30%, #121010 60%);
                        background-size: 200% auto;
                        color: transparent;
                        -webkit-background-clip: text;
                        background-clip: text;
                        animation: textShimmer 4s linear infinite, gentleBob 5s ease-in-out infinite 1s;
                    }
                    .animate-subtext {
                        animation: gentleBob 6s ease-in-out infinite 1.2s;
                    }
                `}} />

                {/* Horizontal Divider Line */}
                <div className="flex justify-center pt-[60px] md:pt-[80px]">
                    <div className="w-[1748px] max-w-[calc(100%-40px)] h-0 border-[2px] md:border-[3px] border-[#DADADA] animate-line" />
                </div>

                {/* Title & Description - Centered */}
                <div className="flex flex-col items-center gap-[16px] md:gap-[20px] pt-[40px] md:pt-[60px] pb-[16px] md:pb-[20px] px-6">
                    <FadeIn delay={100} direction="up" className="w-full flex justify-center">
                        <h2
                            className="font-semibold text-center w-full max-w-[700px] animate-title-shimmer"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(18px, 2vw, 28px)',
                                lineHeight: '1.2'
                            }}
                        >
                            Solar Maintenance Made Easy: A Homeowner&apos;s Guide
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="up" className="w-full flex justify-center">
                        <p
                            className="text-[#121010] font-medium text-center max-w-[700px] animate-subtext"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(13px, 1.2vw, 18px)',
                                lineHeight: '1.4'
                            }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
