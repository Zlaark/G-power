import { Button } from '@/components/ui/Button';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-transparent blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Next.js 15 + App Router Ready
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
                    Build the next generation <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">of web applications.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Experience blazing fast performance, solid directory structures, and gorgeous modern design out of the box. The ultimate setup for your new project.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                        Get Started Free
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        View Documentation
                    </Button>
                </div>
            </div>
        </section>
    );
};
