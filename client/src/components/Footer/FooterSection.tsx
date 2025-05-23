import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { Instagram, Twitter, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';

export default function FooterSection() {
    const currentTheme = useTheme((state) => state.currentTheme);

    return (
        <footer
            className={`
                w-full px-6 md:px-20 py-12 transition-all duration-500
                ${currentTheme ? 'bg-[#f0f4f8] text-black' : 'bg-[#101827] text-white'}
            `}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
            >
                {/* Logo & About */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">DevVault</h2>
                    <p className="text-sm leading-relaxed">
                        Your one-stop platform to learn, grow, and launch your tech career with confidence.
                    </p>
                </div>

                {/* Socials */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex gap-5">
                        {[
                            { icon: <Twitter />, label: 'Twitter' },
                            { icon: <Instagram />, label: 'Instagram' },
                            { icon: <Linkedin />, label: 'LinkedIn' },
                            { icon: <Github />, label: 'GitHub' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="cursor-pointer"
                                title={item.label}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="space-y-3 text-sm">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} /> Mumbai, Maharashtra, India
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} /> +91 98765 43210
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} /> contact@devvault.com
                    </div>
                </div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-10 border-t border-gray-400 text-center text-sm opacity-70">
                © 2025 DevVault. All rights reserved.
            </div>
        </footer>
    );
}
