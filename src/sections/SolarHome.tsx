import { FadeIn } from '@/components/FadeIn';

export const SolarHome = () => {
    return (
        <section className="relative w-full py-[30px] md:py-[50px]">
            <div className="mx-auto max-w-[1920px] relative">
                <div className="w-full h-[50vw] max-h-[700px] min-h-[260px] relative overflow-hidden">
                    <img
                        src="/home8.png"
                        alt="Modern Home with Solar Panels and Electric Vehicle"
                        className="w-full h-full object-cover object-[center_20%]"
                    />
                </div>
            </div>
        </section>
    );
};
