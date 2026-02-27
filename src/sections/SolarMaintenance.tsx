import { FadeIn } from '@/components/FadeIn';

export const SolarMaintenance = () => {
    return (
        <section className="relative w-full bg-white">
            <div className="mx-auto max-w-[1920px] relative">


                {/* Horizontal Divider Line */}
                <div className="flex justify-center pt-[60px] md:pt-[80px]">
                    <div className="w-[1748px] max-w-[calc(100%-240px)] h-0 border-[1px] border-[#DADADA]" />
                </div>

                {/* Title & Description - Centered */}
                <div className="flex flex-col items-center gap-[16px] md:gap-[20px] pt-[40px] md:pt-[60px] pb-[16px] md:pb-[20px] px-6">
                    <FadeIn delay={100} direction="up" className="w-full flex justify-center">
                        <h2
                            className="font-semibold text-center w-full max-w-[900px] text-[#121010]"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(20px, 2.5vw, 36px)',
                                lineHeight: '1.2'
                            }}
                        >
                            Solar Maintenance Made Easy: A Homeowner&apos;s Guide
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="up" className="w-full flex justify-center">
                        <p
                            className="text-[#121010] font-medium text-center w-full max-w-[900px]"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(14px, 1.8vw, 18px)',
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
