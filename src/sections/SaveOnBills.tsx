export const SaveOnBills = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative">

                {/* Top Content: Title & Description */}
                <div className="w-full max-w-[1125px] ml-[86px] pt-[160px] flex flex-col gap-[23px]">
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

                    {/* Monthly Bill Savings Card */}
                    <div className="absolute left-[66px] bottom-[20px] w-[735px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                        <div className="px-[39px] py-[50px]">
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
