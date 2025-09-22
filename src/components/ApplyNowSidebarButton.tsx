"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const ApplyNowSidebarButton = () => {
  return (
    <Link to="/apply-loan">
      <Button
        className="fixed left-0 top-1/2 -translate-y-1/2 transform -rotate-90 origin-bottom-left
                   bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-4 py-2 rounded-t-md rounded-b-md
                   text-lg font-semibold shadow-lg hover:opacity-90 transition-colors z-40"
      >
        Get Loan <ChevronDown className="ml-2 h-5 w-5 rotate-90" />
      </Button>
    </Link>
  );
};

export default ApplyNowSidebarButton;