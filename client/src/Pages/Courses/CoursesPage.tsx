import React, { useState } from 'react';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { motion } from 'framer-motion';
import { Rate } from 'antd';


const coursesData = [
    {
        id: 1,
        image: '/images/react-course.jpg',
        title: 'React Mastery Bootcamp',
        description: 'Learn React from basics to advanced in this comprehensive bootcamp.',
        rating: 4.5,
        price: '$99',
        seatsRemaining: 12,
        lastDate: '2025-06-30',
        category: 'Frontend'
    },
    {
        id: 2,
        image: '/images/node-course.jpg',
        title: 'Node.js Backend Development',
        description: 'Master the backend with Node.js, Express, and MongoDB.',
        rating: 4.8,
        price: '$129',
        seatsRemaining: 5,
        lastDate: '2025-06-15',
        category: 'Backend'
    },
    // Add more courses as needed...
];

const CoursePage: React.FC = () => {
    const currentTheme = useTheme((state) => state.currentTheme);
    const [category, setCategory] = useState<string>('All');
    const [search, setSearch] = useState<string>('');

    const filteredCourses = coursesData.filter((course) => {
        const matchesCategory = category === 'All' || course.category === category;
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const inputClass = `
    w-full md:w-1/2 px-4 py-2 rounded-md border outline-none transition
    ${currentTheme
            ? 'bg-white text-black border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-500'
            : 'bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-400'}
  `;

    const selectClass = `
    w-full md:w-1/4 px-4 py-2 rounded-md border outline-none transition
    ${currentTheme
            ? 'bg-white text-black border-gray-300 focus:ring-2 focus:ring-green-500'
            : 'bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-green-400'}
  `;
    return (
        <div
            className={`min-h-screen w-full px-6 md:px-20 py-12 transition-colors duration-500 bg-gradient-to-br ${currentTheme
                    ? 'from-[#e0faf1] via-[#e8f5e9] to-[#f1f8e9]'
                    : 'from-[#1f2937] via-[#111827] to-[#114832]'
                }`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center mt-20"
            >
                <h1 className={`text-4xl font-bold ${currentTheme ? 'text-black' : 'text-white'}`}>All Courses</h1>
                <p className={`text-sm mt-2 ${currentTheme ? 'text-gray-700' : 'text-gray-400'}`}>
                    Find the perfect course to upskill and get certified
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                <input
                    type="text"
                    placeholder="Search courses..."
                    onChange={(e) => setSearch(e.target.value)}
                    className={inputClass}
                />

                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className={selectClass}
                >
                    <option value="All">All</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                    <motion.div
                        key={course.id}
                        whileHover={{ scale: 1.03 }}
                        className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${currentTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'
                            }`}
                    >
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-5 space-y-2">
                            <h2 className="text-xl font-bold">{course.title}</h2>
                            <p className="text-sm">{course.description}</p>
                            <Rate allowHalf disabled defaultValue={course.rating} />
                            <div className="text-sm">Seats remaining: {course.seatsRemaining}</div>
                            <div className="text-sm">Enroll before: {course.lastDate}</div>
                            <div className="text-lg font-semibold text-green-600">{course.price}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
