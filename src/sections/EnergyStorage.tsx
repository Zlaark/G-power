import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const EnergyStorage = () => {
    return (
        <section id="energy-storage" className="relative w-full bg-white py-[64px] sm:py-[72px] md:py-[92px] lg:py-[112px] overflow-hidden">
            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px]">
                <FadeIn delay={100} direction="up">
                    <div className="mx-auto max-w-[900px] text-center">
                        <span className="inline-flex items-center justify-center rounded-full border border-[#D7E0EA] bg-white px-5 py-2 text-[#0A5191] font-medium tracking-[0.18em] uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                            Who We Are
                        </span>
                        <h2
                            className="mt-6 font-bold text-[#0F172A]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(30px, 4vw, 54px)',
                                lineHeight: '1.12',
                                letterSpacing: '-0.03em',
                            }}
                        >
                            Energy is changing.
                        </h2>
                        <p
                            className="mt-5 font-medium text-[#475569]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.35vw, 18px)',
                                lineHeight: '1.7',
                            }}
                        >
                            The world is moving toward cleaner, smarter, and more reliable power systems. At G-Power, we are building the technology that powers this transition.
                        </p>
                    </div>
                </FadeIn>

                <div className="mt-14 lg:mt-18 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
                    <FadeIn delay={220} direction="up" className="relative group">
                        <div className="relative overflow-hidden rounded-[28px] border border-[#E5EBF2] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
                            <Image
                                src="/wind-solar-energy.jpg"
                                alt="Wind turbines and solar panels in a renewable energy field at sunset"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                                sizes="(max-width: 768px) 100vw, 55vw"
                                priority
                            />
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-5">
                        <FadeIn delay={260} direction="up">
                            <div className="rounded-[24px] border border-[#E5EBF2] bg-white p-7 sm:p-8 md:p-9 shadow-[0_12px_30px_rgba(15,23,42,0.05)] section-soft-hover">
                                <h3 className="font-semibold text-[#0F172A] mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 2vw, 24px)' }}>
                                    Built for a changing grid
                                </h3>
                                <p className="text-[#475569]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.15vw, 17px)', lineHeight: '1.7' }}>
                                    Our advanced battery and energy storage solutions support homes, businesses, industries, and mobility systems across a rapidly evolving energy landscape.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={340} direction="up">
                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                                {[
                                    { title: 'Reliable systems', copy: 'Engineered for stable performance and long-term operation.' },
                                    { title: 'Scalable deployment', copy: 'Flexible solutions that grow with project demand.' },
                                    { title: 'Smarter integration', copy: 'Designed to connect cleanly with modern energy networks.' },
                                    { title: 'Future-ready impact', copy: 'Built to support the next phase of electrification.' },
                                ].map((item) => (
                                    <div key={item.title} className="rounded-[20px] sm:rounded-[24px] border border-[#E5EBF2] bg-white p-6 sm:p-7 shadow-[0_10px_24px_rgba(15,23,42,0.04)] card-soft-hover card-shimmer group cursor-default">
                                        <div className="w-10 h-10 rounded-full border border-[#0A5191]/20 flex items-center justify-center mb-4 bg-white icon-pop group-hover:border-[#0A5191]/40">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#0A5191] transition-transform duration-300 group-hover:scale-125" />
                                        </div>
                                        <h4 className="font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.4vw, 18px)' }}>
                                            {item.title}
                                        </h4>
                                        <p className="text-[#64748B]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', lineHeight: '1.65' }}>
                                            {item.copy}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={460} direction="up">
                    <div className="mt-8 mx-auto max-w-[980px] rounded-[24px] border border-[#E5EBF2] bg-white px-6 md:px-8 py-6 md:py-7 text-center shadow-[0_12px_32px_rgba(15,23,42,0.05)] section-soft-hover">
                        <p className="font-medium text-[#334155]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: '1.7' }}>
                            Through innovation, engineering excellence, and strong partnerships, we deliver energy solutions that are efficient, scalable, and built for the future.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
