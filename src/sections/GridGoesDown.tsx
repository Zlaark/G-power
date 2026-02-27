import { FadeIn } from '@/components/FadeIn';

export const GridGoesDown = () => {
    return (
        <section className="relative w-full pb-[40px] md:pb-[60px] lg:pb-[20px]">
            <div className="mx-auto relative">
                <div className="w-full aspect-square md:aspect-[21/9] lg:h-[800px] lg:max-h-[1000px] relative overflow-hidden">


                    <img
                        src="/home4.png"
                        alt="Solar Panels on Modern Home"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                    {/* Text Content - bottom left */}
                    <FadeIn delay={200} direction="up" className="absolute left-[20px] md:left-[80px] bottom-[20px] md:bottom-[70px] right-[20px] md:right-[80px] max-w-[1200px] flex flex-col gap-[8px] md:gap-[16px]">
                        <h2
                            className="font-semibold leading-tight md:leading-[49px] w-full text-white"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(18px, 3.5vw, 32px)' }}
                        >
                            Grid Goes Down,<br />Lights Stay On
                        </h2>
                        <p
                            className="text-white/90 font-medium leading-snug md:leading-relaxed md:leading-[34px] w-full md:pr-[240px] max-w-full md:max-w-[1050px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(11px, 2vw, 18px)' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
