"use client";

import React, { Suspense } from 'react'; // Import Suspense
import { Outlet } from 'react-router-dom';
// import AiChatbot from './AiChatbot'; // Removed direct import
import ApplyNowSidebarButton from './ApplyNowSidebarButton';
import GlobalAnimatedBackground from './GlobalAnimatedBackground';
import InteractiveCursor from './InteractiveCursor';

// Lazy load the AiChatbot component
const LazyAiChatbot = React.lazy(() => import('./AiChatbot'));

const RootLayout = () => {
  return (
    <>
      <GlobalAnimatedBackground />
      <InteractiveCursor />
      <Outlet />
      {/* Render the lazy-loaded AiChatbot with Suspense */}
      <Suspense fallback={null}>
        <LazyAiChatbot />
      </Suspense>
      <ApplyNowSidebarButton />
    </>
  );
};

export default RootLayout;