import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { Users, Rocket, Star } from 'lucide-react';

export default function AboutPage() {
    const currentTheme = useTheme((state) => state.currentTheme);

    const sections = [
        {
            icon: <Users size={28} />,
            title: 'Community Driven',
            description: 'We believe learning is more impactful when done together. Our platform encourages collaboration, support, and peer mentorship.',
        },
        {
            icon: <Rocket size={28} />,
            title: 'Career Focused',
            description: 'From day one, our courses are designed to move you closer to your goals—whether that’s a job, freelance, or building your own product.',
        },
        {
            icon: <Star size={28} />,
            title: 'Quality Content',
            description: 'Every module is crafted by experienced mentors, reviewed by industry experts, and regularly updated to match current tech trends.',
        }
    ];

    return (
        <div
            className={`
                w-full min-h-screen  px-6 md:px-20 py-16 transition-all duration-500
                ${currentTheme ? 'bg-[#f7fdfc] text-black' : 'bg-[#0d1117] text-white'}
            `}
        >
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center mt-16 mb-20"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    About DevVault
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    DevVault is on a mission to empower students and aspiring developers by offering 
                    high-quality tech education, project-based learning, and real-world career readiness.
                </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24"
            >
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-base leading-relaxed">
                        To democratize tech education for all by building a platform that provides hands-on 
                        learning, mentorship, and career-oriented resources without the overwhelming noise.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-base leading-relaxed">
                        To become the most trusted learning platform that launches thousands of successful 
                        tech careers globally—accessible, affordable, and future-ready.
                    </p>
                </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose DevVault?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {sections.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: 'spring', stiffness: 150 }}
                            className={`rounded-xl shadow-md p-6 space-y-4 transition-all duration-300 ${
                                currentTheme ? 'bg-white text-black' : 'bg-[#1f2937] text-white'
                            }`}
                        >
                            <div className="text-green-500">{item.icon}</div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
