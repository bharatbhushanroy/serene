"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import AiChatbot from './AiChatbot';
import ApplyNowSidebarButton from './ApplyNowSidebarButton';

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <AiChatbot />
      <ApplyNowSidebarButton />
    </>
  );
};

export default RootLayout;