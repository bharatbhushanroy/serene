import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-fintech-background-light/80 backdrop-blur-sm py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-fintech-border-light">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <QickyLogo size="md" /> {/* Use the new QickyLogo component */}
        </Link>
      </div>
      <nav className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Home</Link>
        <Link to="/about" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">About Us</Link>
        <Link to="/blog" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Blog</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-fintech-text-muted hover:text-fintech-text-dark transition-colors focus:outline-none">
            Tools & Resources <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-fintech-card-light border-fintech-blue-accent text-fintech-text-dark">
            <Link to="/loan-calculator"><DropdownMenuItem className="hover:bg-fintech-blue-soft/20">Loan Calculator</DropdownMenuItem></Link>
            <Link to="/faqs"><DropdownMenuItem className="hover:bg-fintech-blue-soft/20">FAQs</DropdownMenuItem></Link>
            <Link to="/blog"><DropdownMenuItem className="hover:bg-fintech-blue-soft/20">Blog Posts</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/contact" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Contact Us</Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/apply-loan"><Button variant="ghost" className="text-fintech-text-muted hover:text-fintech-text-dark hover:bg-fintech-blue-soft/10">Apply Now</Button></Link>
        <Link to="/login"><Button variant="ghost" className="text-fintech-text-muted hover:text-fintech-text-dark hover:bg-fintech-blue-soft/10">Login</Button></Link>
        <Link to="/signup"><Button className="bg-gradient-button-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">Sign Up</Button></Link>
      </div>
      {/* Mobile menu toggle would go here */}
    </header>
  );
};

export default Header;