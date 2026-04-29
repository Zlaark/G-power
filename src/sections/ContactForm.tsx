'use client';

import { useState } from 'react';
import { FadeIn } from "@/components/FadeIn";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        phone: ''
    });

    const validateEmail = (email: string) => {
        if (!email) return '';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const validatePhone = (phone: string) => {
        if (!phone) return '';
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return 'Please enter a valid 10-digit phone number';
        }
        return '';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Filter non-digits for phone field
        let processedValue = value;
        if (name === 'phone') {
            processedValue = value.replace(/\D/g, '').slice(0, 10);
        }
        
        setFormData(prev => ({ ...prev, [name]: processedValue }));
        
        // Clear error when user starts typing
        if (name === 'email') {
            setErrors(prev => ({ ...prev, email: '' }));
        } else if (name === 'phone') {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const emailError = validateEmail(formData.email);
        const phoneError = validatePhone(formData.phone);
        
        setErrors({
            email: emailError,
            phone: phoneError
        });

        if (emailError || phoneError) {
            return;
        }

        // If validation passes, you can submit the form
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
    };

    return (
        <section className="bg-white py-12 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center">
            <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                
                {/* Contact Form Section */}
                <div className="lg:col-span-3">
                    <FadeIn delay={100} direction="right">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#121010] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Send Us a Message
                            </h2>
                            <p className="text-[#4A4A4A] mb-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>First Name *</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="John"
                                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-500 focus:outline-none focus:border-[#0A5191] transition-colors"
                                            style={{ fontFamily: "'Poppins', sans-serif" }}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Last Name *</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Doe"
                                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-500 focus:outline-none focus:border-[#0A5191] transition-colors"
                                            style={{ fontFamily: "'Poppins', sans-serif" }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Email Address *</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john.doe@example.com"
                                            className={`w-full bg-[#F9FAFB] border ${errors.email ? 'border-red-500' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-500 focus:outline-none focus:border-[#0A5191] transition-colors`}
                                            style={{ fontFamily: "'Poppins', sans-serif" }}
                                            required
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Phone Number *</label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="9876543210"
                                            pattern="[0-9]{10}"
                                            inputMode="numeric"
                                            className={`w-full bg-[#F9FAFB] border ${errors.phone ? 'border-red-500' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-500 focus:outline-none focus:border-[#0A5191] transition-colors`}
                                            style={{ fontFamily: "'Poppins', sans-serif" }}
                                            required
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>What are you interested in?</label>
                                    <select 
                                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-500 focus:outline-none focus:border-[#0A5191] transition-colors appearance-none"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Sales</option>
                                        <option>Support</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Message *</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project or how we can help you..."
                                        rows={5}
                                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-500 focus:outline-none focus:border-[#0A5191] transition-colors resize-none"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="bg-[#0A5191] text-white px-8 py-4 rounded-[14px] font-bold flex items-center justify-center space-x-2 hover:bg-[#d63531] transition-all w-full md:w-auto"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </FadeIn>
                </div>

                {/* Contact Info Column */}
                <div className="lg:col-span-2 space-y-10">
                    <FadeIn delay={200} direction="left">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px]">
                                    <MapPin className="text-[#0A5191]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Corporate Office Address</h4>
                                    <p className="text-[#4A4A4A]" style={{ fontFamily: "'Poppins', sans-serif" }}>No. 621/4F, Sire Mansion, Anna Salai, Thousand Lights, Chennai, Tamil Nadu - 600006</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px]">
                                    <Phone className="text-[#0A5191]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Reg. Mobile No &amp; Email ID</h4>
                                    <p className="text-[#4A4A4A]" style={{ fontFamily: "'Poppins', sans-serif" }}>+91 9894277915</p>
                                    <p className="text-[#4A4A4A]" style={{ fontFamily: "'Poppins', sans-serif" }}>info@gpowerindia.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px]">
                                    <Mail className="text-[#0A5191]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</h4>
                                    <p className="text-[#4A4A4A]" style={{ fontFamily: "'Poppins', sans-serif" }}>info@gpowerindia.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px]">
                                    <Clock className="text-[#0A5191]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Business Hours</h4>
                                    <p className="text-[#4A4A4A]" style={{ fontFamily: "'Poppins', sans-serif" }}>Monday to Saturday - 9:30AM to 6:30PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Regional Offices Block */}
                        <div className="mt-8 md:mt-12 bg-[#01050A] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Globe size={120} />
                            </div>
                            <h4 className="text-lg md:text-xl font-bold mb-6 relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>Regional Offices</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <div>
                                    <h5 className="font-bold text-[#0A5191] text-sm uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Mumbai</h5>
                                    <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Andheri East, Mumbai - 400069</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0A5191] text-sm uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Bangalore</h5>
                                    <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Whitefield, Bangalore - 560066</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0A5191] text-sm uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Delhi NCR</h5>
                                    <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Gurugram, Haryana - 122001</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0A5191] text-sm uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Pune</h5>
                                    <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Hinjewadi, Pune - 411057</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};
