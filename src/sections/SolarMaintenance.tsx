export const SolarMaintenance = () => {
    return (
        <section className="relative w-full bg-white">
            <div className="mx-auto max-w-[1920px] relative">

                {/* Horizontal Divider Line */}
                <div className="flex justify-center pt-[120px]">
                    <div className="w-[1748px] max-w-[calc(100%-40px)] h-0 border-[3px] border-[#DADADA]" />
                </div>

                {/* Title & Description - Centered */}
                <div className="flex flex-col items-center gap-[23px] py-[106px] px-6">
                    <h2
                        className="text-[#121010] font-semibold leading-[49px] text-center w-full max-w-[1197px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                    >
                        Solar Maintenance Made Easy: A Homeowner&apos;s Guide
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-[34px] text-center max-w-[1301px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

            </div>
        </section>
    );
};
