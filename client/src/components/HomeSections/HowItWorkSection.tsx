import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { UserPlus, BookOpen, FileCheck, Award, Briefcase, Computer } from 'lucide-react';

const journeySteps = [
  {
    title: 'Enroll in a Course',
    icon: <UserPlus size={32} className="text-green-500" />,
    description: 'Get started by signing up and choosing your desired course.',
  },
  {
    title: 'Begin Structured Learning',
    icon: <BookOpen size={32} className="text-green-500" />,
    description: 'Access structured modules with video lessons and resources.',
  },
  {
    title: 'Take Quizzes & Assignments',
    icon: <FileCheck size={32} className="text-green-500" />,
    description: 'Practice through quizzes and hands-on assignments.',
  },
  {
    title: 'Industry Grade Project',
    icon: <Computer size={32} className="text-green-500" />,
    description: 'Hands on experience with real word project for good experience',
  },
  {
    title: 'Earn Certificates',
    icon: <Award size={32} className="text-green-500" />,
    description: 'Receive certificates on course completion and performance.',
  },
  {
    title: 'Get Placement Assistance',
    icon: <Briefcase size={32} className="text-green-500" />,
    description: 'Boost your career with resume reviews, mock interviews & job referrals.',
  },
];

export default function HowItWorkSection() {
  const currentTheme = useTheme((state) => state.currentTheme);

  return (
    <section
      className={`
        py-20 px-6 md:px-20 w-full
        transition-colors 
        ${currentTheme
          ? 'bg-gradient-to-br from-[#f0fdf4] via-[#e9fdf0] to-[#d9fbee]'
          : 'bg-gradient-to-br from-[#0c0f12] via-[#14191e] to-[#1d2b29]'}
      `}
      aria-label="How It Works Journey"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className={`text-3xl md:text-5xl font-extrabold ${currentTheme ? 'text-black' : 'text-white'}`}>
          How Your Journey Looks Like
        </h2>
        <div className="w-20 h-1 bg-green-500 rounded mx-auto mt-3 mb-5"></div>
        <p className={`text-base md:text-lg ${currentTheme ? 'text-gray-700' : 'text-gray-300'}`}>
          A simple step-by-step roadmap from enrollment to job placement.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className={`
              rounded-xl p-6 shadow-lg backdrop-blur-md
              border-l-4
              ${currentTheme ? 'bg-white border-green-500 text-black' : 'bg-[#1e1e1e] border-green-500 text-white'}
            `}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
