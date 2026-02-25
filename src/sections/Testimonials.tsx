export const Testimonials = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white dark:bg-[#0A0A0A] px-6 py-24 sm:py-32 lg:px-8">
            {/* Background decoration */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="text-center">
                    <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase">Testimonials</h2>
                </div>

                <figure className="mt-10 pt-10 border-t border-gray-200 dark:border-white/10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-white sm:text-2xl sm:leading-9">
                        <p>
                            "Switching to this structured Next.js approach was arguably our best architectural decision this year. We shipped features 40% faster and onboarding new engineers became a breeze."
                        </p>
                    </blockquote>

                    <figcaption className="mt-10">
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900 dark:text-white">Sarah Jenkins</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900 dark:fill-white">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600 dark:text-gray-400">VP of Engineering at Acme Corp</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};
