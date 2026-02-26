import Image from 'next/image';

export const AboutBanner = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative w-full aspect-[1989/890]">
                <Image
                    src="/about-banner.png"
                    alt="Modern home with rooftop solar panels, battery storage units, and electric vehicle"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
            </div>
        </section>
    );
};
