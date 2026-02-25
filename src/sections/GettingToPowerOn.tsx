export const GettingToPowerOn = () => {
    return (
        <section className="relative w-full bg-white pt-[140px] pb-[200px]">
            <div className="mx-auto max-w-[1920px] relative px-[86px]">

                {/* Header Row: Title left + Description right */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-[23px] mb-[60px]">
                    <h2
                        className="text-[#121010] font-semibold leading-[49px] flex-shrink-0 w-[512px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                    >
                        Getting to Power On
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-[34px] max-w-[1240px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more
                    </p>
                </div>

                {/* Centered Card with Image */}
                <div className="flex justify-center mb-[60px] px-[200px]">
                    <div
                        className="relative w-full h-[582px] rounded-[20px] overflow-hidden"
                        style={{ background: '#3E2727' }}
                    >
                        <img
                            src="/home9.png"
                            alt="Solar Panel Installation"
                            className="absolute left-0 top-[-67px] w-full h-[700px] object-cover"
                        />
                    </div>
                </div>

                {/* Progress Line */}
                <div className="relative w-full max-w-[1460px] mx-auto mb-[28px]">
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
                <div className="flex flex-col lg:flex-row justify-between gap-[40px] max-w-[1460px] mx-auto">

                    {/* Column 1 */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[443px]">
                        <h3
                            className="text-[#121010] font-medium leading-[34px] mb-[40px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                        >
                            From Order to Design
                        </h3>
                        <p
                            className="text-[#121010] font-normal leading-[22px] text-center lg:text-center"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[432px]">
                        <h3
                            className="text-[#121010] font-medium leading-[34px] mb-[40px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                        >
                            From Install to Power On
                        </h3>
                        <p
                            className="text-[#121010] font-normal leading-[22px] text-center lg:text-center"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[428px]">
                        <h3
                            className="text-[#121010] font-medium leading-[34px] mb-[40px]"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                        >
                            From Day One to Onward
                        </h3>
                        <p
                            className="text-[#121010] font-normal leading-[22px] text-center lg:text-center"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px' }}
                        >
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
