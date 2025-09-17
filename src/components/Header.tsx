import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/public/favicon.ico" alt="Qicky Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-gray-800">Qicky</span>
        </Link>
      </div>
      <nav className="hidden lg:flex items-center space-x-8">
        <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
        <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link>
        <Link to="/faqs" className="text-gray-600 hover:text-primary transition-colors">FAQs</Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/login">
          <Button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-opacity">Login</Button>
        </Link>
      </div>
      {/* Mobile menu toggle would go here */}
    </header>
  );
};

export default Header;