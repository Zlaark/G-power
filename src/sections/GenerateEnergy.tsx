import { FadeIn } from '@/components/FadeIn';

export const GenerateEnergy = () => {
    return (
        <section className="relative w-full bg-[#FBFBFB] overflow-hidden">
            <div className="mx-auto max-w-[1920px]">

                {/* Content Container */}
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[60px] px-[20px] md:px-[60px] lg:pl-[80px] lg:pr-[90px] pt-[80px] pb-[20px] lg:pt-[100px] lg:pb-[60px]">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-[15px] md:gap-[23px] mb-[40px] lg:mb-0 z-10">
                        {/* Red Accent Line */}
                        <div className="h-0 border-[3.5px] border-[#0A5191] rounded-full w-[66.5px]" />

                        {/* Text */}
                        <FadeIn delay={100} direction="right" className="flex flex-col gap-[15px] md:gap-[23px] mt-[10px] lg:mt-0">
                            <h2
                                className="text-[#121010] font-[600] leading-tight md:leading-[49px] w-full"
                                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(22px, 3vw, 38px)' }}
                            >
                                Generate Energy
                            </h2>
                            <p
                                className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full"
                                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(13px, 1.5vw, 16px)' }}
                            >
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right Side: Image */}
                    <FadeIn delay={300} direction="left" className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] group cursor-pointer rounded-[24px] overflow-hidden shadow-2xl shadow-[#0A5191]/10">
                        <img
                            src="/Why G-power (Home Page).webp"
                            alt="Solar Energy Generation"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
