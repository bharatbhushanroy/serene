"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import AiChatbot from './AiChatbot';
import ApplyNowSidebarButton from './ApplyNowSidebarButton';
import GlobalAnimatedBackground from './GlobalAnimatedBackground';
import InteractiveCursor from './InteractiveCursor'; // New import

const RootLayout = () => {
  return (
    <>
      <GlobalAnimatedBackground />
      <InteractiveCursor /> {/* Add the interactive cursor here */}
      <Outlet />
      <AiChatbot />
      <ApplyNowSidebarButton />
    </>
  );
};

export default RootLayout;