export const GridGoesDown = () => {
    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-[1920px] relative">
                <div className="w-full h-[800px] relative overflow-hidden">
                    <img
                        src="/home4.png"
                        alt="Solar Panels on Modern Home"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Text Content - bottom left */}
                    <div className="absolute left-[87px] bottom-[100px] flex flex-col gap-[31px]">
                        <h2
                            className="text-white font-semibold leading-[49px] w-[343px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                        >
                            Grid Goes Down, Lights Stay On
                        </h2>
                        <p
                            className="text-white font-medium leading-[34px] max-w-[1094px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
