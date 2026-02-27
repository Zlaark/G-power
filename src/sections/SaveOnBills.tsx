import { FadeIn } from '@/components/FadeIn';

export const SaveOnBills = () => {

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative">


                {/* Background Image Container */}
                <div className="absolute top-0 right-0 w-full md:w-[85%] h-full z-0 hidden md:block">
                    <div className="absolute inset-0 w-[60%] bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                    <img
                        src="/home2.webp"
                        alt="Solar Panel Field"
                        className="w-full h-full object-cover object-right"
                    />
                </div>

                {/* Mobile Background Image (visible only on small screens) */}
                <div className="absolute top-0 right-0 w-full h-[50%] z-0 md:hidden opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
                    <img
                        src="/home2.webp"
                        alt="Solar Panel Field mobile"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Top Content: Title & Description */}
                <div className="w-full max-w-[700px] px-[20px] md:px-[60px] lg:ml-[86px] lg:px-0 pt-[40px] md:pt-[60px] lg:pt-[100px] flex flex-col gap-[15px] md:gap-[23px] relative z-10">
                    <FadeIn delay={100} direction="right">
                        <h2
                            className="font-semibold leading-tight md:leading-[49px] w-full text-[#121010]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(17px, 2.2vw, 22px)' }}
                        >
                            Save On Electricity Bills
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300} direction="right">
                        <p
                            className="text-[#121010] font-medium leading-normal md:leading-[34px] w-full"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(11px, 1.2vw, 14px)' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </FadeIn>
                </div>

                {/* Solar Panel Image Area */}
                <div className="relative w-full h-auto min-h-[300px] md:h-[400px] mt-[40px] z-10">

                    {/* Monthly Bill Savings Card — IntersectionObserver triggers slide-in */}
                    <FadeIn delay={500} direction="up" className="relative md:absolute md:left-[66px] md:bottom-[20px] w-full md:w-[735px] max-w-[calc(100%-40px)] mx-auto md:mx-0 bg-white/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none rounded-[20px] md:rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:shadow-none border border-white/40 md:border-none mb-[40px] md:mb-0 group cursor-default">
                        <div className="px-[20px] md:px-[39px] py-[30px] md:py-[50px]">
                            <div className="flex flex-col gap-[15px] md:gap-[19px]">

                                {/* Decorative Lines */}
                                <div className="card-lines flex items-center gap-[15px] md:gap-[30px]">
                                    <div className="w-[40px] md:w-[66.5px] h-0 border-[3px] md:border-[3.5px] border-[#EF3C38] rounded-full" />
                                    <div className="w-[40px] md:w-[66.5px] h-0 border-[1.5px] border-[#B1B1B1] transition-colors duration-500 group-hover:border-[#EF3C38]" />
                                    <div className="w-[40px] md:w-[66.5px] h-0 border-[1.5px] border-[#B1B1B1] transition-colors duration-500 group-hover:border-[#EF3C38]" />
                                </div>

                                {/* Subtitle */}
                                <h3
                                    className="card-title text-[#121010] font-medium leading-tight md:leading-[34px] w-full max-w-[656px] transition-colors duration-500 group-hover:text-[#EF3C38]"
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(17px, 3vw, 22px)' }}
                                >
                                    Monthly Bill Savings
                                </h3>

                                {/* Body Text */}
                                <p
                                    className="card-body text-[#121010]/80 font-normal leading-normal md:leading-[22px] w-full max-w-[656px]"
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 2vw, 15px)' }}
                                >
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
