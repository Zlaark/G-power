const cards = [
    {
        image: '/home5.png',
        title: 'Simple Aesthetic',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/home6.png',
        title: 'Easy Installation',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/home7.png',
        title: 'Weather Resistant',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/home5.png',
        title: 'Low Profile',
        description: 'Rail-free mounting keeps panels close to your roof and panel skirts hide hardware and edges from view.',
    },
];

export const FeaturesCarousel = () => {
    return (
        <section className="relative w-full bg-white pt-6 pb-6 md:pt-[40px] md:pb-[30px] lg:pt-[50px] lg:pb-[40px]">
            <div className="mx-auto max-w-[1920px] relative w-full px-4 md:px-12 lg:px-[102px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 md:gap-3 lg:gap-4"
                        >
                            {/* Image Card */}
                            <div className="w-full h-[280px] md:h-[320px] lg:h-[380px] rounded-[14px] overflow-hidden relative bg-white shadow-sm">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-3/4 pointer-events-none"
                                    style={{ background: 'linear-gradient(360deg, #000000 0%, rgba(0,0,0,0) 100%)' }}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-1 md:gap-2 w-full">
                                <h2
                                    className="font-semibold text-sm md:text-base lg:text-lg leading-tight text-[#121010]"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    {card.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
