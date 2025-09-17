import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-fintech-background-light text-fintech-text-dark py-12 px-6 md:px-12 lg:px-24 border-t border-fintech-border-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="col-span-full lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img src="/public/favicon.ico" alt="Qicky Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-fintech-text-dark">Qicky</span>
          </Link>
          <p className="text-sm text-fintech-text-muted max-w-xs">
            Your trusted partner for quick and flexible personal loans.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-text-dark">Company</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Tools & Resources */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-text-dark">Resources</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/faqs" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">FAQs</Link></li>
            <li><Link to="/loan-calculator" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Loan Calculator</Link></li>
            <li><Link to="/blog" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Blog Posts</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-text-dark">Legal</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/privacy" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookies" className="text-fintech-text-muted hover:text-fintech-text-dark transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-full md:col-span-4 lg:col-span-1 flex flex-col items-center md:items-end lg:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-text-dark">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-fintech-text-muted hover:text-fintech-blue-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-fintech-text-muted hover:text-fintech-blue-accent transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-fintech-text-muted hover:text-fintech-blue-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-fintech-text-muted hover:text-fintech-blue-accent transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-fintech-border-light/50 text-center text-sm text-fintech-text-muted">
        &copy; {new Date().getFullYear()} Qicky. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;