import { FadeIn } from '@/components/FadeIn';
import { Linkedin, Mail } from 'lucide-react';

export const Leadership = () => {
    const leaders = [
        {
            name: "Rahul Sharma",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
            bio: "Visionary leader with 15+ years of experience in the renewable energy sector."
        },
        {
            name: "Ananya Patel",
            role: "Chief Technology Officer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
            bio: "Expert in lithium-ion battery technology and energy management systems."
        },
        {
            name: "Vikram Singh",
            role: "Director of Operations",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
            bio: "Leading global operations and manufacturing excellence at G-Power."
        }
    ];

    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
                <FadeIn delay={100} direction="up">
                    <div className="text-center max-w-[700px] mx-auto mb-14 md:mb-16">
                        <span className="inline-flex items-center rounded-full border border-[#D8E2EC] bg-white px-5 py-2 text-[#0A5191] font-medium uppercase tracking-[0.18em] mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
                            Leadership
                        </span>
                        <h2
                            className="font-bold text-[#121010] mb-4"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(24px, 3vw, 40px)',
                                lineHeight: '1.2',
                            }}
                        >
                            Meet Our Visionaries
                        </h2>
                        <p
                            className="font-medium text-[#475569]"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(16px, 1.3vw, 20px)',
                                lineHeight: '1.6',
                            }}
                        >
                            The team driving G-Power towards a greener future.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {leaders.map((leader, index) => (
                        <FadeIn key={index} delay={200 + (index * 100)} direction="up">
                            <div className="group relative">
                                <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] mb-6 shadow-[0_10px_30px_rgba(10,81,145,0.08)] border border-[#E5EBF2] group-hover:shadow-[0_20px_50px_rgba(10,81,145,0.15)] transition-all duration-500">
                                    <img 
                                        src={leader.image} 
                                        alt={leader.name} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A5191]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                                        <div className="flex gap-4">
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#0A5191] transition-all">
                                                <Linkedin size={20} strokeWidth={1.5} />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#0A5191] transition-all">
                                                <Mail size={20} strokeWidth={1.5} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 
                                        className="font-bold text-[#121010] mb-1"
                                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px' }}
                                    >
                                        {leader.name}
                                    </h3>
                                    <p 
                                        className="text-[#0A5191] font-semibold text-sm uppercase tracking-wider mb-3"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {leader.role}
                                    </p>
                                    <p 
                                        className="text-[#475569] text-sm leading-relaxed max-w-[280px] mx-auto"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
