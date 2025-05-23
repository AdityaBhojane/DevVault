import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTheme } from '../../zustand/Theme Store/useTheme';

const courses = [
  {
    id: 1,
    banner: 'https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=1753315200&v=beta&t=8jfYrD9JEjbcTIYKzvFKM2vgiKfU0dqr_sRIeXrlNYo',
    title: 'Full Stack Web Development',
    description: 'Master frontend and backend development using modern tools.',
    rating: 4.8,
    price: '$199',
    seatsLeft: 12,
    lastDate: 'June 15, 2025'
  },
  {
    id: 2,
    banner: 'https://wp-media-design-studio.s3.us-east-1.amazonaws.com/uploads/2023/04/Para-image-01-1.jpeg',
    title: 'UI/UX Design Bootcamp',
    description: 'Learn to design beautiful and functional user interfaces.',
    rating: 4.7,
    price: '$149',
    seatsLeft: 8,
    lastDate: 'June 20, 2025'
  },
  {
    id: 3,
    banner: 'https://repository-images.githubusercontent.com/492834560/f00cf87f-9e5a-4bdd-ab9f-11d2312275bd',
    title: 'Data Structures & Algorithms',
    description: 'Crack coding interviews with structured DSA preparation.',
    rating: 4.9,
    price: '$99',
    seatsLeft: 5,
    lastDate: 'June 10, 2025'
  },
];

export default function PopularCoursesSection() {
  const currentTheme = useTheme((state) => state.currentTheme);

  return (
    <section className={`px-6 md:px-20 py-20 transition-all duration-700 ${
      currentTheme ? 'bg-[#f0fdf4]' : 'bg-[#0d1117]'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${
          currentTheme ? 'text-black' : 'text-white'
        }`}>
          Popular / Trending Courses
        </h2>
        <p className={`text-base md:text-lg max-w-xl mx-auto ${
          currentTheme ? 'text-gray-700' : 'text-gray-300'
        }`}>
          Join our top-rated courses trusted by thousands of learners worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className={`rounded-xl shadow-lg select-none overflow-hidden transition-transform duration-100 cursor-pointer ${
              currentTheme ? 'bg-white text-black' : 'bg-[#1f2937] text-white'
            }`}
          >
            <img src={course.banner} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold truncate">{course.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{course.description}</p>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={16} fill={index < Math.floor(course.rating) ? 'currentColor' : 'none'} />
                ))}
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">({course.rating})</span>
              </div>
              <div className="text-base font-medium">Price: <span className="text-green-500">{course.price}</span></div>
              <div className="text-sm">Seats Left: <span className="font-semibold">{course.seatsLeft}</span></div>
              <div className="text-sm">Enroll By: <span className="font-semibold">{course.lastDate}</span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}