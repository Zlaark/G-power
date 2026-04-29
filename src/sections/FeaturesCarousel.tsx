import { FadeIn } from "@/components/FadeIn";

const cards = [
    {
        image: '/Simple Aesthetic(Home Page).webp',
        title: 'Simple Aesthetic',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/Easy Installation(Home Page).webp',
        title: 'Easy Installation',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/Weather Resistant(Home Page).webp',
        title: 'Weather Resistant',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    },
    {
        image: '/Low Profile(Home Page).webp',
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
                        <FadeIn key={index} delay={index * 200} direction="right">
                            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 group cursor-pointer">
                                {/* Image Card */}
                                <div className="w-full h-[280px] md:h-[320px] lg:h-[380px] rounded-[14px] overflow-hidden relative bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#0A5191]/10">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                                        style={{ background: 'linear-gradient(360deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)' }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1 md:gap-2 w-full px-1">
                                    <h2
                                        className="font-bold text-sm md:text-base lg:text-[19px] leading-tight text-[#121010] group-hover:text-[#0A5191] transition-colors"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {card.title}
                                    </h2>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
