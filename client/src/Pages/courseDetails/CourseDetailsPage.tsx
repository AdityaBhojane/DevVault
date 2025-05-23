import React from 'react';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { motion } from 'framer-motion';

const CourseDetailsPage: React.FC = () => {
  const currentTheme = useTheme((state) => state.currentTheme);

  // Dummy data
  const course = {
    title: 'Mastering React.js for Frontend Development',
    subtitle: 'A complete guide from beginner to advanced',
    description: `In this comprehensive course, you'll learn React.js from the ground up.
    We'll cover everything from components and hooks to context API and advanced optimization techniques.
    You'll also build real-world projects to solidify your understanding.`,
    price: '₹1,999',
    thumbnail: 'https://wp-media-design-studio.s3.us-east-1.amazonaws.com/uploads/2023/04/Para-image-01-1.jpeg',
    instructor: {
      name: 'Aditya Bhojane',
      profilePic: 'https://imgcdn.stablediffusionweb.com/2024/4/9/09fc42b9-7e87-4029-b7a9-8b684e102055.jpg',
      bio: 'Full Stack Developer & Mentor with 5+ years experience building scalable apps.',
    },
  };

  return (
    <div
      className={`min-h-screen flex items-start px-4 md:px-20 py-10 transition-colors duration-500
      ${currentTheme ? 'bg-[#f7fdfb] text-black' : 'bg-[#111827] text-white'}`}
    >
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[1400px] mx-auto">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 overflow-auto"
        >
          <img
            src={course.thumbnail}
            alt="Course Thumbnail"
            className="w-full max-h-[300px] object-cover rounded-lg shadow mb-6"
          />

          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <h2 className="text-xl text-green-500 font-semibold mb-4">{course.subtitle}</h2>

          <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            {course.description}
          </p>

          {/* Instructor */}
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
        </motion.div>

        {/* Right Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
