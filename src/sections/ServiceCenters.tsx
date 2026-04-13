'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { MapPin, Building2, Map } from 'lucide-react';

const serviceData = [
    {
        region: "North",
        hq: null,
        states: [
            { name: "Haryana", cities: ["Rohtak", "Jhajjar", "Bhiwani", "Ambala"] },
            { name: "Himachal Pradesh", cities: ["Kangra", "Solan", "Mandi"] },
            { name: "Jammu & Kashmir", cities: ["Jammu", "Srinagar"] },
            { name: "Punjab", cities: ["Bhatinda", "Pathankot", "Chandigarh", "Mohali"] },
            { name: "Delhi/NCR", cities: ["Ghaziabad", "Faridabad", "Delhi"] },
            { name: "Rajasthan", cities: ["Bhilwara", "Bharathpur", "Jaipur", "Kota", "Barmer", "Sikar"] },
            { name: "UP – East", cities: ["Varanasi", "Jhansi", "Kanpur", "Prayagraj", "Lucknow", "Gorakhpur", "Ayodhya"] },
            { name: "UP – West", cities: ["Meerut", "Bareilly", "Mathura", "Aligarh & Hapur", "Moradabad", "Etawah"] },
            { name: "Uttarakhand", cities: ["Haldwani", "Dehradun"] },
        ]
    },
    {
        region: "East",
        hq: "Kolkata",
        states: [
            { name: "Assam", cities: ["Guwahati", "Bongaigaon"] },
            { name: "Bihar", cities: ["Gaya", "Begusarai", "Bhagalpur"] },
            { name: "Jharkhand", cities: ["Ranchi", "Bokaro", "Jamshedpur"] },
            { name: "Odisha", cities: ["Bhadrak", "Cuttack"] },
            { name: "West Bengal", cities: ["Baharampur", "Siliguri", "Kharagpur", "Bardhaman", "Bankura"] },
        ]
    },
    {
        region: "South",
        hq: "Bengaluru",
        states: [
            { name: "Andhra Pradesh", cities: ["Vizag", "Tirupathi", "Vijayawada"] },
            { name: "Karnataka", cities: ["Mysore", "Bijapur", "Davengiri", "Belgum Hubli", "Bangalore", "Hassan"] },
            { name: "Kerala", cities: ["Ernakulam"] },
            { name: "Tamil Nadu", cities: ["Chennai", "Krishnagiri", "Tirunelveli"] },
            { name: "Telangana", cities: ["Hyderabad", "Khammam", "Karimnagar"] },
        ]
    },
    {
        region: "West",
        hq: "Mumbai",
        states: [
            { name: "Chhattisgarh", cities: ["Bilaspur"] },
            { name: "Gujarat", cities: ["Surat", "Ahmedabad"] },
            { name: "Madhya Pradesh", cities: ["Bhopal", "Sagar", "Betul", "Guna", "Satna", "Jabalpur", "Ujjain / Ratlam"] },
            { name: "Maharashtra", cities: ["Nashik, Dhule", "Mumbai", "Pune", "Kolhapur / Sangli / Ratnagiri & Goa", "Nanded / Aurangabad"] },
        ]
    }
];

export const ServiceCenters = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#F9FAFB] py-16 lg:py-24 px-6 lg:px-12 xl:px-16 border-t border-black/5">
            <div className="mx-auto max-w-[1400px]">
                <FadeIn delay={100} direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#121010] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            GPower Service Centers
                        </h2>
                        <p className="text-[#4A4A4A] text-base lg:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            With a vast network across India, our expert service teams are always nearby to ensure uninterrupted power and rapid support.
                        </p>
                    </div>
                </FadeIn>

                {/* Tabs */}
                <FadeIn delay={200} direction="up">
                    <div className="w-full max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-3">
                        {serviceData.map((data, idx) => (
                            <button
                                key={data.region}
                                onClick={() => setActiveTab(idx)}
                                className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeTab === idx 
                                    ? 'bg-[#0A5191] text-white shadow-[0_8px_20px_rgba(10, 81, 145,0.3)] scale-105' 
                                    : 'bg-white text-[#4A4A4A] border border-[#E5E7EB] hover:border-[#0A5191] hover:text-[#0A5191]'}`}
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                {data.region} Zone
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Content Area */}
                <FadeIn delay={300} direction="up" className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-[24px] p-6 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 min-h-[400px]">
                        
                        {/* Zonal HQ Header if exists */}
                        {serviceData[activeTab].hq && (
                            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-[#E1EBF5] flex items-center justify-center text-[#0A5191]">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0A5191] uppercase tracking-wider mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Zonal Headquarters</p>
                                    <h3 className="text-xl font-medium text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>{serviceData[activeTab].hq}</h3>
                                </div>
                            </div>
                        )}

                        {/* States Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
                            {serviceData[activeTab].states.map((state) => (
                                <div key={state.name} className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Map className="w-5 h-5 text-[#0A5191]" />
                                        <h4 className="text-lg font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                            {state.name}
                                        </h4>
                                    </div>
                                    <ul className="flex flex-wrap gap-2">
                                        {state.cities.map((city) => (
                                            <li key={city} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-[#4A4A4A] transition-all hover:bg-white hover:border-[#0A5191]/30 hover:shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                                <span>{city}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
