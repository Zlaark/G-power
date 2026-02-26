import Image from 'next/image';

export const AboutBanner2 = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative w-full aspect-[1941/923]">
                <Image
                    src="/about-solar-field2.png"
                    alt="Large solar panel array on green grass field under blue sky"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
            </div>
        </section>
    );
};
