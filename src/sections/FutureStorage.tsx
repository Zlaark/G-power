import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const FutureStorage = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden py-[52px] sm:py-[60px] md:py-[76px] lg:py-[96px]">
            <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
                <FadeIn delay={100} direction="up">
                    <div className="mx-auto max-w-[860px] text-center">
                        <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                            Future storage
                        </span>
                        <h2
                            className="mt-5 font-bold text-[#0F172A]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(26px, 3.1vw, 46px)',
                                lineHeight: '1.1',
                                letterSpacing: '-0.03em',
                            }}
                        >
                            Storage built with a cleaner future in mind.
                        </h2>
                        <p
                            className="mt-4 font-medium text-[#475569]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(13px, 1.05vw, 17px)',
                                lineHeight: '1.7',
                            }}
                        >
                            We combine advanced battery technology, system intelligence, and practical engineering to help industries, businesses, and communities move toward reliable energy independence.
                        </p>
                    </div>
                </FadeIn>

                <div className="mt-9 sm:mt-10 lg:mt-14 grid lg:grid-cols-[1.08fr_0.92fr] gap-5 sm:gap-6 lg:gap-10 items-start">
                    <FadeIn delay={220} direction="up" className="relative">
                        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#E5EBF2] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] max-h-[58vh]">
                            <Image
                                src="/solar-panel-future.jpg"
                                alt="Large scale solar panel installation under a blue sky with clouds"
                                fill
                                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.02]"
                                sizes="(max-width: 768px) 100vw, 54vw"
                                priority
                            />
                        </div>

                        <div className="hidden xl:block absolute -bottom-6 -right-6 w-[clamp(180px,14vw,220px)] rounded-[20px] border border-[#E5EBF2] bg-white p-4 shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
                            <p className="text-[#64748B] uppercase tracking-[0.16em] mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                Energy shift
                            </p>
                            <p className="font-semibold text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: '1.6' }}>
                                Designed to support a faster, cleaner transition across modern power systems.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-4 sm:gap-5 lg:pt-2">
                        <FadeIn delay={260} direction="up">
                            <div className="rounded-[24px] sm:rounded-[26px] border border-[#E5EBF2] bg-white p-6 sm:p-7 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.05)] section-soft-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-full border border-[#0A5191]/15 flex items-center justify-center bg-white">
                                        <div className="h-2.5 w-2.5 rounded-full bg-[#0A5191]" />
                                    </div>
                                    <div>
                                        <p className="text-[#0A5191] font-semibold uppercase tracking-[0.16em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                            Purpose
                                        </p>
                                        <p className="text-[#64748B]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px' }}>
                                            Energy storage for evolving demand
                                        </p>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(17px, 1.4vw, 22px)' }}>
                                    Mission-led engineering
                                </h3>
                                <p className="text-[#475569]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(13px, 0.98vw, 15px)', lineHeight: '1.72' }}>
                                    Accelerate the transition toward smarter and more sustainable energy systems by pairing advanced battery technology with intelligent integration.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={320} direction="up">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { title: 'Reliable output', text: 'Stable performance for modern energy demands.' },
                                    { title: 'Scalable systems', text: 'Built to expand as project requirements grow.' },
                                    { title: 'Smart integration', text: 'Designed to work cleanly with evolving grids.' },
                                    { title: 'Sustainable impact', text: 'Focused on cleaner, long-term energy outcomes.' },
                                ].map((item) => (
                                    <div key={item.title} className="rounded-[20px] sm:rounded-[22px] border border-[#E5EBF2] bg-[#FCFDFE] p-5 sm:p-6 shadow-[0_6px_16px_rgba(15,23,42,0.04)] card-soft-hover card-shimmer cursor-default">
                                        <p className="mb-1.5 font-semibold text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1vw, 15px)' }}>
                                            {item.title}
                                        </p>
                                        <p className="text-[#64748B]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(13px, 0.92vw, 14px)', lineHeight: '1.58' }}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={440} direction="up">
                    <div className="mt-7 sm:mt-8 rounded-[24px] sm:rounded-[26px] border border-[#E5EBF2] bg-white px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 shadow-[0_10px_24px_rgba(15,23,42,0.05)] section-soft-hover">
                        <div className="grid md:grid-cols-3 gap-5 md:gap-0 items-start">
                            <div className="md:pr-6 md:border-r md:border-[#E5EBF2]">
                                <p className="text-[#64748B] mb-2 uppercase tracking-[0.16em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                    Vision
                                </p>
                                <p className="font-medium text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.08vw, 16px)', lineHeight: '1.7' }}>
                                    We envision a world where energy efficiency and environmental responsibility work together to power tomorrow.
                                </p>
                            </div>
                            <div className="md:px-6 md:border-r md:border-[#E5EBF2]">
                                <p className="text-[#64748B] mb-2 uppercase tracking-[0.16em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                    Focus
                                </p>
                                <p className="font-medium text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.08vw, 16px)', lineHeight: '1.7' }}>
                                    Reliable storage solutions built for long-term value, clean integration, and practical deployment.
                                </p>
                            </div>
                            <div className="md:pl-6">
                                <p className="text-[#64748B] mb-2 uppercase tracking-[0.16em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                    Impact
                                </p>
                                <p className="font-medium text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.08vw, 16px)', lineHeight: '1.7' }}>
                                    Designed to support the next phase of electrification with dependable, scalable storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
