import { Button } from '@/components/ui/Button';

export const Hero2 = () => {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#050505] pt-32 lg:pt-40 pb-20 lg:pb-32">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/40 to-indigo-100/40 dark:from-blue-900/20 dark:to-indigo-900/20 blur-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 dark:from-cyan-900/20 dark:to-blue-900/20 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="max-w-2xl text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-300 text-sm font-semibold mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Introducing Version 2.0
                        </div>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                            Scale your ideas <br />
                            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">absolute power</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                            We provide the essential components and structure you need to rapidly build, test, and deploy modern applications without the overhead.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-500/20">
                                Start building
                            </Button>
                            <div className="flex items-center gap-4 px-4 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050505]" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User avatar" />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold text-gray-900 dark:text-white">10k+</span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-1">users</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Graphic */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative rounded-2xl bg-gray-900/5 dark:bg-white/5 p-2 backdrop-blur-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none" />

                            {/* Fake dashboard UI snippet */}
                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Revenue</div>
                                            <div className="text-3xl font-bold text-gray-900 dark:text-white">$124,500.00</div>
                                        </div>
                                        <div className="px-2 py-1 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold rounded flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                            14.5%
                                        </div>
                                    </div>

                                    {/* Fake Chart */}
                                    <div className="h-32 flex items-end justify-between gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                                        {[40, 70, 45, 90, 65, 85, 100, 75, 55, 80].map((height, i) => (
                                            <div key={i} className="w-full bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t-sm" style={{ height: `${height}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 blur-sm opacity-50 animate-bounce" style={{ animationDuration: '3s' }} />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-md opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />
                    </div>

                </div>
            </div>
        </section>
    );
};
