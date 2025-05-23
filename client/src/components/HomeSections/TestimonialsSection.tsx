import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    review:
      'DevVault helped me crack my first interview with confidence. The courses are so structured and beginner-friendly!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=10',
    role: 'Placed at Infosys',
  },
  {
    name: 'Sneha Patel',
    review:
      'I loved the interactive approach! The discussion forums really helped when I was stuck.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?img=32',
    role: 'Placed at TCS',
  },
  {
    name: 'Rohan Mehta',
    review:
      'Amazing platform! I completed a MERN course and got internship offers from 3 companies.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=25',
    role: 'Intern at Zoho',
  },
];

export default function TestimonialsSection() {
  const currentTheme = useTheme((state) => state.currentTheme);

  return (
    <section
      className={`w-full py-20 px-6 md:px-20 transition-all duration-700 flex flex-col items-center justify-center gap-12 ${
        currentTheme ? 'bg-[#e0f2f1]' : 'bg-[#0f172a]'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
            currentTheme ? 'text-black' : 'text-white'
          }`}
        >
          What Our Students Say
        </h2>
        <p
          className={`text-base md:text-lg max-w-xl mx-auto ${
            currentTheme ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Hear from learners who transformed their careers through DevVault.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className={`rounded-xl shadow-xl p-6 backdrop-blur-md transition-all ${
              currentTheme ? 'bg-white text-black' : 'bg-[#1e293b] text-white'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-green-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mb-4 text-sm">"{testimonial.review}"</p>
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}