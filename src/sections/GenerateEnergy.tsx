export const GenerateEnergy = () => {
    return (
        <section className="relative w-full bg-[#FBFBFB] overflow-hidden">
            <div className="mx-auto max-w-[1920px] relative min-h-[700px]">

                {/* Red Accent Line */}
                <div className="absolute left-[122px] top-[237px] w-[66.5px] h-0 border-[3.5px] border-[#EF3C38]" />

                {/* Text Content */}
                <div className="absolute left-[122px] top-[248px] w-[635px] flex flex-col gap-[23px]">
                    <h2
                        className="text-[#121010] font-semibold leading-[49px] w-full"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                    >
                        Generate Energy
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-[34px] w-full"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    </p>
                </div>

                {/* Image */}
                <div className="absolute right-[80px] top-[107px] w-[580px] h-[520px]">
                    <img
                        src="/home3.png"
                        alt="Solar Energy Generation"
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '20px 20px 0px 0px' }}
                    />
                </div>

            </div>
        </section>
    );
};
