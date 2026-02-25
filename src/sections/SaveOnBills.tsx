export const SaveOnBills = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative">

                {/* Top Content: Title & Description */}
                <div className="w-full max-w-[1125px] ml-[86px] pt-[80px] flex flex-col gap-[23px]">
                    <h2
                        className="text-[#121010] font-semibold leading-[49px] w-full"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                    >
                        Save On Electricity Bills
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-[34px] w-full"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Solar Panel Image Area */}
                <div className="relative w-full h-[500px] mt-[40px]">
                    {/* Green gradient background to mimic the field */}
                    <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-green-100/60 via-green-50/40 to-transparent" />

                    {/* Solar Panel Image */}
                    <div className="absolute right-[100px] top-[0px] w-[700px] h-[500px]">
                        <img
                            src="/solar-hero-bg.png"
                            alt="Solar Panels"
                            className="w-full h-full object-cover rounded-lg shadow-2xl"
                            style={{ clipPath: 'polygon(15% 10%, 95% 0%, 100% 85%, 5% 95%)' }}
                        />
                    </div>

                    {/* Monthly Bill Savings Card */}
                    <div className="absolute left-[66px] bottom-[20px] w-[735px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                        <div className="px-[39px] py-[38px]">
                            <div className="flex flex-col gap-[19px]">
                                {/* Decorative Lines */}
                                <div className="flex items-center gap-[30px]">
                                    <div className="w-[66.5px] h-0 border-[3.5px] border-[#EF3C38]" />
                                    <div className="w-[66.5px] h-0 border-[1.5px] border-[#B1B1B1]" />
                                    <div className="w-[66.5px] h-0 border-[1.5px] border-[#B1B1B1]" />
                                </div>

                                {/* Subtitle */}
                                <h3
                                    className="text-[#121010] font-medium leading-[34px] w-full max-w-[656px]"
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                                >
                                    Monthly Bill Savings
                                </h3>

                                {/* Body Text */}
                                <p
                                    className="text-[#121010] font-normal leading-[22px] w-full max-w-[656px]"
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px' }}
                                >
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
