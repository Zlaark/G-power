import { FadeIn } from '@/components/FadeIn';

export const SolarHome = () => {
    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-[1920px] relative">
                <div className="w-full h-[35vw] max-h-[480px] min-h-[220px] relative overflow-hidden">
                    <img
                        src="/home8.png"
                        alt="Modern Home with Solar Panels and Electric Vehicle"
                        className="w-full h-full object-cover object-[center_20%]"
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
