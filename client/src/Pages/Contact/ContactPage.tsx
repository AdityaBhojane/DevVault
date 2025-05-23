import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const currentTheme = useTheme((state) => state.currentTheme);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subject.trim() && message.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setSubject('');
        setMessage('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div
      className={`w-full min-h-screen px-6 md:px-20 py-16 transition-all duration-500 
      ${currentTheme ? 'bg-[#f7fdfc] text-black' : 'bg-[#0d1117] text-white'}`}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 mt-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas? We’d love to hear from you!
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto grid gap-10 md:grid-cols-3 text-center"
      >
        <div className="space-y-3">
          <Mail className="mx-auto text-green-500" size={28} />
          <p className="font-medium">Email</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">support@devvault.com</p>
        </div>
        <div className="space-y-3">
          <Phone className="mx-auto text-green-500" size={28} />
          <p className="font-medium">Phone</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">+91 98765 43210</p>
        </div>
        <div className="space-y-3">
          <MapPin className="mx-auto text-green-500" size={28} />
          <p className="font-medium">Location</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Remote / Pan-India</p>
        </div>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-16 flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-4 py-3 dark:border dark:placeholder:text-[#7c7c7c] dark:border-black rounded-xl bg-white/80 dark:bg-white/10 text-black dark:text-white outline-none focus:ring-2 ring-green-500 transition-all"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="px-4 py-3  dark:placeholder:text-[#7c7c7c] dark:border dark:border-black rounded-xl bg-white/80 dark:bg-white/10 text-black dark:text-white outline-none focus:ring-2 ring-green-500 transition-all"
          required
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-3 rounded-xl transition hover:bg-green-600"
        >
          Send Message
        </motion.button>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-green-600 font-medium justify-center"
          >
            <CheckCircle size={20} /> Message Sent. Thank You!
          </motion.div>
        )}
      </motion.form>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-xl font-semibold mb-4">Follow us on</h2>
        <div className="flex justify-center items-center gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="hover:text-green-500 transition-all duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-green-500 transition-all duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-green-500 transition-all duration-300" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
