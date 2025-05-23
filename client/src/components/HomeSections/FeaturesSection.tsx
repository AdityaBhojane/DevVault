import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { FileText, GraduationCap, LayoutDashboard, MessageCircle } from 'lucide-react';
import { Card } from 'antd';

export default function FeaturesSection() {
  const currentTheme = useTheme((state) => state.currentTheme);

  const features = [
    {
      icon: <GraduationCap size={40} className="text-green-500 drop-shadow-md" />,
      title: 'Structured Learning',
      description: 'Organize courses by modules, topics, and learning paths for better progression.',
    },
    {
      icon: <LayoutDashboard size={40} className="text-green-500 drop-shadow-md" />,
      title: 'Instructor Dashboard',
      description: 'Manage content, track student progress, and review analytics in one place.',
    },
    {
      icon: <FileText size={40} className="text-green-500 drop-shadow-md" />,
      title: 'Quizzes & Certificates',
      description: 'Evaluate learners and reward them with auto-generated certificates.',
    },
    {
      icon: <MessageCircle size={40} className="text-green-500 drop-shadow-md" />,
      title: 'Discussion Forums',
      description: 'Boost engagement with built-in Q&A and student-teacher communication.',
    },
  ];

  return (
    <section
      aria-label="Core Features and Benefits"
      className={`
        min-h-screen w-full flex flex-col justify-center items-center
        transition-colors duration-700 px-6 md:px-20 py-16
        bg-gradient-to-br
        ${currentTheme
          ? 'from-[#e8f5e9] via-[#f1f5e9] to-[#e0faf1]'
          : 'from-[#0d1117] via-[#1c1f26] to-[#183b3a]'
        }
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl"
      >
        <h2
          className={`text-3xl md:text-5xl font-extrabold mb-4 tracking-tight ${
            currentTheme ? 'text-black' : 'text-white'
          }`}
        >
          Core Features & Benefits
        </h2>
        {/* Decorative accent */}
        <div className="w-20 h-1 bg-green-500 rounded mx-auto mb-6"></div>
        <p
          className={`text-base md:text-lg leading-relaxed ${
            currentTheme ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Everything you need to build, manage, and grow your learning platform with ease.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full">
        {features.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07, y: -8, boxShadow: '0 12px 24px rgba(34,197,94,0.3)' }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="flex justify-center"
          >
            <Card
              hoverable
              className={`
                w-full max-w-sm p-6 rounded-2xl shadow-lg
                transition-colors duration-500 select-none
                flex flex-col items-center text-center
              `}
              style={
                currentTheme
                  ? { backgroundColor: '#f9fafb', color: '#111827' }
                  : { backgroundColor: '#1f2937', color: '#f3f4f6' }
              }
              aria-label={`${title} feature`}
            >
              <div className="mb-6 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
