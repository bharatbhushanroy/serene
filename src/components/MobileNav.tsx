"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Menu, Home, LayoutGrid, Settings, BookOpen, Info, Phone, LogIn, UserPlus, ArrowRight } from 'lucide-react';
import QickyLogo from './QickyLogo';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-fintech-header-text hover:bg-fintech-header-bg/50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-fintech-main-bg border-r border-gray-800 flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between px-4 py-2 border-b border-gray-800">
          <SheetTitle>
            <Link to="/" className="flex items-center" onClick={closeSheet}>
              <QickyLogo size="md" />
            </Link>
          </SheetTitle>
          {/* Close button is automatically handled by Sheet */}
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <Link
            to="/"
            className={cn(
              "flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors px-3 py-2 rounded-md",
              location.pathname === '/' && "bg-gray-700 text-white"
            )}
            onClick={closeSheet}
          >
            <Home className="h-5 w-5 mr-3" /> Home
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="products" className="border-b border-gray-800">
              <AccordionTrigger className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors px-3 py-2 rounded-md hover:no-underline">
                <LayoutGrid className="h-5 w-5 mr-3" /> Products
              </AccordionTrigger>
              <AccordionContent className="pl-8 space-y-1 py-2">
                <Link to="/apply-loan" onClick={closeSheet}><div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">Personal Loans</div></Link>
                <div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">Business Loans</div>
                <div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">Home Loans</div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tools" className="border-b border-gray-800">
              <AccordionTrigger className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors px-3 py-2 rounded-md hover:no-underline">
                <Settings className="h-5 w-5 mr-3" /> Tools
              </AccordionTrigger>
              <AccordionContent className="pl-8 space-y-1 py-2">
                <Link to="/loan-calculator" onClick={closeSheet}><div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">Loan Calculator</div></Link>
                <div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">EMI Calculator</div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resources" className="border-b border-gray-800">
              <AccordionTrigger className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors px-3 py-2 rounded-md hover:no-underline">
                <BookOpen className="h-5 w-5 mr-3" /> Resources
              </AccordionTrigger>
              <AccordionContent className="pl-8 space-y-1 py-2">
                <Link to="/blog" onClick={closeSheet}><div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">Blog Posts</div></Link>
                <Link to="/faqs" onClick={closeSheet}><div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">FAQs</div></Link>
                <Link to="/privacy" onClick={closeSheet}><div className="text-fintech-header-text hover:text-fintech-blue-accent py-1">Privacy Policy</div></Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            to="/about"
            className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors px-3 py-2 rounded-md"
            onClick={closeSheet}
          >
            <Info className="h-5 w-5 mr-3" /> About Us
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-fintech-header-text hover:text-fintech-blue-accent transition-colors px-3 py-2 rounded-md"
            onClick={closeSheet}
          >
            <Phone className="h-5 w-5 mr-3" /> Contact
          </Link>
        </div>
        <div className="p-4 border-t border-gray-800 space-y-3">
          <Link to="/login" onClick={closeSheet}>
            <Button variant="ghost" className="w-full flex items-center justify-center text-fintech-header-text hover:bg-fintech-header-bg/50">
              <LogIn className="h-5 w-5 mr-2" /> Login
            </Button>
          </Link>
          <Link to="/apply-loan" onClick={closeSheet}>
            <Button className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center group">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;