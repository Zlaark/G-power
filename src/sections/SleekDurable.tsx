import { FadeIn } from '@/components/FadeIn';

export const SleekDurable = () => {

    return (
        <section className="relative w-full overflow-hidden rounded-none">
            <div className="relative w-full">


                {/* Background Image Container */}
                <div className="w-full h-screen md:h-[100vh] min-h-[700px] max-h-[1100px] relative overflow-hidden rounded-none">
                    <img
                        src="/home4.png"
                        alt="Sleek and Durable Solar Panels"
                        className="w-full h-full object-cover rounded-none"
                    />

                    {/* Base gradient for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                    {/* Interactive Glass Panel for Text */}
                    <FadeIn delay={200} direction="up" className="absolute left-0 right-0 md:left-[30px] lg:left-[80px] md:right-[30px] lg:right-[80px] bottom-0 px-[20px] md:px-0 pb-[30px] md:pb-[70px] pt-[20px] mb-0 md:mb-[-20px]" style={{ backgroundColor: 'transparent' }}>
                        <div className="max-w-[1200px] flex flex-col items-start gap-[10px] md:gap-[16px] px-0 md:px-[20px] lg:px-[40px] pt-[10px]">
                            <h2
                                className="text-white font-semibold leading-tight md:leading-[49px] w-full cursor-default tracking-wide"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 4.5vw, 32px)' }}
                            >
                                Sleek and Durable
                            </h2>
                            <p
                                className="text-white/90 font-medium leading-normal md:leading-[34px] w-full md:pr-[140px] cursor-default"
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(12px, 2.5vw, 22px)' }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
