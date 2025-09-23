"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VideoBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[-2] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter blur-sm opacity-10"
        poster="/public/placeholder.svg" // You might want to replace this with a static image from your video
      >
        {/* Replace 'your-background-video.mp4' with the path to your actual video file */}
        {/* For example, if your video is in `public/videos/background-video.mp4`, use `/videos/background-video.mp4` */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-and-purple-liquid-background-4940-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoBackground;