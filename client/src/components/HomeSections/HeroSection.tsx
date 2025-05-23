import React from 'react';
import { Button} from 'antd';
import { motion } from 'framer-motion';
import { useTheme } from '../../zustand/Theme Store/useTheme';


const HeroSection: React.FC = () => {
  const currentTheme = useTheme((state) => state.currentTheme);


  return (
    <div
      className={`
      min-h-screen flex flex-col transition-colors duration-500
      bg-gradient-to-br
      ${currentTheme ? 'from-[#e0faf1] via-[#e8f5e9] to-[#f1f8e9]' : 'from-[#1f2937] via-[#111827] to-[#114832]'}
    `}
    >



      <main className="flex flex-1 items-center justify-center text-center px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl transition-colors duration-500 flex flex-col items-center"
        >

          <h1
            className={`text-5xl md:text-6xl font-extrabold leading-tight mb-4 ${currentTheme ? 'text-black' : 'text-white'
              }`}
          >
            Learn. Grow. <span className="text-green-500">Succeed.</span>
          </h1>


          <h3
            className={`text-2xl md:text-3xl font-semibold mb-6 ${currentTheme ? 'text-green-600' : 'text-green-400'
              }`}
          >
            Empower your future with the right skills
          </h3>


          <div className="w-24 h-1 bg-green-500 rounded mb-8 mx-auto md:mx-0"></div>


          <p
            className={`text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto md:mx-0 ${currentTheme ? 'text-gray-800' : 'text-gray-400'
              }`}
          >
            Your all-in-one learning management system to upskill with structured content, anywhere, anytime.
          </p>


          <Button
            type="primary"
            size="large"
            className="px-8 py-3 text-lg rounded-md hover:scale-105 transition-all shadow-lg"
          >
            Explore Courses
          </Button>


          <p
            className={`mt-8 text-sm italic max-w-md mx-auto md:mx-0 ${currentTheme ? 'text-gray-600' : 'text-gray-500'
              }`}
          >
            Trusted by over <span className="font-semibold">10,000 learners</span> worldwide.
          </p>


          <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto text-center md:text-left">
            {[
              {
                title: 'Expert-Led Courses',
                desc: 'Learn from industry leaders and experienced instructors.',
              },
              {
                title: 'Flexible Learning',
                desc: 'Access courses anytime, anywhere on any device.',
              },
              {
                title: 'Certification',
                desc: 'Earn certificates to showcase your skills.',
              },
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-lg shadow-md ${currentTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'
                  }`}
                style={{ flex: '1 1 0' }}
              >
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HeroSection;
