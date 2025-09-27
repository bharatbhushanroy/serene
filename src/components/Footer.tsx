"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component
import { motion } from 'framer-motion'; // Import motion

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="relative z-10 w-full bg-fintech-main-bg text-fintech-header-text py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8" // Adjusted grid columns for new section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logo and Description */}
        <motion.div variants={itemVariants} className="col-span-full lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex items-center mb-4">
            <QickyLogo size="md" /> {/* Use the new QickyLogo component */}
          </Link>
          <p className="text-sm text-gray-400 max-w-xs">
            Your trusted partner for quick and flexible personal loans.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div variants={itemVariants} className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-header-text">Company</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Calculators Section (New) */}
        <motion.div variants={itemVariants} className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-header-text">Calculators</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/fd-calculator" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Fixed Deposit Calculator</Link></li>
            <li><Link to="/rd-calculator" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Recurring Deposit Calculator</Link></li>
            {/* Removed Personal Loan EMI Calculator, keeping general EMI Calculator */}
            <li><Link to="/emi-calculator" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">EMI Calculator</Link></li>
            <li><Link to="/car-loan-emi-calculator" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Car Loan EMI Calculator</Link></li>
            <li><Link to="/loan-comparison" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Loan Comparison</Link></li>
            <li><Link to="/interactive-loan-simulator" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Interactive Simulator</Link></li>
            <li><Link to="/loan-calculator" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Advance Loan Simulator</Link></li>
          </ul>
        </motion.div>

        {/* Legal Links */}
        <motion.div variants={itemVariants} className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-header-text">Legal</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/privacy" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookies" className="text-gray-400 hover:text-fintech-blue-accent transition-colors">Cookie Policy</Link></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={itemVariants} className="col-span-full md:col-span-4 lg:col-span-1 flex flex-col items-center md:items-end lg:items-start">
          <h4 className="text-lg font-semibold mb-4 text-fintech-header-text">Follow Us</h4>
          <div className="flex space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fintech-blue-accent transition-colors transform hover:scale-110"
              whileHover={{ scale: 1.2, color: 'hsl(var(--fintech-blue-accent))' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Facebook className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fintech-blue-accent transition-colors transform hover:scale-110"
              whileHover={{ scale: 1.2, color: 'hsl(var(--fintech-blue-accent))' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fintech-blue-accent transition-colors transform hover:scale-110"
              whileHover={{ scale: 1.2, color: 'hsl(var(--fintech-blue-accent))' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fintech-blue-accent transition-colors transform hover:scale-110"
              whileHover={{ scale: 1.2, color: 'hsl(var(--fintech-blue-accent))' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="mt-12 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-400"
      >
        &copy; {new Date().getFullYear()} Qicky. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;