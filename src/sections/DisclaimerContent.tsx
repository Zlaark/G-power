import { FadeIn } from "@/components/FadeIn";

export const DisclaimerContent = () => {
    return (
        <section className="bg-white py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center">
            <div className="max-w-[1200px] w-full">
                <FadeIn delay={100} direction="up">
                    <div className="space-y-8 md:space-y-12">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>General Information</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                The information provided on the GPower website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Professional Advice</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                The content on this website should not be considered as professional advice. Before making any decisions regarding renewable energy installations or investments, we recommend consulting with qualified professionals, including:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-base md:text-lg text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                <li>Licensed electrical engineers</li>
                                <li>Financial advisors</li>
                                <li>Legal counsel</li>
                                <li>Tax professionals</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Performance Estimates</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Any energy savings or production estimates provided on this website are based on standard scenarios and modeling. Actual performance may vary based on factors including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-base md:text-lg text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                <li>Local weather conditions</li>
                                <li>System orientation and shading</li>
                                <li>Electricity tariff structures and changes</li>
                                <li>System maintenance and performance degradation</li>
                                <li>Grid connectivity and net metering policies</li>
                            </ul>
                            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Actual results may differ from estimates. GPower does not guarantee specific energy production levels or financial returns.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>External Links</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Our website may contain links to external websites that are not controlled or maintained by GPower. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Product Specifications</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Product specifications, features, and pricing are subject to change without notice. While we make every effort to display accurate information, actual products may differ slightly from those shown on our website. Final specifications will be confirmed in your purchase agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Government Subsidies and Incentives</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Information regarding government subsidies, tax benefits, and incentive programs is subject to change based on government policies. While we assist in applying for available subsidies, we cannot guarantee subsidy approval or the actual disbursement amount as these are determined by third-party agencies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Technical Limitations</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Our products and services are subject to site-specific technical limitations. A site assessment is required to determine the feasibility of any installation. GPower reserved the right to refuse service if the installation is deemed technically unfeasible or unsafe.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Availability</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                We make no warranty that:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-base md:text-lg text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                <li>The website will be available at all times or without interruptions</li>
                                <li>Information on the website is complete, true, accurate, or non-misleading</li>
                                <li>Products and services will be available in all locations</li>
                                <li>Installation timelines will be met in all cases</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Limitation of Liability</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                In no event shall GPower or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GPower's website, even if GPower or a GPower authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Revisions</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                The materials appearing on GPower's website may include technical, typographical, or photographic errors. GPower does not warrant that any of the materials on its website are accurate, complete, or current. GPower may make changes to the materials contained on its website at any time without notice.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-200">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#121010]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contact Us</h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                If you have any questions about this Disclaimer, please contact us at:
                            </p>
                            <div className="mt-4 space-y-2 text-base md:text-lg text-[#4A4A4A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                <p><strong>Email:</strong> <a href="mailto:info@gpower.com" className="text-[#121010] hover:underline">info@gpower.com</a></p>
                                <p><strong>Phone:</strong> <a href="tel:+492118765420" className="text-[#121010] hover:underline">+49 211 8765 420</a></p>
                                <p><strong>Address:</strong> Green Energy Tower, Königsallee 92, 40212 Düsseldorf, Germany</p>
                            </div>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
