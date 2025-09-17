import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-qicky-dark/80 backdrop-blur-sm py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-qicky-blue/20">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/public/favicon.ico" alt="Qicky Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-qicky-text">Qicky</span>
        </Link>
      </div>
      <nav className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="text-qicky-textmuted hover:text-qicky-text transition-colors">Home</Link>
        <Link to="/about" className="text-qicky-textmuted hover:text-qicky-text transition-colors">About Us</Link>
        <Link to="/blog" className="text-qicky-textmuted hover:text-qicky-text transition-colors">Blog</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-qicky-textmuted hover:text-qicky-text transition-colors focus:outline-none">
            Tools & Resources <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-qicky-dark border-qicky-blue text-qicky-text">
            <Link to="/loan-calculator"><DropdownMenuItem className="hover:bg-qicky-blue/20">Loan Calculator</DropdownMenuItem></Link>
            <Link to="/faqs"><DropdownMenuItem className="hover:bg-qicky-blue/20">FAQs</DropdownMenuItem></Link>
            <Link to="/blog"><DropdownMenuItem className="hover:bg-qicky-blue/20">Blog Posts</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/contact" className="text-qicky-textmuted hover:text-qicky-text transition-colors">Contact Us</Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/apply-loan"><Button variant="ghost" className="text-qicky-textmuted hover:text-qicky-text hover:bg-qicky-blue/20">Apply Now</Button></Link>
        <Link to="/login"><Button variant="ghost" className="text-qicky-textmuted hover:text-qicky-text hover:bg-qicky-blue/20">Login</Button></Link>
        <Link to="/signup"><Button className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">Sign Up</Button></Link>
      </div>
      {/* Mobile menu toggle would go here */}
    </header>
  );
};

export default Header;