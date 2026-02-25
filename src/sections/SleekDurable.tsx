export const SleekDurable = () => {
    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-[1920px] relative">

                {/* Background Image */}
                <div className="w-full h-[1008px] relative overflow-hidden">
                    <img
                        src="/home4.png"
                        alt="Sleek and Durable Solar Panels"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark gradient overlay at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Text Content - bottom left */}
                    <div
                        className="absolute left-0 bottom-0 w-[1480px] flex flex-col items-start gap-[23px]"
                        style={{ padding: '44px 102px 102px' }}
                    >
                        <h2
                            className="text-white font-semibold leading-[49px] w-full max-w-[1276px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                        >
                            Sleek and Durable
                        </h2>
                        <p
                            className="text-white font-medium leading-[34px] max-w-[1323px]"
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
