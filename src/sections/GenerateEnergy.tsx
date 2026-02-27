import { FadeIn } from '@/components/FadeIn';

export const GenerateEnergy = () => {
    return (
        <section className="relative w-full bg-[#FBFBFB] overflow-hidden">
            <div className="mx-auto max-w-[1920px]">

                {/* Content Container */}
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[60px] px-[20px] md:px-[60px] lg:pl-[122px] lg:pr-[60px] pt-[80px] pb-[60px] lg:py-[100px]">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-[15px] md:gap-[23px] mb-[40px] lg:mb-0 z-10">
                        {/* Red Accent Line */}
                        <div className="h-0 border-[3.5px] border-[#EF3C38] rounded-full w-[66.5px]" />

                        {/* Text */}
                        <FadeIn delay={100} direction="right" className="flex flex-col gap-[15px] md:gap-[23px] mt-[10px] lg:mt-0">
                            <h2
                                className="text-[#121010] font-semibold leading-tight md:leading-[49px] w-full"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3.8vw, 32px)' }}
                            >
                                Generate Energy
                            </h2>
                            <p
                                className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(13px, 2.2vw, 50px)' }}
                            >
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right Side: Image */}
                    <FadeIn delay={300} direction="left" className="w-full lg:w-1/2 h-[250px] md:h-[320px] lg:h-[450px] group cursor-pointer rounded-t-[20px] overflow-hidden">
                        <img
                            src="/home3.png"
                            alt="Solar Energy Generation"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
