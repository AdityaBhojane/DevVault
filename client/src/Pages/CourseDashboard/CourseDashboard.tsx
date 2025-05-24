'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import  CustomVideoPlayer  from './CustomVideoPlayer';

const CourseDashboard = () => {
  const currentTheme = useTheme((state) => state.currentTheme);

  const lectures = [
    { title: 'Introduction to React', duration: '8:32', isFree: true, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'What is JSX?', duration: '10:10', isFree: true, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Functional Components', duration: '12:45', isFree: true, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Props and State', duration: '14:22', isFree: false, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'useEffect Hook', duration: '15:47', isFree: false, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const [currentLectureIndex, setCurrentLectureIndex] = useState(0);

  const currentLecture = lectures[currentLectureIndex];

  const handleLectureClick = (index: number) => {
    if (lectures[index].isFree) {
      setCurrentLectureIndex(index);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 
      ${currentTheme ? 'bg-[#f9fdfc] text-black' : 'bg-[#0e0f10] text-white'}`}
    >
      <div className="grid md:grid-cols-4 gap-6 px-4 md:px-20 py-8 max-w-[1400px] mx-auto">

        {/* Left: Video Player & Info */}
        <div className="md:col-span-3 space-y-6">
          {/* Video Player */}
          {/* <video
            src={currentLecture.videoUrl}
            controls
            className="w-full h-[60vh] object-contain rounded-lg shadow-xl"
          /> */}
          <CustomVideoPlayer src={currentLecture.videoUrl}/>
          {/* Lecture Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-1">{currentLecture.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentLecture.duration}</p>
          </div>
        </div>

        {/* Right: Sidebar */}
        <div
          className={`rounded-xl shadow-md h-fit p-4 space-y-3 
          ${currentTheme ? 'bg-white' : 'bg-gray-900'}`}
        >
          <h3 className="text-xl font-bold mb-2">Lectures</h3>
          <div className="space-y-2">
            {lectures.map((lec, idx) => (
              <div
                key={idx}
                onClick={() => handleLectureClick(idx)}
                className={`p-3 rounded-lg flex justify-between items-center transition-all cursor-pointer group
                  ${
                    idx === currentLectureIndex
                      ? 'bg-green-100 dark:bg-green-900 font-medium'
                      : lec.isFree
                      ? currentTheme
                        ? 'bg-gray-100 hover:bg-green-100'
                        : 'bg-gray-800 hover:bg-gray-700'
                      : currentTheme
                      ? 'bg-gray-100 opacity-60 cursor-not-allowed'
                      : 'bg-gray-800 opacity-60 cursor-not-allowed'
                  }`}
              >
                <div className="text-sm">
                  <p>{lec.title}</p>
                  <span className="text-xs text-gray-500">{lec.duration}</span>
                </div>
                {!lec.isFree && <Lock className="w-4 h-4 text-red-500" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
