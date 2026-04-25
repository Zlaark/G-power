import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export const FutureStorage = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden py-[80px] md:py-[100px] lg:py-[128px]">
            <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-10 lg:px-[100px]">
                <FadeIn delay={100} direction="up">
                    <div className="mx-auto max-w-[920px] text-center">
                        <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                            Future storage
                        </span>
                        <h2
                            className="mt-6 font-bold text-[#0F172A]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(30px, 4vw, 56px)',
                                lineHeight: '1.06',
                                letterSpacing: '-0.03em',
                            }}
                        >
                            Storage built with a cleaner future in mind.
                        </h2>
                        <p
                            className="mt-5 font-medium text-[#475569]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(14px, 1.25vw, 18px)',
                                lineHeight: '1.75',
                            }}
                        >
                            We combine advanced battery technology, system intelligence, and practical engineering to help industries, businesses, and communities move toward reliable energy independence.
                        </p>
                    </div>
                </FadeIn>

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-14 items-start">
                    <FadeIn delay={220} direction="up" className="relative">
                        <div className="relative overflow-hidden rounded-[32px] border border-[#E5EBF2] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
                            <Image
                                src="/solar-panel-future.jpg"
                                alt="Large scale solar panel installation under a blue sky with clouds"
                                fill
                                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.02]"
                                sizes="(max-width: 768px) 100vw, 58vw"
                                priority
                            />
                        </div>

                        <div className="hidden lg:block absolute -bottom-8 -right-8 w-[240px] rounded-[24px] border border-[#E5EBF2] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                            <p className="text-[#64748B] uppercase tracking-[0.16em] mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                                Energy shift
                            </p>
                            <p className="font-semibold text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: '1.65' }}>
                                Designed to support a faster, cleaner transition across modern power systems.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-6 lg:pt-4">
                        <FadeIn delay={260} direction="up">
                            <div className="rounded-[30px] border border-[#E5EBF2] bg-white p-7 md:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="h-12 w-12 rounded-full border border-[#0A5191]/15 flex items-center justify-center bg-white">
                                        <div className="h-3 w-3 rounded-full bg-[#0A5191]" />
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
                                <h3 className="font-semibold text-[#0F172A] mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 2vw, 25px)' }}>
                                    Mission-led engineering
                                </h3>
                                <p className="text-[#475569]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: '1.8' }}>
                                    Accelerate the transition toward smarter and more sustainable energy systems by pairing advanced battery technology with intelligent integration.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={320} direction="up">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Reliable output', text: 'Stable performance for modern energy demands.' },
                                    { title: 'Scalable systems', text: 'Built to expand as project requirements grow.' },
                                    { title: 'Smart integration', text: 'Designed to work cleanly with evolving grids.' },
                                    { title: 'Sustainable impact', text: 'Focused on cleaner, long-term energy outcomes.' },
                                ].map((item) => (
                                    <div key={item.title} className="rounded-[22px] border border-[#E5EBF2] bg-[#FCFDFE] p-5 shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
                                        <p className="mb-2 font-semibold text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
                                            {item.title}
                                        </p>
                                        <p className="text-[#64748B]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(13px, 1vw, 15px)', lineHeight: '1.65' }}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={440} direction="up">
                    <div className="mt-10 rounded-[30px] border border-[#E5EBF2] bg-white px-6 py-6 md:px-8 md:py-7 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
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
