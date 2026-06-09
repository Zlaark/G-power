'use client';

import { useState, useEffect } from 'react';
import { FadeIn } from "@/components/FadeIn";
import { Mail, Phone, MapPin, Clock, Send, Globe, CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'General Inquiry',
        message: ''
    });
    
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    // Simple Math Captcha
    const [captcha, setCaptcha] = useState(() => {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        return { num1: n1, num2: n2, result: n1 + n2 };
    });
    const [captchaInput, setCaptchaInput] = useState('');

    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1: n1, num2: n2, result: n1 + n2 });
        setCaptchaInput('');
    };

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'firstName':
                return value.trim().length < 2 ? 'First name is too short' : '';
            case 'lastName':
                return value.trim().length < 2 ? 'Last name is too short' : '';
            case 'email':
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
            case 'phone':
                return !/^\d{10}$/.test(value) ? 'Please enter a valid 10-digit phone number' : '';
            case 'message':
                return value.trim().length < 10 ? 'Message should be at least 10 characters' : '';
            default:
                return '';
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        let processedValue = value;
        if (name === 'phone') {
            processedValue = value.replace(/\D/g, '').slice(0, 10);
        }
        
        setFormData(prev => ({ ...prev, [name]: processedValue }));
        
        // Real-time validation
        const error = validateField(name, processedValue);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors = {
            firstName: validateField('firstName', formData.firstName),
            lastName: validateField('lastName', formData.lastName),
            email: validateField('email', formData.email),
            phone: validateField('phone', formData.phone),
            message: validateField('message', formData.message),
            captcha: parseInt(captchaInput) !== captcha.result ? 'Incorrect answer' : ''
        };
        
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(err => err !== '');
        if (hasErrors) return;

        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            interest: 'General Inquiry',
            message: ''
        });
        setCaptchaInput('');
        setSubmitted(false);
        generateCaptcha();
    };

    return (
        <section className="bg-white py-12 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center">
            <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                
                {/* Contact Form Section */}
                <div className="lg:col-span-3">
                    <FadeIn delay={100} direction="right">
                        <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#121010] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Send Us a Message
                            </h2>
                            <p className="text-[#64748B] mb-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Our team typically responds within 24 business hours.
                            </p>

                            {submitted ? (
                                <div className="text-center py-10 bg-[#F0FDF4] rounded-[20px] border border-[#BBF7D0] px-6">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A5191] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Message Sent!</h3>
                                    <p className="text-[#64748b] font-medium mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        Thank you for reaching out. We have received your inquiry and will get back to you shortly.
                                    </p>
                                    <button 
                                        onClick={resetForm}
                                        className="px-8 py-3 bg-[#0A5191] text-white rounded-[14px] font-bold shadow-lg hover:bg-[#0A5191]/90 transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>First Name *</label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="John"
                                                className={`w-full bg-[#F9FAFB] border ${errors.firstName ? 'border-red-500 ring-2 ring-red-500/10' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] transition-all`}
                                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                                required
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs font-medium">{errors.firstName}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Last Name *</label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Doe"
                                                className={`w-full bg-[#F9FAFB] border ${errors.lastName ? 'border-red-500 ring-2 ring-red-500/10' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] transition-all`}
                                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                                required
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs font-medium">{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Email Address *</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john.doe@example.com"
                                                className={`w-full bg-[#F9FAFB] border ${errors.email ? 'border-red-500 ring-2 ring-red-500/10' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] transition-all`}
                                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="9876543210"
                                                className={`w-full bg-[#F9FAFB] border ${errors.phone ? 'border-red-500 ring-2 ring-red-500/10' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] transition-all`}
                                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                                required
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>What are you interested in?</label>
                                        <select 
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] px-4 py-3 text-[#121010] focus:outline-none focus:border-[#0A5191] transition-all appearance-none cursor-pointer"
                                            style={{ fontFamily: "'Poppins', sans-serif" }}
                                        >
                                            <option>General Inquiry</option>
                                            <option>BESS Solutions</option>
                                            <option>Partnership</option>
                                            <option>Career Opportunities</option>
                                            <option>Technical Support</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Message *</label>
                                        <textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your project or how we can help you..."
                                            rows={5}
                                            className={`w-full bg-[#F9FAFB] border ${errors.message ? 'border-red-500 ring-2 ring-red-500/10' : 'border-[#E5E7EB]'} rounded-[14px] px-4 py-3 text-[#121010] placeholder-gray-400 focus:outline-none focus:border-[#0A5191] transition-all resize-none`}
                                            style={{ fontFamily: "'Poppins', sans-serif" }}
                                            required
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message}</p>}
                                    </div>

                                    {/* Captcha */}
                                    <div className="space-y-3 bg-gray-50 p-4 rounded-[16px] border border-gray-100">
                                        <label className="text-sm font-bold text-[#121010]" style={{ fontFamily: "'Poppins', sans-serif" }}>Security Check *</label>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 font-bold text-[#0A5191] shadow-sm select-none">
                                                <span>{captcha.num1} + {captcha.num2} = </span>
                                            </div>
                                            <input 
                                                type="text" 
                                                value={captchaInput}
                                                onChange={(e) => setCaptchaInput(e.target.value.replace(/\D/g, ''))}
                                                placeholder="?"
                                                className={`w-20 px-4 py-2 bg-white border ${errors.captcha ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#0A5191] text-center font-bold text-[#0A5191]`}
                                                required
                                            />
                                            <button 
                                                type="button" 
                                                onClick={generateCaptcha}
                                                className="p-2 text-gray-400 hover:text-[#0A5191] transition-colors"
                                                title="Refresh Captcha"
                                            >
                                                <RefreshCw size={18} />
                                            </button>
                                        </div>
                                        {errors.captcha && <p className="text-red-500 text-xs font-medium">{errors.captcha}</p>}
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#0A5191] text-white px-8 py-4 rounded-[14px] font-bold flex items-center justify-center space-x-2 hover:bg-[#0A5191]/90 shadow-[0_10px_25px_rgba(10,81,145,0.3)] transition-all w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <RefreshCw size={18} className="animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>

                {/* Contact Info Column */}
                <div className="lg:col-span-2 space-y-10">
                    <FadeIn delay={200} direction="left">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px] group-hover:bg-[#0A5191] group-hover:text-white transition-all duration-300">
                                    <MapPin className="text-[#0A5191] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Corporate Office Address</h4>
                                    <p className="text-[#475569] text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>No. 621/4F, Sire Mansion, Anna Salai, Thousand Lights, Chennai, Tamil Nadu - 600006</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px] group-hover:bg-[#0A5191] group-hover:text-white transition-all duration-300">
                                    <Phone className="text-[#0A5191] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Reg. Mobile No &amp; Email ID</h4>
                                    <div className="space-y-1">
                                        <p className="text-[#475569] text-sm font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>+91 9894277915</p>
                                        <p className="text-[#475569] text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>info@gpowerindia.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px] group-hover:bg-[#0A5191] group-hover:text-white transition-all duration-300">
                                    <Mail className="text-[#0A5191] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</h4>
                                    <p className="text-[#475569] text-sm font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>info@gpowerindia.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-[#0A5191]/10 p-3 rounded-[14px] group-hover:bg-[#0A5191] group-hover:text-white transition-all duration-300">
                                    <Clock className="text-[#0A5191] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#121010] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Business Hours</h4>
                                    <p className="text-[#475569] text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Monday to Saturday - 9:30AM to 6:30PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Regional Offices Block */}
                        <div className="mt-8 md:mt-12 bg-[#0A5191] rounded-[24px] p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Globe size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <ShieldCheck className="text-white/80" size={20} />
                                    <h4 className="text-lg md:text-xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Regional Offices</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <h5 className="font-bold text-white/90 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Mumbai</h5>
                                        <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Andheri East, Mumbai - 400069</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white/90 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Delhi</h5>
                                        <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Okhla Phase III, New Delhi - 110020</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white/90 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Bengaluru</h5>
                                        <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Whitefield, Bengaluru - 560066</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white/90 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Hyderabad</h5>
                                        <p className="text-sm opacity-80" style={{ fontFamily: "'Poppins', sans-serif" }}>Madhapur, Hyderabad - 500081</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
