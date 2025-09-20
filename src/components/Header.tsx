import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Home, LayoutGrid, Settings, BookOpen, Info, Phone, LogIn, UserPlus, Sun, Moon, ArrowRight } from 'lucide-react';
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component

// Placeholder for theme toggle functionality
const ThemeToggle = () => {
  const [theme, setTheme] = React.useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // In a real app, you'd update a global theme context or add/remove a 'dark' class to <html>
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-fintech-header-text hover:bg-fintech-header-bg/50">
      {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-fintech-header-bg/80 backdrop-blur-sm py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <QickyLogo size="md" />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center space-x-6">
        <Link to="/" className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors">
          <Home className="h-4 w-4 mr-1" /> Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors focus:outline-none">
            <LayoutGrid className="h-4 w-4 mr-1" /> Products <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-fintech-header-bg border-gray-700 text-fintech-header-text">
            <Link to="/apply-loan"><DropdownMenuItem className="hover:bg-gray-700">Personal Loans</DropdownMenuItem></Link>
            <DropdownMenuItem className="hover:bg-gray-700">Business Loans</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700">Home Loans</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors focus:outline-none">
            <Settings className="h-4 w-4 mr-1" /> Tools <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-fintech-header-bg border-gray-700 text-fintech-header-text">
            <Link to="/loan-calculator"><DropdownMenuItem className="hover:bg-gray-700">Loan Calculator</DropdownMenuItem></Link>
            <DropdownMenuItem className="hover:bg-gray-700">EMI Calculator</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors focus:outline-none">
            <BookOpen className="h-4 w-4 mr-1" /> Resources <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-fintech-header-bg border-gray-700 text-fintech-header-text">
            <Link to="/blog"><DropdownMenuItem className="hover:bg-gray-700">Blog Posts</DropdownMenuItem></Link>
            <Link to="/faqs"><DropdownMenuItem className="hover:bg-gray-700">FAQs</DropdownMenuItem></Link>
            <Link to="/privacy"><DropdownMenuItem className="hover:bg-gray-700">Privacy Policy</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/about" className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors">
          <Info className="h-4 w-4 mr-1" /> About Us
        </Link>
        <Link to="/contact" className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors">
          <Phone className="h-4 w-4 mr-1" /> Contact
        </Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <ThemeToggle />
        <Link to="/login"><Button variant="ghost" className="flex items-center text-fintech-header-text hover:bg-fintech-header-bg/50">
          <LogIn className="h-4 w-4 mr-2" /> Login
        </Button></Link>
        <Link to="/apply-loan">
          <Button className="bg-gradient-button-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center group">
            Apply Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
      {/* Mobile menu toggle would go here */}
    </header>
  );
};

export default Header;