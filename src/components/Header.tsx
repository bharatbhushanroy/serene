"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext'; // Import useTheme hook

const Header = () => {
  const { theme, toggleTheme } = useTheme(); // Use theme and toggleTheme from context

  return (
    <header className="sticky top-0 z-50 w-full bg-fintech-header-bg/80 backdrop-blur-sm border-b border-fintech-border-light py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-fintech-logo-text mr-8">
          Qicky
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-lg font-medium">
            Home
          </Link>
          <Link to="/loan-simulator" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-lg font-medium">
            Loan Simulator
          </Link>
          <Link to="/apply-loan" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-lg font-medium">
            Apply Now
          </Link>
          <Link to="/about" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-lg font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-lg font-medium">
            Contact
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-fintech-header-text hover:bg-fintech-header-bg/50">
          {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-fintech-header-text hover:bg-fintech-header-bg/50">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-fintech-header-bg border-fintech-border-light p-6">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-xl font-medium">
                Home
              </Link>
              <Link to="/loan-simulator" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-xl font-medium">
                Loan Simulator
              </Link>
              <Link to="/apply-loan" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-xl font-medium">
                Apply Now
              </Link>
              <Link to="/about" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-xl font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-fintech-header-text hover:text-fintech-blue-accent transition-colors text-xl font-medium">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;