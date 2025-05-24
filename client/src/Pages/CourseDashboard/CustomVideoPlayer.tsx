import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaForward, FaBackward, FaExpand, FaCompress } from 'react-icons/fa';
import { MdSpeed } from 'react-icons/md';

const VideoPlayer = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showSpeedOptions, setShowSpeedOptions] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [showControls, setShowControls] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleFullscreenChange = () => {
            const isFull = document.fullscreenElement !== null;
            setIsFullscreen(isFull);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const progressPercent = (video.currentTime / video.duration) * 100;
            setProgress(progressPercent);
        };

        video.addEventListener('timeupdate', updateProgress);
        return () => video.removeEventListener('timeupdate', updateProgress);
    }, []);

    const togglePlay = async () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            try {
                await video.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Playback error:", error);
            }
        }
    };

    const skip = (time: number) => {
        const video = videoRef.current;
        if (video) {
            video.currentTime += time;
        }
    };

    const toggleFullscreen = () => {
        const videoContainer = videoRef.current?.parentElement;
        if (!videoContainer) return;

        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const changeSpeed = (speed: number) => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = speed;
            setPlaybackSpeed(speed);
            setShowSpeedOptions(false);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (video) {
            const seekTo = (parseFloat(e.target.value) / 100) * video.duration;
            video.currentTime = seekTo;
            setProgress(parseFloat(e.target.value));
        }
    };

    return (
        <div
            className="w-full aspect-video bg-black relative rounded-lg overflow-hidden"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full"
                controls={false}
                preload="metadata"
                controlsList="nodownload"
                disablePictureInPicture
            />
            <AnimatePresence>
                {showControls && (
                    <>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                            className=" absolute bottom-18 left-0 w-full z-20 appearance-none h-1 bg-green-600 rounded cursor-pointer transition-colors duration-300 hover:bg-[#ccc]"
                        />
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="absolute bottom-4 px-10 left-0 right-0 flex justify-between gap-4 items-center z-10  py-2 rounded"
                        >
                            <div className="flex items-center justify-center gap-6">
                                <motion.button whileTap={{ scale: 0.9 }} onClick={() => skip(-10)} className="text-white hover:text-blue-400 text-2xl">
                                    <FaBackward />
                                </motion.button>
                                <motion.button whileTap={{ scale: 0.9 }} onClick={togglePlay} className="text-white hover:text-green-400 text-2xl">
                                    {isPlaying ? <FaPause /> : <FaPlay />}
                                </motion.button>
                                <motion.button whileTap={{ scale: 0.9 }} onClick={() => skip(10)} className="text-white hover:text-blue-400 text-2xl">
                                    <FaForward />
                                </motion.button>
                            </div>
                            <div className="flex items-center justify-center gap-6">
                                <div className="relative">
                                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => setShowSpeedOptions(!showSpeedOptions)} className="text-white hover:text-yellow-400 text-2xl">
                                        <MdSpeed className='size-7' />
                                    </motion.button>
                                    {showSpeedOptions && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute bottom-full mb-2 bg-gray-800 text-white rounded shadow p-2 w-20 text-center"
                                        >
                                            {[1, 1.25, 1.5, 2].map((speed) => (
                                                <div
                                                    key={speed}
                                                    onClick={() => changeSpeed(speed)}
                                                    className={`px-2 py-1 cursor-pointer hover:bg-gray-600 ${speed === playbackSpeed ? 'font-bold text-yellow-300' : ''}`}
                                                >
                                                    {speed}x
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                                <motion.button whileTap={{ scale: 0.9 }} onClick={toggleFullscreen} className="text-white hover:text-purple-400 text-2xl">
                                    {isFullscreen ? <FaCompress /> : <FaExpand />}
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VideoPlayer;