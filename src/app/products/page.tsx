"use client";

import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Zap, ShieldCheck, Clock, Settings, ArrowRight, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

import { LegalBreadcrumbs } from "@/components/LegalBreadcrumbs";
import Image from "next/image";

const productCategories = [
    {
        title: "Full Load 5.0 – BESS Utility Scale",
        description: "Large-scale energy storage systems designed for grid stability and utility-level performance.",
        products: [
            {
                name: "Full Load 5.0",
                tagline: "Industrial-Grade BESS",
                image: "/full-load-5.png",
                specs: ["5 kWh Capacity", "98% Efficiency", "15+ Years Life"],
                link: "/solutions/utility/products/utility-battery-1"
            }
        ]
    },
    {
        title: "Jumbo Commercial & Industrial",
        description: "Versatile storage solutions for commercial buildings, factories, and industrial applications.",
        products: [
            {
                name: "Jumbo 0.25",
                tagline: "Compact C&I Solution",
                image: "/jumbo-025.png",
                specs: ["0.25 kWh", "Modular Design", "96% Efficiency"],
                link: "/solutions/commercial-industrial/products/ci-battery-1"
            },
            {
                name: "Jumbo 0.40",
                tagline: "Efficient Power Storage",
                image: "/jumbo-040.png", // Assuming path
                specs: ["0.40 kWh", "High Density", "Long Lifecycle"],
                link: "/solutions/commercial-industrial/products/ci-battery-2"
            },
            {
                name: "Jumbo HV Series",
                tagline: "High Voltage Performance",
                image: "/jumbo-hv.png",
                specs: ["240V, 380V, 480V @ 100 AH", "Industrial Grade", "Modular Scalability"],
                link: "/solutions/commercial-industrial/products/ci-battery-3"
            },
            {
                name: "Jiyu Tel Series",
                tagline: "Telecom Energy Specialist",
                image: "/jiyu-tel.png",
                specs: ["48V (50AH, 100AH, 800AH)", "Telecom Optimized", "Long Cycle Life"],
                link: "/solutions/new-application-business/products/enterprise-hub"
            }
        ]
    },
    {
        title: "Power Pod",
        description: "Residential energy storage systems providing backup and energy independence for homes.",
        products: [
            {
                name: "Jiva Series",
                tagline: "Home Energy Guardian",
                image: "/jiva.png",
                specs: ["Jiva 1000, 2500, 5000", "Smart BMS", "Plug & Play"],
                link: "/solutions/residential/products/res-battery-1"
            },
            {
                name: "Yuva",
                tagline: "Next-Gen Energy Pod",
                image: "/yuva.png",
                specs: ["Sleek Design", "App Integrated", "Fast Charging"],
                link: "/solutions/residential/products/res-battery-2"
            }
        ]
    },
    {
        title: "EVGO (2W, 3W, MHE)",
        description: "High-performance lithium battery packs engineered for 2-Wheelers, 3-Wheelers, and Material Handling Equipment.",
        products: [
            {
                name: "EVGO Mobility Series",
                tagline: "2W, 3W & MHE Compatible",
                image: "/evgo.png",
                specs: ["High Safety Standards", "ARAI Certified", "Rapid Charging Support"],
                link: "/solutions/2-3-wheeler/products/ev-pro-72v"
            }
        ]
    },
    {
        title: "Others",
        description: "Specialized energy solutions for diverse high-tech sectors including Marine, Drone, and Railways.",
        products: [
            {
                name: "Marine, Drone, Railways",
                tagline: "Customized Applications",
                image: "/others-app.png",
                specs: ["Marine Grade Hardware", "Drone Power Systems", "Railway Safety Standards"],
                link: "/solutions/new-application-business/products/core-station"
            }
        ]
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[420px] md:h-[72vh] md:min-h-[540px] flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none select-none">
                    <Image
                        src="/Battery Energy Storage Systems (BESS)  (About Us Page).webp"
                        alt="G-Power Products"
                        fill
                        priority
                        className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center px-6">
                    <FadeIn delay={50} direction="up">
                        <LegalBreadcrumbs currentPage="Products" />
                    </FadeIn>
                    <FadeIn delay={200} direction="up">
                        <h1 className="text-white font-medium leading-tight mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(34px, 5.6vw, 64px)" }}>
                            Our Products
                        </h1>
                    </FadeIn>
                    <FadeIn delay={320} direction="up">
                        <p className="text-white/80 max-w-[700px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)" }}>
                            Explore our comprehensive range of battery energy storage solutions for every scale and application
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Product Listing */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20">
                {productCategories.map((category, catIndex) => (
                    <div key={catIndex} id={`category-${catIndex}`} className="mb-24 last:mb-0 scroll-mt-32">
                        <FadeIn delay={200} direction="up">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#0A5191]/10 pb-8">
                                <div className="max-w-2xl">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#121010] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {category.title}
                                    </h2>
                                    <p className="text-[#475569] text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {category.description}
                                    </p>
                                </div>
                                <div className="text-[#475569] font-bold text-sm uppercase tracking-widest">
                                    {category.products.length} {category.products.length === 1 ? 'Product' : 'Products'}
                                </div>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.products.map((product, prodIndex) => (
                                <FadeIn key={prodIndex} delay={300 + (prodIndex * 100)} direction="up">
                                    <div className="group bg-white rounded-[32px] border border-[#E5EBF2] overflow-hidden hover:shadow-[0_20px_50px_rgba(10,81,145,0.12)] hover:border-[#0A5191]/20 transition-all duration-500 flex flex-col h-full">
                                        {/* Image Area */}
                                        <div className="relative aspect-[4/3] bg-[#F8FAFC] overflow-hidden">
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#0A5191] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                                                    {product.tagline}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8 flex flex-col flex-1">
                                            <h3 className="text-2xl font-bold text-[#121010] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                                {product.name}
                                            </h3>
                                            
                                            {/* Specs List */}
                                            <div className="space-y-3 mb-8 flex-1">
                                                {product.specs.map((spec, sIndex) => (
                                                    <div key={sIndex} className="flex items-center gap-2 text-[#475569] text-sm font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0A5191]/40" />
                                                        {spec}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Action Link */}
                                            <Link 
                                                href={product.link}
                                                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#0A5191] text-white rounded-[16px] font-bold hover:bg-[#0A5191]/90 transition-all shadow-[0_10px_25px_rgba(10,81,145,0.2)]"
                                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                            >
                                                <span>View Details</span>
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
