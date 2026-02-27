import { FadeIn } from '@/components/FadeIn';

export const GettingToPowerOn = () => {
    return (
        <section className="relative w-full bg-white pt-[30px] md:pt-[50px] lg:pt-[60px] pb-[20px] md:pb-[30px] lg:pb-[30px]">
            <div className="mx-auto max-w-[1920px] relative px-[20px] md:px-[40px] lg:px-[86px]">



                {/* Header Row: Title left + Description right */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-[16px] lg:gap-[23px] mt-[40px] md:mt-[60px] lg:mt-[80px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
                    <FadeIn delay={100} direction="up" className="w-[100%] lg:w-[512px]">
                        <h2
                            className="text-[#121010] font-semibold leading-tight md:leading-[49px] flex-shrink-0"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 4.5vw, 32px)', transformOrigin: 'left center' }}
                        >
                            Getting to Power On
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="up" className="w-full">
                        <p
                            className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full lg:max-w-[1240px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(13px, 2.5vw, 22px)' }}
                        >
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more
                        </p>
                    </FadeIn>
                </div>

                {/* Centered Card with Image */}
                <FadeIn delay={500} direction="up" className="flex justify-center mb-[40px] lg:mb-[60px] px-0 lg:px-[200px]">
                    <div
                        className="relative w-full h-[300px] md:h-[450px] lg:h-[582px] rounded-[16px] lg:rounded-[20px] overflow-hidden group cursor-pointer"
                        style={{ background: '#3E2727' }}
                    >
                        <img
                            src="/home9.png"
                            alt="Solar Panel Installation"
                            className="absolute left-0 top-0 lg:top-[-67px] w-full h-full lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </FadeIn>

                {/* Progress Line */}
                <div className="relative w-full max-w-[1460px] mx-auto hidden lg:block mt-[100px] mb-[28px]">
                    {/* Thin black base line */}
                    <div className="w-full h-0 border-[1px] border-[#121010]" />
                    {/* Red accent line on the left */}
                    <div
                        className="absolute left-[74px] top-1/2 -translate-y-1/2 w-[193.5px] h-0"
                        style={{ borderWidth: '5px', borderStyle: 'solid', borderColor: '#EF3C38' }}
                    />
                    {/* Red circle at end of red accent line */}
                    <svg
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ left: `${74 + 193.5 - 22.5}px` }}
                        width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="22.5" cy="22.5" r="22.5" fill="#EF3C38" />
                    </svg>
                </div>

                {/* Three Columns */}
                <div className="flex flex-col lg:flex-row justify-between gap-[32px] lg:gap-[40px] max-w-[1460px] mx-auto">

                    {/* Column 1 */}
                    <FadeIn delay={200} direction="up" className="flex flex-col items-center lg:items-start w-full lg:w-[443px] cursor-pointer">
                        <h3
                            className="text-[#121010] font-medium leading-tight lg:leading-[34px] mb-[15px] lg:mb-[16px] transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(16px, 3.5vw, 22px)' }}
                        >
                            From Order to Design
                        </h3>
                        <p
                            className="text-[#121010]/90 font-normal leading-snug lg:leading-[22px] text-center lg:text-left transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 2.5vw, 15px)' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </FadeIn>

                    {/* Column 2 */}
                    <FadeIn delay={400} direction="up" className="flex flex-col items-center lg:items-start w-full lg:w-[432px] cursor-pointer">
                        <h3
                            className="text-[#121010] font-medium leading-tight lg:leading-[34px] mb-[15px] lg:mb-[16px] transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(16px, 3.5vw, 22px)' }}
                        >
                            From Install to Power On
                        </h3>
                        <p
                            className="text-[#121010]/90 font-normal leading-snug lg:leading-[22px] text-center lg:text-left transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 2.5vw, 15px)' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </FadeIn>

                    {/* Column 3 */}
                    <FadeIn delay={600} direction="up" className="flex flex-col items-center lg:items-start w-full lg:w-[428px] cursor-pointer">
                        <h3
                            className="text-[#121010] font-medium leading-tight lg:leading-[34px] mb-[15px] lg:mb-[16px] transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(16px, 3.5vw, 22px)' }}
                        >
                            From Day One to Onward
                        </h3>
                        <p
                            className="text-[#121010]/90 font-normal leading-snug lg:leading-[22px] text-center lg:text-left transition-colors duration-500"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 2.5vw, 15px)' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </FadeIn>

                </div>

            </div>
        </section>
    );
};
