import { FadeIn } from "./FadeIn";
import { LegalBreadcrumbs } from "./LegalBreadcrumbs";

interface PageHeroProps {
    title: string;
    breadcrumbPage: string;
    backgroundImage: string;
    description?: string;
    pillText?: string;
    children?: React.ReactNode;
}

export const PageHero = ({ title, breadcrumbPage, backgroundImage, description, pillText, children }: PageHeroProps) => {
    return (
        <section className="relative w-full h-[50vh] min-h-[360px] bg-[#01050A] overflow-hidden flex justify-center">
            {/* hero_bg */}
            <div
                className="absolute left-0 right-0 top-0 bottom-0 animate-ken-burns"
                style={{
                    background: `url('${backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <FadeIn delay={100} direction="up">
                    <LegalBreadcrumbs currentPage={breadcrumbPage} />
                    
                    {pillText && (
                        <div className="flex items-center justify-center gap-[10px] border border-white/40 rounded-full px-[22px] py-[8px] mb-8 backdrop-blur-sm mx-auto w-fit">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#0A5191] shrink-0" />
                            <span className="text-white font-medium uppercase tracking-[0.18em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}>
                                {pillText}
                            </span>
                        </div>
                    )}

                    <h1
                        className="text-white font-bold"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(36px, 5vw, 72px)',
                            lineHeight: '1.15',
                        }}
                    >
                        {title}
                    </h1>
                    {description && (
                        <p 
                            className="text-white/90 max-w-2xl mx-auto font-medium mt-6"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 2vw, 22px)' }}
                        >
                            {description}
                        </p>
                    )}
                    {children}
                </FadeIn>
            </div>
        </section>
    );
};
