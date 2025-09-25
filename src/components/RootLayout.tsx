"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import AiChatbot from './AiChatbot';
import ApplyNowSidebarButton from './ApplyNowSidebarButton';
import GlobalAnimatedBackground from './GlobalAnimatedBackground'; // Import the new component
// import VideoBackground from './VideoBackground'; // New import - REMOVED

const RootLayout = () => {
  return (
    <>
      {/* <VideoBackground /> Removed the video background */}
      <GlobalAnimatedBackground /> {/* Add the global animated background here */}
      <Outlet />
      <AiChatbot />
      <ApplyNowSidebarButton />
    </>
  );
};

export default RootLayout;