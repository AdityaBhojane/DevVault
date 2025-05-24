import React from 'react';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const CourseDetailsPage: React.FC = () => {
  const currentTheme = useTheme((state) => state.currentTheme);

  const course = {
    title: 'Mastering React.js for Frontend Development',
    subtitle: 'From Basics to Advanced Concepts',
    description: `This course is your complete guide to learning React from scratch. 
    You'll go from building your first component to mastering complex concepts like hooks, context, performance optimization, and more.`,
    price: '₹1,999',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoqmEC3hmAuYOLEFCitbByZz66sQxr4Gaiw&s', 
    instructor: {
      name: 'Aditya Bhojane',
      profilePic: 'https://via.placeholder.com/80',
      bio: 'Full Stack Developer & Mentor with 5+ years experience building scalable apps.',
    },
    lectures: [
      { title: 'Introduction to React', duration: '8:32', isFree: true },
      { title: 'What is JSX?', duration: '10:10', isFree: true },
      { title: 'Functional Components', duration: '12:45', isFree: true },
      { title: 'Props and State', duration: '14:22', isFree: false },
      { title: 'useState & useEffect Hooks', duration: '15:47', isFree: false },
      { title: 'Conditional Rendering', duration: '9:50', isFree: false },
      { title: 'Lists and Keys', duration: '8:30', isFree: false },
      { title: 'Forms and Controlled Components', duration: '11:40', isFree: false },
      { title: 'React Router DOM', duration: '13:35', isFree: false },
      { title: 'Context API', duration: '12:55', isFree: false },
      { title: 'useReducer Hook', duration: '14:10', isFree: false },
      { title: 'Code Splitting & Lazy Loading', duration: '10:50', isFree: false },
      { title: 'Performance Optimization', duration: '16:22', isFree: false },
      { title: 'Custom Hooks', duration: '11:18', isFree: false },
      { title: 'Deploying React App', duration: '9:00', isFree: false },
    ],
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 
      ${currentTheme ? 'bg-[#f7fdfb] text-black' : 'bg-[#111827] text-white'}`}
    >
      <div className="px-4 md:px-20 py-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10">

        {/* Left Section */}
        <div className="flex-1">
          {/* Thumbnail */}
          <img
            src={course.thumbnail}
            alt="Course Banner"
            className="w-full max-h-[400px] object-cover rounded-xl shadow mb-6"
          />

          {/* Text Content */}
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <h2 className="text-xl text-green-500 font-semibold mb-4">{course.subtitle}</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            {course.description}
          </p>

          {/* Instructor Info */}
          <div
            className={`flex items-center gap-4 p-4 rounded-md shadow transition-colors duration-500 
            ${currentTheme ? 'bg-white' : 'bg-gray-800'}`}
          >
            <img
              src={course.instructor.profilePic}
              alt="Instructor"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{course.instructor.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor.bio}</p>
            </div>
          </div>
        </div>

        {/* Buy Section */}
        <div
          className={`lg:w-1/3 w-full h-fit sticky top-24 p-6 shadow-xl rounded-xl transition-colors duration-500
          ${currentTheme ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
        >
          <h3 className="text-2xl font-bold mb-4">{course.price}</h3>
          <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 list-disc list-inside">
            <li>Lifetime Access</li>
            <li>Certificate of Completion</li>
            <li>Downloadable Resources</li>
            <li>30-Day Money Back Guarantee</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
          >
            Buy Now
          </motion.button>
        </div>
      </div>

      {/* Lectures Section */}
      <div className="px-4 md:px-20 pb-16 max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mt-10 mb-4">Course Content</h2>
        <div className="grid gap-4">
          {course.lectures.map((lec, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-md shadow-md flex justify-between items-center
              ${lec.isFree
                ? `${currentTheme ? 'bg-white hover:bg-green-50' : 'bg-gray-800 hover:bg-gray-700'} cursor-pointer`
                : `${currentTheme ? 'bg-white' : 'bg-gray-800'} opacity-60 cursor-not-allowed'`}`}
            >
              <div>
                <p className="font-medium">{lec.title}</p>
                <span className="text-sm text-gray-500">{lec.duration}</span>
              </div>
              {!lec.isFree? <Lock className="w-5 h-5 text-red-500" />:"Free to watch"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
