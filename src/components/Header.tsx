import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 w-full bg-transparent py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
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
            <DropdownMenuItem className="hover:bg-qicky-blue/20">Loan Calculator</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-qicky-blue/20">FAQs</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-qicky-blue/20">Blog Posts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/contact" className="text-qicky-textmuted hover:text-qicky-text transition-colors">Contact Us</Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <Button variant="ghost" className="text-qicky-textmuted hover:text-qicky-text hover:bg-qicky-blue/20">Apply Now</Button>
        <Button variant="ghost" className="text-qicky-textmuted hover:text-qicky-text hover:bg-qicky-blue/20">Login</Button>
        <Button className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">Sign Up</Button>
      </div>
      {/* Mobile menu toggle would go here */}
    </header>
  );
};

export default Header;