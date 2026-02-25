export const SolarMaintenance = () => {
    return (
        <section className="relative w-full bg-white">
            <div className="mx-auto max-w-[1920px] relative">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes slideFromBottom {
                        0% { opacity: 0; transform: translateY(30px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes textShimmer {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 200% 50%; }
                    }
                    @keyframes gentleBob {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                    @keyframes expandLine {
                        0% { width: 0%; opacity: 0; }
                        100% { width: 100%; opacity: 1; }
                    }
                    .animate-line {
                        animation: expandLine 1.5s ease-out forwards;
                    }
                    .animate-title-shimmer {
                        background: linear-gradient(90deg, #121010 0%, #EF3C38 30%, #121010 60%);
                        background-size: 200% auto;
                        color: transparent;
                        -webkit-background-clip: text;
                        background-clip: text;
                        animation: slideFromBottom 1s ease-out forwards, textShimmer 4s linear infinite, gentleBob 5s ease-in-out infinite 1s;
                    }
                    .animate-subtext {
                        animation: slideFromBottom 1s ease-out forwards, gentleBob 6s ease-in-out infinite 1.2s;
                    }
                `}} />

                {/* Horizontal Divider Line */}
                <div className="flex justify-center pt-[120px]">
                    <div className="w-[1748px] max-w-[calc(100%-40px)] h-0 border-[3px] border-[#DADADA] animate-line" />
                </div>

                {/* Title & Description - Centered */}
                <div className="flex flex-col items-center gap-[23px] py-[106px] px-6">
                    <h2
                        className="font-semibold leading-[49px] text-center w-full max-w-[1197px] opacity-0 animate-title-shimmer"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '40px' }}
                    >
                        Solar Maintenance Made Easy: A Homeowner&apos;s Guide
                    </h2>
                    <p
                        className="text-[#121010] font-medium leading-[34px] text-center max-w-[1301px] opacity-0 animate-subtext"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px' }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

            </div>
        </section>
    );
};
